import * as SQLite from "expo-sqlite";

export const db = SQLite..openDatabaseAsync("places.db")

export const createTable = () => { 
    db.t
 };