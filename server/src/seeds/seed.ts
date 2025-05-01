import mongoose from '../config/connection';
import Question from '../models/Question';
import pythonQuestions from './pythonQuestions.json' assert { type: 'json' };

(async () => {
  try {
    await mongoose.connection.once('open', async () => {
      console.log('Database connected!');

      // Optional: Clean existing data (optional, based on need)
      await Question.deleteMany({});
      console.log('Old questions removed.');

      // Seed new data
      await Question.insertMany(pythonQuestions);
      console.log('New questions seeded.');

      process.exit(0);
    });
  } catch (err) {
    console.error('Seeding error:', err);
    process.exit(1);
  }
})();
