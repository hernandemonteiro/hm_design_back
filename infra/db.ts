import mongoose from "mongoose";
require('dotenv').config();
class Database {
    
    private DB_URL = process.env.MONGO_DB_URL;

    createConnection() {

        mongoose.connect(this.DB_URL);
        
    }
}

export default Database;