const path = require('path');

module.exports = {
  username: 'root',
  password: 'root',
  storage: path.join(__dirname, '..', '..', 'database.sqlite'),
  database: 'gostack-desafio-01',
  host: 'localhost',
  dialect: 'sqlite',
  define:{
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  }
}
