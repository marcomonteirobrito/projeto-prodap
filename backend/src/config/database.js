/* eslint-disable prettier/prettier */
const { resolve } = require('path');

module.exports = {
  dialect: 'sqlite',
  storage: resolve(__dirname, '..', 'database', 'database.sqlite'),
  dialectOptions: {
    useNullAsDefault: true,
  },
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
