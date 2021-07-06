const db = require('../../config/db');

class Participant {
  constructor({
    id, nom, prenom,
  }) {
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
  }

  static async find(query) {
    let participants = await db('participant').select().where(query);
    participants = participants.map((participant) => new Participant(participant));
    return participants;
  }

  static async findByIdAndUpdate(id, payload) {
    const update = { ...payload };
    const rows = await db('participant').where({ id }).update(update);
    if (!rows) return null;
    const [participant] = await Participant.find({ id });
    return participant;
  }

  static async findByIdAndDelete(id) {
    const rows = await db('participant').where({ id }).del();
    if (!rows) return null;
    return new Participant({ id });
  }

  async insert() {
    const toInsert = { ...this };
    const [id] = await db('participant').insert(toInsert);
    this.id = id;
    return this;
  }
}

module.exports = Participant;
