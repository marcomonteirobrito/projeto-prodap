/* eslint-disable prettier/prettier */
import Sequelize, { Model } from 'sequelize';

export default class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        fixed_salary: Sequelize.DECIMAL,
        total_sale: Sequelize.DECIMAL,
        commission: Sequelize.DECIMAL,
        total_salary: Sequelize.DECIMAL,
      },
      {
        sequelize,
      }
    );
  }
}
