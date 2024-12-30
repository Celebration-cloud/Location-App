import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabaseA("places.db")

export const createTable = async () => {
  try {
    db.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS places ( id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, description TEXT NOT NULL, imageUri TEXT NOT NULL, lat REAL NOT NULL, lng REAL NOT NULL );`,
        [],
        (_, result) => {
          console.log("Table created successfully:", result);
        },
        (_, error) => {
          console.log("Error creating table:", error);
        }
      );
    });
  } catch (error) {
    console.log("Transaction Error:", error);
  }
};