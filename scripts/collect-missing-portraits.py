"""Download reviewed portrait candidates; never replace a valid existing local image."""
import asyncio,aiohttp,argparse,json,hashlib,io,re
from pathlib import Path
from collections import defaultdict
from datetime import datetime,timezone
from PIL import Image
R=Path(__file__).resolve().parents[1];parser=argparse.ArgumentParser();parser.add_argument('--candidates',default='data/reports/portrait-candidates-2026-10-17.json');args=parser.parse_args();C=json.loads((R/args.candidates).read_text());Mfile=R/'data/doctor-images.json';M=json.loads(Mfile.read_text());before=set(M);rejectionfile=R/'data/reports/additional-rejected-portraits.json';rejections=json.loads(rejectionfile.read_text()) if rejectionfile.exists() else [];rejected_urls={x['imageUrl'] for x in rejections};rejected_hashes={x['sha256'] for x in rejections};doctors={d['id']:d for d in json.loads((R/'data/doctors.json').read_text())};choices=defaultdict(list);failures=[];added={};hosts=defaultdict(lambda:asyncio.Semaphore(3));collected=datetime.now(timezone.utc).isoformat()
for c in C:
 if c['doctorId'] not in M:choices[c['doctorId']].append(c)
async def one(client,id,items):
 for c in items:
  u=c['imageUrl']
  if u in rejected_urls:continue
  if re.search(r'default\.|placeholder|avatar|dr[-_]male|dr[-_]female|/build/',u,re.I):continue
  try:
   async with hosts[__import__('urllib.parse',fromlist=['urlsplit']).urlsplit(u).netloc]:
    await asyncio.sleep(.2)
    async with client.get(u,timeout=aiohttp.ClientTimeout(total=18)) as response:
     response.raise_for_status();raw=await response.read();resolved=str(response.url)
   if len(raw)>8*1024*1024:raise ValueError('Too large')
   if hashlib.sha256(raw).hexdigest() in rejected_hashes:raise ValueError('Known generic or uncertain portrait')
   im=Image.open(io.BytesIO(raw));im.verify();im=Image.open(io.BytesIO(raw));w,h=im.size;ext={'JPEG':'jpg','PNG':'png','WEBP':'webp','GIF':'gif'}.get(im.format)
   if not ext or min(w,h)<80 or max(w,h)>6000:raise ValueError('Invalid portrait dimensions or type')
   path=R/'public/assets/doctors'/(id+'.'+ext);path.write_bytes(raw)
   item={k:v for k,v in c.items() if k!='doctorId'};item.update(path='/assets/doctors/'+path.name,width=w,height=h,bytes=len(raw),sha256=hashlib.sha256(raw).hexdigest(),collectedAt=collected,resolvedImageUrl=resolved)
   M[id]=item;added[id]=item;return
  except Exception as e:failures.append({'doctorId':id,'imageUrl':u,'error':str(e)[:180]})
async def main():
 async with aiohttp.ClientSession(trust_env=True,connector=aiohttp.TCPConnector(limit=8),headers={'User-Agent':'Mozilla/5.0 (compatible; DocListPortraitCollector/2.0)'}) as client:
  tasks=[asyncio.create_task(one(client,id,items)) for id,items in choices.items()]
  for i,t in enumerate(asyncio.as_completed(tasks),1):
   await t
   if i%10==0:print(json.dumps({'processed':i,'total':len(tasks),'downloaded':len(added)}),flush=True)
 Mfile.write_text(json.dumps(M,ensure_ascii=False,indent=2)+'\n');reportfile=R/'data/reports/additional-portraits-report.json';previous=json.loads(reportfile.read_text()) if reportfile.exists() else {};all_added=set(previous.get('addedDoctorIds',[]))|set(added);report={'collectedAt':collected,'missingBefore':previous.get('missingBefore',len(doctors)-len(before)),'candidateDoctors':len({c['doctorId'] for c in C}),'newLocalPhotos':len(all_added),'localPhotos':len(M),'missingAfter':len(doctors)-len(M),'addedDoctorIds':sorted(all_added),'failures':previous.get('failures',[])+failures};(R/'data/reports/additional-portraits-report.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n');print(json.dumps({k:v for k,v in report.items() if k not in ['addedDoctorIds','failures']}),flush=True)
asyncio.run(main())
