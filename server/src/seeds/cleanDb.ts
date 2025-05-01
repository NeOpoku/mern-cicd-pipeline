import mongoose from '../config/connection';
import { Question } from '../models/Question.js'; // Importing Question model for type safety
// Removed unused import for 'Question'

export default async (_modelName: string = 'Question', collectionName: string) => {
  try {
    if (!mongoose.connect.db) {
      throw new Error('Database connection is undefined');
    }
    
    const collections = await mongoose.connect.db
      .listCollections({ name: collectionName })
      .toArray();
    
  

    if (collections.length > 0) {
      await mongoose.connect.db.dropCollection(collectionName);
    }
  } catch (err) {
    throw err;
  }
};
