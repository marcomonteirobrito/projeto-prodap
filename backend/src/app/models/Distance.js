/* eslint-disable prettier/prettier */
import Sequelize, { Model } from 'sequelize';

export default class Distance extends Model {
  static init(sequelize) {
    super.init(
      {
        x1: Sequelize.DECIMAL,
        x2: Sequelize.DECIMAL,
        y1: Sequelize.DECIMAL,
        y2: Sequelize.DECIMAL,
        distance: Sequelize.DECIMAL,
      },
      {
        sequelize,
      }
    );
  }
}
