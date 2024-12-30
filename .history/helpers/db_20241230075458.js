import * as SQLite from "expo-sqlite";

const db = SQLite.SQLiteDatabase("places.db")

export const createTable = async () => {
db.transaction((tx) => {
  tx.executeSql(
    `CREATE TABLE IF NOT EXISTS places ( id INTEGER PRIMARY KEY NOT NULL, title VARCHAR NOT NULL, description VARCHAR NOT NULL, imageUri TEXT NOT NULL, lat REAL NOT NULL, lng REAL NOT NULL );`,
    [],
    () => {
      console.log("Table created successfully");
    },
    (tx, error) => {
      console.log("Error creating table:", error);
    }
  );
});
};