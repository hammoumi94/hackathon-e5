const db = require('../../config/db');

class Question {
  constructor({
    id, contenu,
  }) {
    this.id = id;
    this.contenu = contenu;
  }

  static async find(query) {
    let questions = await db('question').select().where(query);
    questions = questions.map((question) => new Question(question));
    return questions;
  }

  static async findByIdAndUpdate(id, payload) {
    const update = { ...payload };
    const rows = await db('question').where({ id }).update(update);
    if (!rows) return null;
    const [question] = await Question.find({ id });
    return question;
  }

  static async findByIdAndDelete(id) {
    const rows = await db('question').where({ id }).del();
    if (!rows) return null;
    return new Question({ id });
  }

  async insert() {
    const toInsert = { ...this };
    const [id] = await db('question').insert(toInsert);
    this.id = id;
    return this;
  }
}

module.exports = Question;
