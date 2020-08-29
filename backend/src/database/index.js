import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import Salary from '../app/models/Salary';
import Distance from '../app/models/Distance';

const models = [Salary, Distance];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
