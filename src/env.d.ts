/// <reference types="astro/client" />
/// <reference types="@astrojs/cloudflare/types.d.ts" />

declare namespace App {
  interface Locals {
    /** Path the visitor requested, before the Bengali-default rewrite to /bn/... */
    originalPath: string;
  }
}

declare module 'cloudflare:workers' {
  export const env: {DB?: unknown};
}
