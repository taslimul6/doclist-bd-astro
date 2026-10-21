"""Exercise persistent counters against production Next.js, including concurrent requests."""
import concurrent.futures, json, os, subprocess, tempfile, time, urllib.request, urllib.error, uuid
from pathlib import Path
root=Path(__file__).resolve().parents[1]
base='http://127.0.0.1:3102'
log=tempfile.TemporaryFile(mode='w+')
process=None
with tempfile.TemporaryDirectory() as tmp:
 env={**os.environ,'DOCLIST_DB_PATH':tmp+'/engagement.sqlite'}
 subprocess.run(['node','scripts/init-engagement.mjs'],cwd=root,env=env,check=True,stdout=subprocess.DEVNULL)
 def call(path,body=None,cookie='',status=200,origin=None):
  headers={'Content-Type':'application/json'}
  if cookie:headers['Cookie']=cookie
  if origin:headers['Origin']=origin
  req=urllib.request.Request(base+path,data=json.dumps(body).encode() if body is not None else None,headers=headers)
  client=urllib.request.build_opener(urllib.request.ProxyHandler({}))
  try:
   with client.open(req,timeout=30) as r:code=r.status;data=r.read();response_headers=r.headers
  except urllib.error.HTTPError as e:code=e.code;data=e.read();response_headers=e.headers
  assert code==status,(code,status,data[:500]);return json.loads(data),response_headers
 def start():
  global process
  process=subprocess.Popen(['node','node_modules/next/dist/bin/next','start','--hostname','127.0.0.1','--port','3102'],cwd=root,env=env,stdout=log,stderr=log)
  for _ in range(100):
   try:return call(endpoint)
   except urllib.error.URLError:
    if process.poll() is not None:log.seek(0);raise RuntimeError(log.read())
    time.sleep(.2)
  raise RuntimeError('Server did not start')
 def stop():
  process.terminate()
  try:process.wait(timeout=5)
  except subprocess.TimeoutExpired:process.kill();process.wait()
 doctor=json.loads((root/'data/doctors.json').read_text())[0]
 endpoint='/api/doctors/'+doctor['id']+'/engagement'
 try:
  state,headers=start();assert state=={'loves':0,'impressions':0,'loved':False}
  cookie=headers['Set-Cookie'].split(';')[0];assert 'HttpOnly' in headers['Set-Cookie'];assert 'no-store' in headers['Cache-Control']
  state,_=call(endpoint,{'action':'love'},cookie);assert state['loves']==1 and state['loved']
  with concurrent.futures.ThreadPoolExecutor(max_workers=8) as pool:
   list(pool.map(lambda _:call(endpoint,{'action':'love'},cookie),range(16)))
  state,_=call(endpoint,cookie=cookie);assert state['loves']==1
  state,h=call(endpoint);cookie2=h['Set-Cookie'].split(';')[0];assert not state['loved']
  state,_=call(endpoint,{'action':'love'},cookie2);assert state['loves']==2
  event=str(uuid.uuid4())
  with concurrent.futures.ThreadPoolExecutor(max_workers=8) as pool:
   list(pool.map(lambda _:call(endpoint,{'action':'impression','event':event},cookie),range(16)))
  state,_=call(endpoint,cookie=cookie);assert state['impressions']==1
  with concurrent.futures.ThreadPoolExecutor(max_workers=8) as pool:
   list(pool.map(lambda _:call(endpoint,{'action':'impression','event':str(uuid.uuid4())},cookie),range(24)))
  state,_=call(endpoint,cookie=cookie);assert state['impressions']==25
  call(endpoint,{'action':'impression','event':'invalid'},cookie,status=400)
  call(endpoint,{'action':'love'},cookie,status=403,origin='https://other.example')
  call('/api/doctors/unknown/engagement',cookie=cookie,status=404)
  stop();state,_=start();assert state['loves']==2 and state['impressions']==25
  state,_=call(endpoint,cookie=cookie);assert state['loved']
  print(json.dumps({'status':'passed','checks':'shared love counts, one love per browser, concurrent duplicate love, distinct visitors, impression retry idempotency, concurrent impressions, invalid requests, origin protection and persistence across restart'}))
 finally:
  if process is not None and process.poll() is None:stop()
  log.close()
