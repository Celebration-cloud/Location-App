import * as SQLite from "expo-sqlite";

export const db = SQLite.openDatabaseAsync("places")

export const createTable = () => {  };