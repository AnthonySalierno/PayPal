import db from './model';

const MAX_PAYMENTS = 50;

export function addPayment(payment) {
  return db.Payments.create(payment);
}

export function getPayments(page) {
  return db.Payments.count()
    .then((count) => {
      let offset = count - MAX_PAYMENTS * (parseInt(page, 10) + 1) + 1;
      let limit = MAX_PAYMENTS
      if (offset < 0) {
        offset = 0;
        limit = count % MAX_PAYMENTS;
      }
      return db.Payments.findAll({
        offset,
        limit,
      });
    });
}
