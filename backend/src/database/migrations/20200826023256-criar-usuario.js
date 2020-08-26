module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      salarioFixo: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      vendaTotal: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      comissao: {
        type: Sequelize.INTEGER,
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
    return queryInterface.dropTable('users');
  },
};
