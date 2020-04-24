import { MongoMemoryServer } from 'mongodb-memory-server';
import { Database as SqLite3Database } from 'sqlite3';

const mongodb = new MongoMemoryServer({ autoStart: true });
const sqlitedb = new SqLite3Database(':memory:');

export {
  mongodb,
  sqlitedb
}
