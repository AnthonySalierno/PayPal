import db from './model';

export function addPayment(payment) {
  return db.Payments.create(payment);
}

export function getPayments() {
  return db.Payments.findAll();
}
