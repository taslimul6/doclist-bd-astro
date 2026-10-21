import {NextRequest,NextResponse} from 'next/server';
import {isPublished,normalizePublicationPath,releaseAt} from './lib/publication';
import doctors from './data/doctors.json';
const doctorPaths=new Map(doctors.map(d=>[d.id,'/doctor/'+d.slug]));
export function proxy(request:NextRequest){
 let path=normalizePublicationPath(request.nextUrl.pathname);
 const match=path.match(/^\/api\/doctors\/([^/]+)\/engagement$/);if(match)path=doctorPaths.get(match[1])||path;
 if(!isPublished(path))return new NextResponse('Not found',{status:404,headers:{'X-Robots-Tag':'noindex, nofollow','Cache-Control':'private, no-store','Retry-After':new Date(releaseAt(path)!).toUTCString()}});
 return NextResponse.next();
}
export const config={matcher:['/((?!_next/|assets/|favicon\\.svg|robots\\.txt).*)']};
