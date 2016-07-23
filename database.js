import Sequelize from 'sequelize';
import path from 'path';

const sequelize = new Sequelize('PayPal', null, null, {
  dialect: 'sqlite',
  storage: path.join(__dirname, 'paypal.sqlite')
});

const Payments = sequelize.define('Payments', {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  // date: Sequelize.DATE,
  amount: Sequelize.INTEGER,
  currency: Sequelize.STRING,
  category: Sequelize.STRING,
});

module.exports = {
  Payments,
  sequelize,
};
