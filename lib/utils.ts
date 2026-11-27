export type ClassValue =
  | string
  | number
  | false
  | null
  | undefined
  | ClassValue[]
  | Record<string, boolean | null | undefined>;

function flattenClassValue(value: ClassValue): string[] {
  if (!value) return [];
  if (typeof value === 'string' || typeof value === 'number') return [String(value)];
  if (Array.isArray(value)) return value.flatMap(flattenClassValue);

  return Object.entries(value)
    .filter(([, enabled]) => Boolean(enabled))
    .map(([className]) => className);
}

export function cn(...inputs: ClassValue[]): string {
  return inputs.flatMap(flattenClassValue).join(' ');
}

export const phoneHref=(phone:string)=>'tel:'+phone.split(/[,/;|]/)[0].replace(/[^+\d]/g,'');

/** URLSearchParams -> the `Query` shape the directory helpers expect (repeated keys become arrays). */
export function queryFrom(params:URLSearchParams):Record<string,string|string[]|undefined>{
  const q:Record<string,string|string[]|undefined>={};
  for(const key of new Set(params.keys())){const all=params.getAll(key);q[key]=all.length>1?all:all[0];}
  return q;
}
