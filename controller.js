import db from './database';

export function addPayment(payment) {
  console.log(db);
  return db.Payments.create(payment);
}

export function getPayments() {

}
