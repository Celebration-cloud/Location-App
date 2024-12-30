import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabaseAsync("places.db")

export const createTable = async () => {
  const db = await dbAsync;
  try {
    await db.execAsync([
      {
        sql: `CREATE TABLE IF NOT EXISTS places ( id INTEGER PRIMARY KEY NOT NULL, title VARCHAR NOT NULL, description VARCHAR NOT NULL, imageUri TEXT NOT NULL, lat REAL NOT NULL, lng REAL NOT NULL );`,
        args: [],
      },
    ]);
    console.log("Table created successfully");
  } catch (error) {
    console.log("Error creating table:", error);
  }
};