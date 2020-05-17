import Sequelize from 'sequelize';

import Projects from '../app/models/Projects';

import databaseConfig from '../config/database';

const models = [Projects];

class Database{
  constructor(){
    this.init();
  }

  init(){
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
