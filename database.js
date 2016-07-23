var sequelize = require('sequelize');
var path = require('path');

var sequelize = new Sequelize('PayPal', null, null, {
  dialect: 'sqlite',
  storage: path.join(__dirname, 'paypal.sqlite')
});

var Transaction = sequelize.define('Transaction', {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  date: Sequelize.DATE,
  amount: Sequelize.INTEGER,
  currency: Sequelize.STRING,
  category: Sequelize.STRING,
});

module.exports = {
  Transaction: Transaction,
  sequelize: sequelize,
};
