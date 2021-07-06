const db = require('../../config/db');

class Feedback {
  constructor({
    id, contenu, idParticipant,
  }) {
    this.id = id;
    this.contenu = contenu;
    this.idParticipant = idParticipant;
  }

  static async find(query) {
    let feedbacks = await db('feedback').select().where(query);
    feedbacks = feedbacks.map((feedback) => new Feedback(feedback));
    return feedbacks;
  }

  static async findByIdAndUpdate(id, payload) {
    const update = { ...payload };
    const rows = await db('feedback').where({ id }).update(update);
    if (!rows) return null;
    const [feedback] = await Feedback.find({ id });
    return feedback;
  }

  static async findByIdAndDelete(id) {
    const rows = await db('feedback').where({ id }).del();
    if (!rows) return null;
    return new Feedback({ id });
  }

  async insert() {
    const toInsert = { ...this };
    const [id] = await db('feedback').insert(toInsert);
    this.id = id;
    return this;
  }
}

module.exports = Feedback;
