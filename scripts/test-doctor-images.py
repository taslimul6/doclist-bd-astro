"""Verify local portrait bytes and identity provenance without network requests."""
from pathlib import Path
import hashlib,json
from PIL import Image
root=Path(__file__).resolve().parents[1]
doctors={d['id']:d for d in json.loads((root/'data/doctors.json').read_text())}
manifest=json.loads((root/'data/doctor-images.json').read_text())
assert manifest,'No local images collected'
candidatefile=root/'data/reports/portrait-candidates-2026-10-17.json'
candidates=json.loads(candidatefile.read_text()) if candidatefile.exists() else []
for id,item in manifest.items():
 assert id in doctors
 assert item['path'].startswith('/assets/doctors/') and '..' not in item['path']
 if item['sourcePage'] not in doctors[id]['sources']:
  assert item.get('sourceScope')=='portrait-only'
  assert item.get('matchEvidence',{}).get('district') in doctors[id]['locationSlugs']
  assert item.get('matchedName') and item.get('matchMethod')
  assert any(c['doctorId']==id and c['sourcePage']==item['sourcePage'] and c['imageUrl']==item['imageUrl'] for c in candidates)
 path=root/'public'/item['path'].lstrip('/');assert path.is_file(),path
 assert hashlib.sha256(path.read_bytes()).hexdigest()==item['sha256']
 with Image.open(path) as image:assert image.size==(item['width'],item['height']);image.verify()
print(json.dumps({'status':'passed','localPhotos':len(manifest),'missing':len(doctors)-len(manifest),'checks':'local asset paths, file integrity, valid images/dimensions, doctor IDs and supplied source-page provenance'}))
