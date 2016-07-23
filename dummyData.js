import { addPayment } from './controller';
import { Promise } from 'sequelize';

// const generateRandomDate = (start, end) => {
//   const startDate = new Date(2012, 0, 1).getTime();
//   const endDate =  new Date(2015, 0, 1).getTime();
//   const spaces = (endDate - startDate);
//   let timestamp = Math.round(Math.random() * spaces);
//   timestamp += startDate;
//   return new Date(timestamp);
// };
//
// const formatDate = (date) => {
//   let month = randomDate().getMonth();
//   let day = randomDate().getDate();
//   let hours = randomDate().getHours();
//   let minutes = randomDate().getMinutes();
//   let seconds = randomDate().getSeconds();
//
//   month = month < 10 ? '0' + month : month;
//   day = day < 10 ? '0' + day : day;
//   hours = hours < 10 ? '0' + hours : hours;
//   minutes = minutes < 10 ? '0' + minutes : minutes;
//   seconds = seconds < 10 ? '0' + seconds : seconds;
//
//   return String(date.getFullYear()) + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
// };
//
// const generateDates = function(numberOfDates, start, end) {
//   // format dates as: '2007-01-01 10:00:00'
// };

const generateFirstName = () => {
  const randomIndex = Math.floor(Math.random() * firstNames.length)
  return firstNames[randomIndex];
};

const generateLastName = () => {
  const randomIndex = Math.floor(Math.random() * lastNames.length)
  return lastNames[randomIndex];
};

const generatePaymentAmount = (min, max) => {
  return (Math.random() * (max - min) + min).toFixed(2);
};

const generateCurrencyType = (currencyTypes) => {
  return currencyTypes[Math.floor(Math.random() * currencyTypes.length)];
};

const generateCategoryTypes = (categoryTypes) => {
  return categoryTypes[Math.floor(Math.random() * categoryTypes.length)];
};

const MIN_YEAR = 2000;
const MAX_YEAR = 2016;
const CURRENCY_TYPES = ['USD', 'EUR', 'JPY'];
const CATEGORY_TYPES = ['Personal', 'Business'];

const firstNames = [
  "Roth", "McKenzie", "Sophia", "Conan", "Sylvester", "Paki", "Kennan", "Autumn", "Deirdre",
  "Stephanie", "Susan", "Brenna", "Castor", "Sybil", "Dieter", "Sybill", "Penelope", "Brent",
  "Jenette", "Violet", "Eagan", "Noble", "Athena", "Candace", "Claudia", "Malcolm", "Kiayada",
  "Cooper", "Rahim", "Merritt", "Herrod", "Jessica", "Cameron", "Tamekah", "Naida", "Michelle",
  "Garrett", "Jonas", "Hedwig", "Keaton", "Kareem", "Raymond", "Ulric", "Carlos", "May", "Audra",
  "Nerea", "Griffith", "Irma", "Gavin", "Arthur", "Zoe", "Sandra", "Dacey", "Price", "Peter",
  "Maryam", "Evan", "Elton", "Elaine", "Brock", "Nell", "Ulla", "Jennifer", "Hall", "Anthony",
  "Rhoda", "Xanthus", "Gretchen", "Inez", "Nasim", "Olivia", "Tobias", "Lamar", "Jael", "Benjamin",
  "Minerva", "Zeph", "Amela", "Richard", "Ivory", "Kiayada", "Savannah", "Armand", "Lilah",
  "Brody", "Kibo", "Xyla", "Sade", "Byron", "Avye", "Ivor", "Ahmed", "Tate", "Anastasia", "Miriam",
  "Harlan", "Yvette", "Blaze", "Elton", "Leandra", "Brianna", "Geoffrey", "Cailin", "Thane",
  "Jerome", "Zephania", "Shelley", "Rinah", "Eve", "Naomi", "Asher", "Charles", "Linus", "Maggie",
  "Deirdre", "Eagan", "Lucy", "Basil", "Azalia", "Karina", "Lillian", "Caryn", "Kibo", "Amery",
  "Lillian", "Brendan", "Octavius", "Ocean", "Macaulay", "Nelle", "Reuben", "Kai", "Charlotte",
  "Colleen", "Aladdin", "Abraham", "Sarah", "Erasmus", "Judith", "Courtney", "Len", "Quyn",
  "Angelica", "Velma", "Lareina", "Medge", "Ahmed", "Branden", "Ciara", "Robin", "Maryam",
  "Summer", "Yoko", "Cailin", "Cain", "Ocean", "Mohammad", "Ann", "Shannon", "Stone", "Xena",
  "Hilary", "Aubrey", "Colby", "Minerva", "Rhoda", "Marshall", "Lila", "Galena", "Austin",
  "Ignacia", "Roth", "Zenaida", "Guy", "Isabelle", "Byron", "Paki", "Casey", "Owen", "Tucker",
  "Libby", "Amaya", "Jordan", "Walter", "Kalia", "Hollee", "Ivor", "Bevis", "George", "Sydnee",
  "Caesar", "Galvin", "Colette", "Hasad", "Kaitlin", "Leigh", "Karleigh", "Ivan", "Warren",
  "Quincy", "Marah", "Brian", "Bree", "Paki", "Darryl", "Basia", "Cameron", "Roth", "Chadwick",
  "Celeste", "Kylee", "Adena", "Carter", "Cally", "Jordan", "Brent", "Rashad", "Uriah", "Zorita",
  "Hayley", "Timon", "Kim", "Imogene", "Omar", "Ryder", "Yvonne", "Carly", "Mari", "Margaret",
  "Robert", "Hilda", "Nasim", "Ulla", "Quinn", "Yetta", "Barry", "Suki", "Xantha", "Blaine",
  "Sydney", "Jennifer", "Violet", "Maggy", "Adrienne", "Kirsten", "Maxwell", "Indira", "Valentine",
  "Aubrey", "Iliana", "Beverly", "Gage", "Keith", "Wing", "William", "Randall", "Honorato",
  "Penelope", "Pandora", "Emily", "Ebony", "Pamela", "Nigel", "Chiquita", "Aline", "Kitra",
  "Baxter", "Mark", "Kendall", "Fay", "Wilma", "Kibo", "Xena", "Breanna", "Jessamine", "Dylan",
  "Raphael", "Ivana", "George", "Eagan", "Cecilia", "Rosalyn", "Marsden", "Jacob", "Lunea",
  "Fay", "Brody", "Byron", "Bree", "Dean", "Kenneth", "Madaline", "Amity", "Jerry", "India",
  "Moses", "Hashim", "Illana", "Dexter"
];
const lastNames = [
  "Barr", "Kaufman", "Branch", "Davidson", "Howell", "Gallagher", "Hartman", "Schroeder", "Deleon",
  "Avery", "Hudson", "Ryan", "Clements", "Weeks", "Weeks", "Wiley", "Velasquez", "Bradshaw",
  "Herrera", "Black", "Wooten", "Levine", "Riddle", "Avery", "Stein", "Mack", "Barron", "Mcdonald",
  "Clayton", "Levy", "Leblanc", "Pruitt", "Trevino", "Jacobs", "Golden", "Walker", "French",
  "Jacobson", "Vargas", "Fitzgerald", "Sykes", "Leach", "Ochoa", "Porter", "Hopkins", "Cortez",
  "Hopkins", "Caldwell", "Frederick", "Chapman", "Cox", "Griffith", "Potter", "Riddle", "Vance",
  "Carver", "Brady", "Madden", "Mcdowell", "Orr", "Weaver", "Buckley", "Sharpe", "Bernard", "Neal",
  "Solis", "Hester", "Davis", "Lambert", "Brennan", "Cash", "Montgomery", "Joyce", "Stark",
  "Slater", "Merrill", "Mathews", "Dickerson", "Winters", "Dillon", "Rocha", "Mcmahon", "Norton",
  "Christensen", "Clements", "Warner", "Clemons", "Swanson", "Knapp", "Landry", "Barlow",
  "Mcmahon", "Robbins", "Salinas", "Callahan", "Gould", "Todd", "Newman", "Murphy", "Jacobson",
  "Bender", "Sharp", "Cruz", "Mcintyre", "Johns", "Rich", "Gates", "Hartman", "Mcbride", "Dixon",
  "Huffman", "Snyder", "Hernandez", "Turner", "Tucker", "Huber", "Salazar", "Dalton", "Hardy",
  "Austin", "Dalton", "Mcfadden", "Peterson", "Booth", "Allen", "Holman", "Cochran", "Finch",
  "Phillips", "Valenzuela", "Adams", "Mcleod", "Clayton", "Mccall", "Golden", "Carney", "Pierce",
  "Kinney", "Vincent", "Guerra", "Cherry", "Glover", "Booth", "Greene", "Vega", "Stokes",
  "Mcdonald", "Dunlap", "Ward", "Patton", "Puckett", "Singleton", "Buck", "Monroe", "Owen", "Pope",
  "Gutierrez", "Fischer", "Michael", "Robbins", "Morales", "Oneill", "Doyle", "Oneal", "Perkins",
  "Wall", "George", "Thompson", "Jarvis", "Roy", "Harrison", "Barrera", "Goff", "Willis",
  "Rowland", "Daniel", "Rowland", "Woodward", "Beck", "Hess", "Navarro", "Roberson", "Compton",
  "Mclaughlin", "Flores", "Sexton", "Kirk", "Harris", "Huff", "Donaldson", "Mayo", "Hayden",
  "Booth", "Salas", "Schmidt", "Hunter", "Fowler", "Valentine", "Cabrera", "Pacheco", "Ratliff",
  "Vasquez", "Hodges", "Mccarty", "Guerra", "Drake", "Lowery", "Kane", "Buck", "Berry", "Huff",
  "Molina", "Sharpe", "Marks", "Stuart", "Glass", "Kent", "Jennings", "Mckee", "Hancock", "Molina",
  "Lang", "Wise", "Glenn", "Slater", "Hicks", "Miranda", "Mcgowan", "Mcintyre", "Estrada", "Ford",
  "Mckenzie", "Spence", "Stuart", "Jordan", "Sweeney", "Sandoval", "Gross", "Snyder", "Buckley",
  "Norris", "Cote", "Gibson", "Pace", "Hawkins", "Frank", "Ballard", "Slater", "Franco",
  "Nicholson", "Owen", "Richmond", "Gillespie", "Tyler", "England", "Whitfield", "Holt", "Simon",
  "Kirby", "Ramos", "Rosales", "Aguilar", "Mccarty", "Knowles", "Sargent", "Perry", "Morris",
  "Patton", "Reilly", "Avila", "Morris", "Vinson", "Harvey", "Ellis", "Bray", "Gibson",
  "Fitzgerald", "Medina", "Williamson", "Flowers", "Guerrero", "Lyons", "Macdonald", "Patton",
  "Winters", "Hayes", "Kane", "Mays", "Joseph", "Frazier", "Walters", "Sears", "Howard",
  "Jackson", "Finch", "Washington", "Bryant", "Zimmerman", "Elliott", "Garrett"
];

const generatePayment = () => {
  const firstName = generateFirstName();
  const lastName = generateLastName();
  const amount = generatePaymentAmount(MIN_YEAR, MAX_YEAR);
  const currency = generateCurrencyType(CURRENCY_TYPES);
  const category = generateCategoryType(CATEGORY_TYPES);
  return {
    firstName,
    lastName,
    amount,
    currency,
    category,
  };
};

const NUMBER_OF_PAYMENTS = 250;

function initializeData() {
  const payments = [];
  for (let i = 0; i < NUMBER_OF_PAYMENTS; i++) {
    const payment = generatePayment();
    payments.push(payment);
  }
  return Promise.each(payments, addPayment);
}
