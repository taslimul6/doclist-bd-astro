import {searchDoctors} from './directory';
import type {Query,ListingContext} from './types';
/** Runs the listing search for a page context; `invalid` means the requested page does not exist (404). */
export function runListing(c:ListingContext,query:Query){
  const result=searchDoctors(c.ids,{...query,...(c.specialty?{specialty:c.specialty.slug}:{}),...(c.location?{location:c.location.slug}:{}),...(c.hospital?{hospital:c.hospital.slug}:{})});
  const baseCount=c.ids?.length??searchDoctors(undefined,{}).total;
  return {result,baseCount,invalid:result.invalidPage};
}
