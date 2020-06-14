"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqlitedb = exports.mongodb = void 0;
const mongodb_memory_server_1 = require("mongodb-memory-server");
const sqlite3_1 = require("sqlite3");
const mongodb = new mongodb_memory_server_1.MongoMemoryServer({ autoStart: true });
exports.mongodb = mongodb;
const sqlitedb = new sqlite3_1.Database(':memory:');
exports.sqlitedb = sqlitedb;
//# sourceMappingURL=inmemory-db.js.map