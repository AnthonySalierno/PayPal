import db from './model';

const MAX_PAYMENTS = 50;

export function addPayment(payment) {
  return db.Payments.create(payment);
}

export function getPayments(page) {
  const offset = MAX_PAYMENTS * page;
  return db.Payments.findAll({
    offset: offset,
    limit: MAX_PAYMENTS,
  });
}
