import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabaseAsync("places.db")

export const createTable = async () => { 
    const dbAsync = await db
    const result = await dbAsync.executeSql(
        `CREATE TABLE IF NOT EXISTS places ( id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR NOT NULL, age INTEGER
    db.then((db) => db.execAsync(`CREATE TABLE ` + table + ` (` + column + ` INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, ` + column + ` TEXT NOT NULL, ` + column + ` TEXT NOT NULL COM BEGIN, ` ))
 };