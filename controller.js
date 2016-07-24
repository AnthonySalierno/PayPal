import db from './database';

export function addPayment(payment) {
  return db.Payments.create(payment);
}

export function getPayments() {
  return db.Payments.findAll();
}
