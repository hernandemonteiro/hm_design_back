import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
class Database {
  createConnection() {
    mongoose.connect(process.env.MONGO_DB_URL);
  }
}

export default Database;
