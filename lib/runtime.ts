import {AsyncLocalStorage} from 'node:async_hooks';
import type {EngagementDb} from './engagement';

export type RuntimeEnv = Record<string, unknown> & {DB?: EngagementDb};
export const runtime = new AsyncLocalStorage<{env: RuntimeEnv}>();
export function getEnv(key: string): string | undefined {
  const value = runtime.getStore()?.env[key] ?? process.env[key];
  return typeof value === 'string' && value.length ? value : undefined;
}
export function database() { return runtime.getStore()?.env.DB; }
