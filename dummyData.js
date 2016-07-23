/*
generate data set to match model
sucessfully post data to sqlite database via SendMoneyView
successfully get render data from sqlite in TransactionHistoryView
*/

const db = require('./database.js');
const Sequelize = require('sequelize');

const firstNames = ["Roth", "McKenzie", "Sophia", "Conan", "Sylvester", "Paki", "Kennan", "Autumn", "Deirdre", "India", "Stephanie", "Susan", "Brenna", "Castor", "Sybil", "Dieter", "Sybill", "Penelope", "Brent", "Fay", "Brody", "Byron", "Bree", "Dean", "Kenneth", "Madaline", "Amity", "Jenette", "Violet", "Eagan", "Noble", "Athena", "Candace", "Claudia", "Malcolm", "Kiayada", "Cooper", "Rahim", "Merritt", "Herrod", "Jessica", "Cameron", "Tamekah", "Naida", "Michelle", "Garrett", "Jonas", "Hedwig", "Keaton", "Kareem", "Raymond", "Ulric", "Carlos", "May", "Audra", "Nerea", "Griffith", "Irma", "Gavin", "Arthur", "Zoe", "Sandra", "Dacey", "Price", "Peter", "Maryam", "Evan", "Elton", "Elaine", "Brock", "Nell", "Ulla", "Jennifer", "Hall", "Anthony", "Rhoda", "Xanthus", "Gretchen", "Inez", "Nasim", "Olivia", "Tobias", "Lamar", "Jael", "Benjamin", "Minerva", "Zeph", "Amela", "Richard", "Ivory", "Kiayada", "Savannah", "Armand", "Lilah", "Jerry", "Brody", "Kibo", "Xyla", "Sade", "Byron", "Avye", "Ivor", "Ahmed", "Tate", "Anastasia", "Miriam", "Harlan", "Yvette", "Blaze", "Elton", "Leandra", "Brianna", "Geoffrey", "Cailin", "Thane", "Hashim", "Jerome", "Zephania", "Shelley", "Rinah", "Eve", "Naomi", "Asher", "Charles", "Linus", "Maggie", "Deirdre", "Eagan", "Lucy", "Basil", "Azalia", "Karina", "Lillian", "Caryn", "Kibo", "Amery", "Lillian", "Brendan", "Octavius", "Ocean", "Macaulay", "Nelle", "Reuben", "Kai", "Charlotte", "Colleen", "Aladdin", "Abraham", "Sarah", "Erasmus", "Judith", "Courtney", "Len", "Quyn", "Illana", "Angelica", "Velma", "Lareina", "Medge", "Ahmed", "Branden", "Ciara", "Robin", "Maryam", "Dexter", "Summer", "Yoko", "Cailin", "Cain", "Ocean", "Mohammad", "Ann", "Shannon", "Stone", "Xena", "Hilary", "Aubrey", "Colby", "Minerva", "Rhoda", "Marshall", "Lila", "Galena", "Austin", "Ignacia", "Roth", "Zenaida", "Guy", "Isabelle", "Byron", "Paki", "Casey", "Owen", "Tucker", "Libby", "Amaya", "Jordan", "Walter", "Kalia", "Hollee", "Ivor", "Bevis", "George", "Sydnee", "Caesar", "Galvin", "Colette", "Hasad", "Kaitlin", "Leigh", "Karleigh", "Ivan", "Warren", "Quincy", "Marah", "Brian", "Bree", "Paki", "Darryl", "Basia", "Cameron", "Roth", "Chadwick", "Celeste", "Kylee", "Adena", "Carter", "Cally", "Jordan", "Brent", "Rashad", "Uriah", "Zorita", "Hayley", "Timon", "Kim", "Imogene", "Omar", "Ryder", "Yvonne", "Carly", "Mari", "Margaret", "Robert", "Hilda", "Nasim", "Ulla", "Quinn", "Yetta", "Barry", "Suki", "Xantha", "Blaine", "Sydney", "Jennifer", "Violet", "Maggy", "Adrienne", "Kirsten", "Maxwell", "Indira", "Valentine", "Aubrey", "Iliana", "Beverly", "Gage", "Keith", "Wing", "William", "Randall", "Honorato", "Penelope", "Pandora", "Emily", "Ebony", "Pamela", "Nigel", "Chiquita", "Aline", "Kitra", "Baxter", "Mark", "Kendall", "Fay", "Wilma", "Kibo", "Xena", "Breanna", "Jessamine", "Dylan", "Raphael", "Ivana", "George", "Eagan", "Cecilia", "Rosalyn", "Marsden", "Jacob", "Lunea", "Moses"];
const lastNames = ["Barr", "Kaufman", "Branch", "Davidson", "Howell", "Gallagher", "Hartman", "Schroeder", "Deleon", "Avery", "Hudson", "Ryan", "Clements", "Weeks", "Weeks", "Wiley", "Velasquez", "Bradshaw", "Herrera", "Black", "Wooten", "Levine", "Riddle", "Avery", "Stein", "Mack", "Barron", "Mcdonald", "Clayton", "Levy", "Leblanc", "Pruitt", "Trevino", "Jacobs", "Golden", "Walker", "French", "Jacobson", "Vargas", "Fitzgerald", "Sykes", "Leach", "Ochoa", "Porter", "Hopkins", "Cortez", "Hopkins", "Caldwell", "Frederick", "Chapman", "Cox", "Griffith", "Potter", "Riddle", "Vance", "Carver", "Brady", "Madden", "Mcdowell", "Orr", "Weaver", "Buckley", "Sharpe", "Bernard", "Neal", "Solis", "Hester", "Davis", "Lambert", "Brennan", "Cash", "Montgomery", "Joyce", "Stark", "Slater", "Merrill", "Mathews", "Dickerson", "Winters", "Dillon", "Rocha", "Mcmahon", "Norton", "Christensen", "Clements", "Warner", "Clemons", "Swanson", "Knapp", "Landry", "Barlow", "Mcmahon", "Robbins", "Salinas", "Callahan", "Gould", "Todd", "Newman", "Murphy", "Jacobson", "Bender", "Sharp", "Cruz", "Mcintyre", "Johns", "Rich", "Gates", "Hartman", "Mcbride", "Dixon", "Huffman", "Snyder", "Hernandez", "Turner", "Tucker", "Huber", "Salazar", "Dalton", "Hardy", "Austin", "Dalton", "Mcfadden", "Peterson", "Booth", "Allen", "Holman", "Cochran", "Finch", "Phillips", "Valenzuela", "Adams", "Mcleod", "Clayton", "Mccall", "Golden", "Carney", "Pierce", "Kinney", "Vincent", "Guerra", "Cherry", "Glover", "Booth", "Greene", "Vega", "Stokes", "Mcdonald", "Dunlap", "Ward", "Patton", "Puckett", "Singleton", "Buck", "Monroe", "Owen", "Pope", "Gutierrez", "Fischer", "Michael", "Robbins", "Morales", "Oneill", "Doyle", "Oneal", "Perkins", "Wall", "George", "Thompson", "Jarvis", "Roy", "Harrison", "Barrera", "Goff", "Willis", "Rowland", "Daniel", "Rowland", "Woodward", "Beck", "Hess", "Navarro", "Roberson", "Compton", "Mclaughlin", "Flores", "Sexton", "Kirk", "Harris", "Huff", "Donaldson", "Mayo", "Hayden", "Booth", "Salas", "Schmidt", "Hunter", "Fowler", "Valentine", "Cabrera", "Pacheco", "Ratliff", "Vasquez", "Hodges", "Mccarty", "Guerra", "Drake", "Lowery", "Kane", "Buck", "Berry", "Huff", "Molina", "Sharpe", "Marks", "Stuart", "Glass", "Kent", "Jennings", "Mckee", "Hancock", "Molina", "Lang", "Wise", "Glenn", "Slater", "Hicks", "Miranda", "Mcgowan", "Mcintyre", "Estrada", "Ford", "Mckenzie", "Spence", "Stuart", "Jordan", "Sweeney", "Sandoval", "Gross", "Snyder", "Buckley", "Norris", "Cote", "Gibson", "Pace", "Hawkins", "Frank", "Ballard", "Slater", "Franco", "Nicholson", "Owen", "Richmond", "Gillespie", "Tyler", "England", "Whitfield", "Holt", "Simon", "Kirby", "Ramos", "Rosales", "Aguilar", "Mccarty", "Knowles", "Sargent", "Perry", "Morris", "Patton", "Reilly", "Avila", "Morris", "Vinson", "Harvey", "Ellis", "Bray", "Gibson", "Fitzgerald", "Medina", "Williamson", "Flowers", "Guerrero", "Lyons", "Macdonald", "Patton", "Winters", "Hayes", "Kane", "Mays", "Joseph", "Frazier", "Walters", "Sears", "Howard", "Jackson", "Finch", "Washington", "Bryant", "Zimmerman", "Elliott", "Garrett"];

const generateDates = function(numberOfDates, start, end) {
  // format dates as: '2007-01-01 10:00:00'
}

const generateTransactionAmounts = (numberOfTransactions, min, max) => {
  let results = [];
  for (let i = 0; i < numberOfTransactions; i++) {
    results.push((Math.random() * (max - min) + min).toFixed(2));
  }
  return results;
};

const generateCurrencyType = (currencyTypes, numberOfTransactions) => {
  const results = [];
  for (let i = 0; i < numberOfTransactions; i++) {
    results.push(currencyTypes[Math.floor(Math.random() * currencyTypes.length)]);
  }
  return results;
};

const generateCategory = (categoryTypes, numberOfTransactions) => {
  const results = [];
  for (let i = 0; i < numberOfTransactions; i++) {
    results.push(categoryTypes[Math.floor(Math.random() * categoryTypes.length)]);
  }
  return results;
};
