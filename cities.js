const minnesotaCities = [
  "Courtland", "Cromwell", "Crookston", "Crosslake", "Cushing",
  "Darwin", "Dassel", "Dawson", "Dayton", "Deer River",
  "Delano", "Dent", "Detroit Lakes", "Dexter", "Dilworth",
  "Dodge Center", "Duluth", "Dundas", "Eagle Bend", "Eagle Lake",
  "East Grand Forks", "Eden Prairie", "Elbow Lake", "Elgin", "Elk River",
  "Elko New Market", "Ellsworth", "Elrosa", "Embarrass", "Emmons",
  "Esko", "Eveleth", "Excelsior", "Eyota", "Fairfax",
  "Fairmont", "Faribault", "Farmington", "Farwell", "Fergus Falls",
  "Fertile", "Floodwood", "Foley", "Forest Lake", "Fosston",
  "Franklin", "Frazee", "Freeborn", "Freeport", "Fulda",
  "Gaylord", "Gilbert", "Glencoe", "Glenville", "Glenwood",
  "Glyndon", "Gonvick", "Good Thunder", "Goodhue", "Goodridge",
  "Grand Marais", "Grand Portage", "Grand Rapids", "Granite Falls", "Hackensack",
  "Hallock", "Halstad", "Hamel", "Hancock", "Hanover",
  "Hanska", "Hardwick", "Harmony", "Hastings", "Hawley",
  "Hayfield", "Hector", "Henderson", "Hendricks", "Henning",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < minnesotaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(minnesotaCities[i]);
}

module.exports = { batches };
