import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabaseAsync("places.db")

export const createTable = async () => { 
    const dbAsync = await db
    const result = await dbAsync.execAsync(
        `CREATE TABLE IF NOT EXISTS places ( id INTEGER PRIMARY KEY NOT NULL, title VARCHAR NOT NULL, s INTEGER NOT NULL, email INTEGER NOT NULL` ); 
 };