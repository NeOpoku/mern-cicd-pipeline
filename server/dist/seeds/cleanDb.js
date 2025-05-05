import mongoose from '../config/connection';
// Removed unused import for 'Question'
export default async (_modelName = 'Question', collectionName) => {
    try {
        if (!mongoose.connection.db) {
            throw new Error('Database connection is undefined');
        }
        const collections = await mongoose.connection.db
            .listCollections({ name: collectionName })
            .toArray();
        if (collections.length > 0) {
            await mongoose.connection.db.dropCollection(collectionName);
        }
    }
    catch (err) {
        throw err;
    }
};
