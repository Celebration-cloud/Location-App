import * as SQLite from "expo-sqlite";

export const db = SQLite.op.openDatabaseAsync("places.db")

export const createTable = () => { 
    db.t
 };