import db from "../config/connection.js";
import Question from "../models/Question.js";
//import cleanDB from "./cleanDb.js";

const pythonQuestions = await import('./pythonQuestions.json', {
  assert: { type: 'json' }
}).then(module => module.default);

db.once('open', async () => {
 //await cleanDB('Question', 'questions');

  await Question.insertMany(pythonQuestions);

  console.log('Questions seeded!');
  process.exit(0);
});
