import EssentialPage from '../../../components/EssentialPage';
import {getLocale} from '../../../lib/locale';
import {essentialMetadata} from '../../../lib/essential-pages';
type Props={params:Promise<{lang:string}>};
export async function generateMetadata({params}:Props){return essentialMetadata('privacy-policy',getLocale((await params).lang));}
export default async function Page({params}:Props){return <EssentialPage page="privacy-policy" lang={getLocale((await params).lang)}/>;}
