/* eslint-disable prettier/prettier */
import Sequelize, { Model } from 'sequelize';

export default class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        salarioFixo: Sequelize.INTEGER,
        vendaTotal: Sequelize.INTEGER,
        comissao: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
  }
}
