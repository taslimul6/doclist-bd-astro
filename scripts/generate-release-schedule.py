"""Keep release assignments stable on reruns. Baseline paths never enter the queue."""
import json,sys,datetime
from pathlib import Path
R=Path(__file__).resolve().parents[1];D=R/'data'
def read(p):return json.loads(p.read_text())
baseline=D/'release-baseline.json'
if not baseline.exists():
 if len(sys.argv)<2:raise SystemExit('First run requires original application data directory')
 b=Path(sys.argv[1]);p=read(D/'reports/baseline-references.json');c=read(b/'combinations.json')
 old=['/','/doctors','/specialties','/locations','/hospitals']
 old+=['/doctor/'+d['slug'] for d in p['doctors']]
 old+=['/doctors/'+s for s in p['locations']]+['/specialty/'+s for s in p['specialties']]
 old+=['/doctors/'+k for k in c['specialtyLocation']]
 old+=[x for s in p['hospitals'] for x in ['/hospital/'+s,'/hospital/'+s+'/doctors']]
 old+=['/hospital/'+k for k in c['hospitalSpecialty']]
 baseline.write_text(json.dumps(sorted(set(old)),indent=2)+'\n')
def paths():
 c=read(D/'combinations.json');p=['/','/doctors','/specialties','/locations','/hospitals']
 for f,prefix in [('doctors','/doctor/'),('locations','/doctors/'),('specialties','/specialty/')]:p += [prefix+x['slug'] for x in read(D/(f+'.json'))]
 p+=['/doctors/'+k for k in c['specialtyLocation']]
 p+=[x for h in read(D/'hospitals.json') for x in ['/hospital/'+h['slug'],'/hospital/'+h['slug']+'/doctors']]
 p+=['/hospital/'+k for k in c['hospitalSpecialty']];return set(p)
old=set(read(baseline));f=D/'release-schedule.json';existing=read(f) if f.exists() else {'startDate':'2026-10-18','timezone':'Asia/Dhaka','pagesPerDay':30,'paths':{}}
coverage=set(read(D/'indexed-coverage.json')['paths'])
live_geography=set(read(D/'live-geography-pages.json'))
allpaths=paths()
eligible=lambda p: not p.startswith('/doctor/') and p not in coverage and p not in old and p not in live_geography
queue={p:i for i,p in enumerate(p for p,slot in sorted(existing['paths'].items(),key=lambda item:item[1]) if eligible(p))}
new={p for p in allpaths if eligible(p)}-set(queue)
loc={x['slug']:x for x in read(D/'locations.json')}
def priority(p):
 a=p.strip('/').split('/')
 if len(a)==2 and a[0]=='doctors':return (1,p)
 if len(a)==2 and a[0]=='specialty':return (2,p)
 if len(a)==2 and a[0]=='hospital':return (3,p)
 if a[0]=='doctor':return (0,p)
 return (5,p)
nextslot=max(queue.values(),default=-1)+1
for p in sorted(new,key=priority):queue[p]=nextslot;nextslot+=1
existing['baselinePages']=len(old);existing['paths']=queue;f.write_text(json.dumps(existing,ensure_ascii=False,indent=2)+'\n')
byday={}
for p,slot in queue.items():byday.setdefault(slot//30,[]).append(p)
rows=[{'date':str(datetime.date.fromisoformat(existing['startDate'])+datetime.timedelta(days=day)),'mainPages':len(items),'languageUrls':2*len(items),'paths':items} for day,items in sorted(byday.items())]
(D/'reports/publication-calendar.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2)+'\n')
report={'baselinePages':len(old),'scheduledNewPages':len(queue),'totalMainPages':len(allpaths),'pagesPerDay':30,'languageUrlsPerDay':60,'firstDate':rows[0]['date'],'lastDate':rows[-1]['date'],'days':len(rows),'oldPagesMissing':sorted(old-allpaths)}
(D/'reports/publication-summary.json').write_text(json.dumps(report,indent=2)+'\n');print(json.dumps(report,indent=2))
