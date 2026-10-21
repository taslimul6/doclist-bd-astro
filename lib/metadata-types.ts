// Framework-independent shape for the original metadata generators.
export type Metadata = {
  title?: string | {absolute?: string; default?: string; template?: string};
  description?: string;
  applicationName?: string;
  alternates?: {canonical?: string; languages?: Record<string,string>};
  openGraph?: {title?: string; description?: string; url?: string; siteName?: string; type?: string; locale?: string; alternateLocale?: string[]};
  twitter?: {card?: string; title?: string; description?: string};
  robots?: {index?: boolean; follow?: boolean; googleBot?: Record<string,string|number|boolean>};
};
