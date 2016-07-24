import { addPayment } from './controller';
import { Promise } from 'sequelize';
import { sequelize as db } from './model';

const getRandomElement = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

const generateFirstName = () => {
  return getRandomElement(FIRST_NAMES);
};

const generateLastName = () => {
  return getRandomElement(LAST_NAMES);
};

const generateHost = () => {
 return getRandomElement(HOSTS);
}

const generateEmail = () => {
  const firstName = generateFirstName();
  const lastName = generateLastName();
  const hostName = generateHost();
  return firstName.concat(lastName, '@', hostName).toLowerCase();
}

const generatePaymentAmount = (min, max) => {
  return (Math.random() * (max - min) + min).toFixed(2);
};

const generateCurrencyType = (currencyTypes) => {
  return currencyTypes[Math.floor(Math.random() * currencyTypes.length)];
};

const generateCategoryType = (categoryTypes) => {
  return categoryTypes[Math.floor(Math.random() * categoryTypes.length)];
};

const MIN_PAYMENT = 1;
const MAX_PAYMENT = 5000;
const CURRENCY_TYPES = ['USD', 'EUR', 'JPY'];
const CATEGORY_TYPES = ['Personal', 'Business'];

const FIRST_NAMES = [
  "Roth", "McKenzie", "Sophia", "Conan", "Sylvester", "Paki", "Kennan", "Autumn", "Deirdre",
  "Stephanie", "Susan", "Brenna", "Castor", "Sybil", "Dieter", "Sybill", "Penelope", "Brent",
  "Jenette", "Violet", "Eagan", "Noble", "Athena", "Candace", "Claudia", "Malcolm", "Kiayada",
  "Cooper", "Rahim", "Merritt", "Herrod", "Jessica", "Cameron", "Tamekah", "Naida", "Michelle",
  "Garrett", "Jonas", "Hedwig", "Keaton", "Kareem", "Raymond", "Ulric", "Carlos", "May", "Audra",
];

const LAST_NAMES = [
  "Barr", "Kaufman", "Branch", "Davidson", "Howell", "Gallagher", "Hartman", "Schroeder", "Deleon",
  "Avery", "Hudson", "Ryan", "Clements", "Weeks", "Weeks", "Wiley", "Velasquez", "Bradshaw",
  "Herrera", "Black", "Wooten", "Levine", "Riddle", "Avery", "Stein", "Mack", "Barron", "Mcdonald",
  "Clayton", "Levy", "Leblanc", "Pruitt", "Trevino", "Jacobs", "Golden", "Walker", "French",
  "Jackson", "Finch", "Washington", "Bryant", "Zimmerman", "Elliott", "Garrett"
];

const HOSTS = [
  "gmail.com", "hotmail.com", "comcast.net", "outlook.com", "yahoo.com", "aol.com", "icloud.com"
];

const generatePayment = () => {
  const email = generateEmail();
  const amount = generatePaymentAmount(MIN_PAYMENT, MAX_PAYMENT);
  const currency = generateCurrencyType(CURRENCY_TYPES);
  const category = generateCategoryType(CATEGORY_TYPES);
  return {
    email,
    amount,
    currency,
    category,
  };
};

const NUMBER_OF_PAYMENTS = 250;

function initializeDatabase() {
  const payments = [];
  for (let i = 0; i < NUMBER_OF_PAYMENTS; i++) {
    const payment = generatePayment();
    payments.push(payment);
  }
  return db.sync({ force: true })
    .then(() => Promise.each(payments, addPayment));
}

export default initializeDatabase;
