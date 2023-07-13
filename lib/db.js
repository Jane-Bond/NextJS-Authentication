import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://jbondar1801:xxl2wYbuVSRaT3rz@cluster0.jmvnxit.mongodb.net/auth-demo"
  );

  return client;
}
