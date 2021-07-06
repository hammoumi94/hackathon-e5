const db = require('../../config/db');

class Reponse {
  constructor({
    id, idQuestion, contenu, correcte,
  }) {
    this.id = id;
    this.idQuestion = idQuestion;
    this.contenu = contenu;
    this.correcte = correcte;
  }

  static async find(query) {
    let reponses = await db('reponse').select().where(query);
    reponses = reponses.map((reponse) => new Reponse(reponse));
    return reponses;
  }

  static async findByIdAndUpdate(id, payload) {
    const update = { ...payload };
    const rows = await db('reponse').where({ id }).update(update);
    if (!rows) return null;
    const [reponse] = await Reponse.find({ id });
    return reponse;
  }

  static async findByIdAndDelete(id) {
    const rows = await db('reponse').where({ id }).del();
    if (!rows) return null;
    return new Reponse({ id });
  }

  async insert() {
    const toInsert = { ...this };
    const [id] = await db('reponse').insert(toInsert);
    this.id = id;
    return this;
  }
}

module.exports = Reponse;
