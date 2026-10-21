import {absolute} from '../lib/seo';import {type Locale,localizedPath} from '../lib/i18n';
// Historical synthetic dates are intentionally not exposed as publication facts.
export default function PageDates({path,lang}:{path:string;lang:Locale}){const url=absolute(localizedPath(lang,path.replace(/^\/(bn|en)(?=\/|$)/,'')||'/'));const data={'@context':'https://schema.org','@type':'WebPage','@id':url+'#webpage',url,inLanguage:lang==='bn'?'bn-BD':'en-BD'};return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data).replace(/</g,'\\u003c')}}/>;}
