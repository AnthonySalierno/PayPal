import Sequelize from 'sequelize';
import path from 'path';

export const sequelize = new Sequelize('PayPal', null, null, {
  dialect: 'sqlite',
  storage: path.join(__dirname, 'paypal.sqlite')
});

export const Payments = sequelize.define('Payments', {
  email: Sequelize.STRING,
  amount: Sequelize.INTEGER,
  currency: Sequelize.STRING,
  category: Sequelize.STRING,
});
