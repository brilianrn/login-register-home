'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.addColumn("Users", "approval", Sequelize.BOOLEAN);
  },

  down(queryInterface, Sequelize) {
    return queryInterface.removeColumn("Users", "approval");
  }
};
