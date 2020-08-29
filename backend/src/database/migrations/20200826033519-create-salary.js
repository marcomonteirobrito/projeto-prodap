module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('salaries', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      fixed_salary: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      total_sale: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      total_salary: {
        type: Sequelize.DOUBLE,
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
    return queryInterface.dropTable('salaries');
  },
};
