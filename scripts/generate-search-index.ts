import fs from 'node:fs';
import doctorData from '../data/doctors.json';
import specialtyData from '../data/specialties.json';
import locationData from '../data/locations.json';
import {specialty,place,provider,address,medicalText} from '../lib/i18n';
import type {Doctor,Specialty,Location} from '../lib/types';

// The original search text, computed at build time instead of during Worker startup.
const specialtyMap=new Map((specialtyData as Specialty[]).map(s=>[s.slug,s]));
const locationMap=new Map((locationData as Location[]).map(l=>[l.slug,l]));
const index=Object.fromEntries((doctorData as Doctor[]).map(d=>[d.id,[d.name,d.qualifications,d.designation,...d.rawSpecialties,...d.specialtySlugs.map(s=>specialtyMap.get(s)?.name||''),...d.chambers.map(c=>c.name+' '+c.address),...d.locationSlugs.map(l=>locationMap.get(l)?.name||''),...d.specialtySlugs.map(s=>specialty('bn',specialtyMap.get(s)?.name||'')),...d.locationSlugs.map(l=>place('bn',locationMap.get(l)?.name||'')),...d.chambers.map(c=>provider('bn',c.name)+' '+address('bn',c.address)),...d.rawSpecialties.map(s=>medicalText('bn',s))].join(' ').toLocaleLowerCase()]));
fs.writeFileSync('data/search-index.json',JSON.stringify(index)+'\n');
console.log(`Prepared search index for ${Object.keys(index).length} profiles`);
