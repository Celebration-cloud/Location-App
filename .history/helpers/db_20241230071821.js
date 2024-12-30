import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabaseAsync("places.db")

export const createTable = async () => { 
    const dbAsync = await db
    try {
        const result = await dbAsync.execAsync([
            {sql: ``, arg}
        ])
    } catch (error) {
        console.log(error); 
    }
        
         

 };