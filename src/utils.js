export function currencyToSymbol(currency) {
  if (currency === 'USD') {
    return '$';
  } else if (currency === 'EUR') {
    return '€';
  } else {
    return '¥';
  }
}
