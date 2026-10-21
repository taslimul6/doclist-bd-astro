export const dynamic='force-dynamic';
import ReleaseLink from '../../components/ReleaseLink';
import GoogleAnalytics from '../../components/GoogleAnalytics';
import type {Metadata} from 'next';import '../../styles/header.css';import '../../styles/footer.css';import '../../styles/directory.css';import '../../styles/profile.css';import '../../styles/responsive.css';import '../globals.css';import Header from '../../components/Header';import Footer from '../../components/Footer';import {siteUrl} from '../../lib/seo';import {getLocale} from '../../lib/locale';import {t} from '../../lib/i18n';
export const metadata:Metadata={metadataBase:new URL(siteUrl),title:{default:'Doclist Bd',template:'%s | Doclist Bd'},icons:{icon:'/favicon.svg'}};
export function generateStaticParams(){return [{lang:'bn'},{lang:'en'}];}
const themeInit="try{var s=localStorage.getItem('doclist-theme');var d=s==='dark'||(s!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.dataset.theme=d?'dark':'light'}catch(e){document.documentElement.dataset.theme='light'}";
export default async function RootLayout({children,params}:{children:React.ReactNode;params:Promise<{lang:string}>}){const lang=getLocale((await params).lang);return <html lang={lang} suppressHydrationWarning><head><script dangerouslySetInnerHTML={{__html:themeInit}}/></head><body><GoogleAnalytics/><ReleaseLink href="#main-content" className="skip-link">{t(lang,'Skip to content')}</ReleaseLink><Header lang={lang}/><main id="main-content">{children}</main><Footer lang={lang}/></body></html>;}
