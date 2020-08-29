module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('distances', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      x1: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      x2: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      y1: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      y2: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      distance: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable('distances');
  },
};
