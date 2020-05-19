import Sequelize from 'sequelize';

import Projects from '../app/models/Projects';
import Tasks from '../app/models/Tasks';

import databaseConfig from '../config/database';

const models = [Tasks, Projects];

class Database{
  constructor(){
    this.init();
  }

  init(){
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate(this.connection.models));
  }
}

export default new Database();
