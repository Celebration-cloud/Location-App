import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabaseAsync("places.db")

export const createTable = async () => { 
    c
    db.then((db) => db.execAsync(`CREATE TABLE ` + table + ` (` + column + ` INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, ` + column + ` TEXT NOT NULL, ` + column + ` TEXT NOT NULL COM BEGIN, ` ))
 };