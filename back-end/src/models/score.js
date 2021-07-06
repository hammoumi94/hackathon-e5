const db = require('../../config/db');

class Score {
  constructor({
    id, idParticipant, valeur, dateParticipation,
  }) {
    this.id = id;
    this.idParticipant = idParticipant;
    this.valeur = valeur;
    this.dateParticipation = dateParticipation;
  }

  static async find(query) {
    let scores = await db('score').select().where(query);
    scores = scores.map((score) => new Score(score));
    return scores;
  }

  static async findByIdAndUpdate(id, payload) {
    const update = { ...payload };
    const rows = await db('score').where({ id }).update(update);
    if (!rows) return null;
    const [score] = await Score.find({ id });
    return score;
  }

  static async findByIdAndDelete(id) {
    const rows = await db('score').where({ id }).del();
    if (!rows) return null;
    return new Score({ id });
  }

  async insert() {
    const toInsert = { ...this };
    const [id] = await db('score').insert(toInsert);
    this.id = id;
    return this;
  }
}

module.exports = Score;
