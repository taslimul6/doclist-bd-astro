"""Check bilingual footer routes, saved-list labels and actual contact targets."""
import json,os,subprocess,tempfile,time,urllib.request,urllib.error
from pathlib import Path
R=Path(__file__).resolve().parents[1];client=urllib.request.build_opener(urllib.request.ProxyHandler({}));base='http://127.0.0.1:3126'
with tempfile.TemporaryFile(mode='w+') as log:
 server=subprocess.Popen(['node','node_modules/next/dist/bin/next','start','--hostname','127.0.0.1','--port','3126'],cwd=R,stdout=log,stderr=log)
 try:
  def get(p):return client.open(base+p,timeout=20).read().decode()
  for _ in range(100):
   try:get('/en/contact');break
   except urllib.error.URLError:
    if server.poll() is not None:log.seek(0);raise AssertionError(log.read())
    time.sleep(.2)
  count=0
  for prefix in ['', '/en']:
   for key in ['privacy-policy','terms-of-use','contact','sponsorship']:
    h=get(prefix+'/'+key);count+=1;footer=h.split('<footer',1)[1].split('</footer>',1)[0]
    assert 'Essential Links' in footer
    assert '<h3>Specialties</h3>' not in footer and '<h3>বিশেষজ্ঞ বিভাগ</h3>' not in footer
    assert '<h3>Directory</h3>' not in footer and '<h3>ডিরেক্টরি</h3>' not in footer
    for target in ['privacy-policy','terms-of-use','contact','sponsorship']:assert 'href="'+prefix+'/'+target+'"' in footer
    assert 'href="https://doclist-bd.com'+prefix+'/'+key+'"' in h
    assert 'name="robots" content="index, follow"' in h
    if key in ['contact','sponsorship']:
     assert 'href="mailto:ads.taslimul@gmail.com"' in h and 'href="https://wa.me/8801521405639"' in h and '01521405639' in h
   h=get(prefix+'/my-doc');label='Saved Docs' if prefix else 'আমার ডাক্তার';assert label in h and 'noindex' in h
   assert h.count('href="'+prefix+'/my-doc"')>=2
  output={'status':'passed','essentialPages':count,'footerMenus':True,'contactEmailAndWhatsApp':True,'savedDocsLocalizedAndNoindex':True};(R/'data/reports/essential-pages-http-validation.json').write_text(json.dumps(output,indent=2)+'\n');print(json.dumps(output))
 finally:server.terminate();server.wait(timeout=20)
