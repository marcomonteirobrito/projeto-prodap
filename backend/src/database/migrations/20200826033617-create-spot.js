module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('spot', {
      x1: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      x2: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      y1: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      y2: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable('spot');
  },
};
