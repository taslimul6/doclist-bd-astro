import {DatabaseSync} from 'node:sqlite';
import {mkdirSync,readFileSync} from 'node:fs';import path from 'node:path';
const file=path.resolve(process.env.DOCLIST_DB_PATH||'data/runtime/engagement.sqlite');mkdirSync(path.dirname(file),{recursive:true});
const db=new DatabaseSync(file);db.exec(readFileSync(new URL('../db/engagement.sql',import.meta.url),'utf8'));db.close();console.log('Engagement database initialized.');
