/* eslint-disable prettier/prettier */
import Sequelize, { Model } from 'sequelize';

export default class Ponto extends Model {
  static init(sequelize) {
    super.init(
      {
        x1: Sequelize.INTEGER,
        x2: Sequelize.INTEGER,
        y1: Sequelize.INTEGER,
        y2: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
  }
}
