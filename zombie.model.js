const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Zombie = new Schema({
  zombie_description: {
    type: String
  },
  zombie_responsible: {
    type: String
  },
  zombie_building: {
    type: String
  },
  zombie_alive: {
    type: Boolean
  }
});

module.exports = mongoose.model('Zombie', Zombie);
