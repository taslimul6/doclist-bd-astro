import {database} from './runtime';
import type {EngagementDb} from './engagement';

export async function getEngagementDb(): Promise<EngagementDb> {
  const db = database();
  if (!db) throw new Error('ENGAGEMENT_STORE_NOT_CONFIGURED');
  return db;
}
