import EssentialPage from '../../../components/EssentialPage';
import {getLocale} from '../../../lib/locale';
import {essentialMetadata} from '../../../lib/essential-pages';
type Props={params:Promise<{lang:string}>};
export async function generateMetadata({params}:Props){return essentialMetadata('terms-of-use',getLocale((await params).lang));}
export default async function Page({params}:Props){return <EssentialPage page="terms-of-use" lang={getLocale((await params).lang)}/>;}
