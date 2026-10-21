globalThis.process ??= {}; globalThis.process.env ??= {};
import { AsyncLocalStorage } from 'node:async_hooks';

const runtime = new AsyncLocalStorage();
function getEnv(key) {
  const value = runtime.getStore()?.env[key] ?? process.env[key];
  return typeof value === "string" && value.length ? value : void 0;
}
function database() {
  return runtime.getStore()?.env.DB;
}

export { database as d, getEnv as g, runtime as r };
