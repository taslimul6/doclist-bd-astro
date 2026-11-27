import rollout from '../data/index-rollout.json';
// Gradual INDEXING, separate from publication: every page stays live for visitors. A page that passes the
// quality rules only gets `index` + a sitemap entry once its slot is released:
//   - the first `initial` slots (highest Search Console demand) on the start day, then
//   - `perDay` more at each Asia/Dhaka midnight.
// Order lives in data/index-rollout.json (scripts/build-index-rollout.mjs). Computed per request, never
// at module load.
type Rollout={startDate:string;initial:number;perDay:number;paths:string[]};
const plan=rollout as Rollout;
const day=86400000;
const slots=new Map(plan.paths.map((p,i)=>[p,i]));
// Start date is set only in data/index-rollout.json (no environment variable).
export function indexRolloutStart(){
 const value=plan.startDate;
 if(!/^\d{4}-\d{2}-\d{2}$/.test(value)||!Number.isFinite(Date.parse(value+'T00:00:00+06:00')))throw new Error('Invalid startDate in data/index-rollout.json');
 return Date.parse(value+'T00:00:00+06:00');
}
/** How many rollout slots are open at `now`. Before the start date the initial batch is already open. */
export function openIndexSlots(now=Date.now()){return plan.initial+plan.perDay*Math.max(0,Math.floor((now-indexRolloutStart())/day));}
/** Slot of a canonical base path; paths missing from the plan queue up after the planned ones. */
export const indexSlot=(path:string)=>slots.get(path)??plan.paths.length;
export const isIndexReleased=(path:string,now=Date.now())=>indexSlot(path)<openIndexSlots(now);
/** When this path's slot opens (null = already open). */
export function indexReleaseAt(path:string,now=Date.now()){const slot=indexSlot(path);if(slot<openIndexSlots(now))return null;return indexRolloutStart()+Math.ceil((slot+1-plan.initial)/plan.perDay)*day;}
