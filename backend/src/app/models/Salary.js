/* eslint-disable prettier/prettier */
import Sequelize, { Model } from 'sequelize';

export default class Salary extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        fixed_salary: Sequelize.DOUBLE,
        total_sale: Sequelize.DOUBLE,
        total_salary: Sequelize.DOUBLE,
      },
      {
        sequelize,
      }
    );
  }
}
