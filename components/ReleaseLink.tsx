import type {AnchorHTMLAttributes} from 'react';
import {isPublishedHref} from '../lib/publication';
export default function ReleaseLink({href,children,...props}:AnchorHTMLAttributes<HTMLAnchorElement>){
 if(href&&!isPublishedHref(href))return <span className={props.className} lang={props.lang}>{children}</span>;
 return <a {...props} href={href}>{children}</a>;
}
