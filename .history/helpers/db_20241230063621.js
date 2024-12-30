import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabaseAsync("places.db")

export const createTable = async () => { 
    const dbAsync = await db
    const result = await dbAsync.e(
        `CREATE TABLE IF NOT EXISTS places ( id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR NOT NULL, age INTEGER NOT NULL, email INTEGER NOT NULL` ); 
    db.then((db) => db.execAsync(`CREATE TABLE ` + table + ` (` + column + ` INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, ` + column + ` TEXT NOT NULL, ` + column + ` TEXT NOT NULL COM BEGIN, ` ))
 };