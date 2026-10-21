export type SourceObservation = Record<string,unknown>;
export type Chamber = {specialtySlugs?:string[];provenance?:SourceObservation[];sources?:string[];sourceObservedAt?:string;id:string; hospitalSlug:string; name:string; address:string; locations:string[]; phone:string; schedule:string; fee:string|null; flags:string; source:string};
export type Doctor = {id:string;slug:string;name:string;nameVariants:string[];specialtySlugs:string[];locationSlugs:string[];chambers:Chamber[];qualifications:string;designation:string;institute:string;registration:string;experience:number|null;gender:string|null;image:string|null;description:string|null;rawSpecialties:string[];flags:string[];sources:string[];lastChecked:string};
export type Hospital = {slug:string;name:string;type:string;district:string;locations:string[];addresses:string[];phones:string[];doctorIds:string[];specialtySlugs:string[];sources:string[]};
export type Specialty = {slug:string;name:string;doctorIds:string[];locationSlugs:string[];hospitalSlugs:string[];rawCategories:string[]};
export type Location = {slug:string;name:string;kind:string;parent:string|null;doctorIds:string[];hospitalSlugs:string[]};
export type Query = Record<string,string|string[]|undefined>;
export type ListingContext={title:string;description:string;path:string;location?:Location;specialty?:Specialty;hospital?:Hospital;ids?:string[];breadcrumbs?:{label:string;href?:string}[]};
