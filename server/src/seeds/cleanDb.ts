import mongoose from '../config/connection';
// Removed unused import for 'Question'

export default async (_modelName: string = 'Question', collectionName: string) => {
  try {
    const collections = await mongoose.connection.db
      .listCollections({ name: collectionName })
      .toArray();

    if (collections.length > 0) {
      await mongoose.connection.db.dropCollection(collectionName);
    }
  } catch (err) {
    throw err;
  }
};
