export function currencyToSymbol(currency) {
  if (currency === 'USD') {
    return '$';
  } else if (currency === 'EUR') {
    return '€';
  } else {
    return '¥';
  }
}

export function debounce(func, wait) {
  let timeout;
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      return func.apply(this, arguments);
    }, wait);
  };
}
