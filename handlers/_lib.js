// Mongo connection (native driver over Workers TCP, nodejs_compat required).
import { MongoClient } from "mongodb";

const MONGO_OPTS = { maxPoolSize: 3, serverSelectionTimeoutMS: 5000, connectTimeoutMS: 5000, socketTimeoutMS: 10000 };

export async function getDb(env) {
  if (!globalThis._portfolioMongo) {
    // Cold isolates occasionally see Atlas server selection stall; fail fast
    // and retry once with a fresh client instead of hanging until the
    // Workers runtime cancels the request.
    const first = new MongoClient(env.MONGODB_URI, MONGO_OPTS);
    try {
      await first.connect();
      globalThis._portfolioMongo = first;
    } catch (err) {
      try { await first.close(); } catch (_) {}
      const second = new MongoClient(env.MONGODB_URI, MONGO_OPTS);
      await second.connect();
      globalThis._portfolioMongo = second;
    }
  }
  return globalThis._portfolioMongo.db("portfolio");
}

export * from "./_store.js";
