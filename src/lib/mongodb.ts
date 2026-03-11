import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable in .env.local");
}

/* 
  1. Define the shape of our cached connection 
*/
interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

/* 
  2. Tell TypeScript that the "global" object has a property called "mongoose" 
  This avoids the "any" keyword entirely.
*/
declare global {
  // eslint-disable-next-line no-var
  var mongoose: MongooseCache;
}

/* 
  3. Initialize the cache 
*/
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    // We use MONGODB_URI! (the bang) to tell TS we know it's not undefined
    cached.promise = mongoose.connect(MONGODB_URI!, opts).then((m) => {
      console.log("🚀 Connected to MongoDB Atlas");
      return m;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}