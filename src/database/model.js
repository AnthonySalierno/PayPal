import Sequelize from 'sequelize';
import path from 'path';

const sequelize = new Sequelize('PayPal', null, null, {
  dialect: 'sqlite',
  storage: path.join(__dirname, 'paypal.sqlite')
});

const Payments = sequelize.define('Payments', {
  email: Sequelize.STRING,
  amount: Sequelize.INTEGER,
  currency: Sequelize.STRING,
  category: Sequelize.STRING,
});

module.exports = {
  sequelize,
  Payments,
}
