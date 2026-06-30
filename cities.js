const minnesotaCities = [
  "Ada", "Adams", "Afton", "Aitkin", "Albany",
  "Albert Lea", "Albertville", "Alden", "Alexandria", "Amboy",
  "Andover", "Annandale", "Anoka", "Appleton", "Arlington",
  "Ashby", "Aurora", "Austin", "Avon", "Bagley",
  "Balaton", "Barnesville", "Barnum", "Battle Lake", "Baxter",
  "Bayport", "Becker", "Belle Plaine", "Bemidji", "Benson",
  "Bertha", "Bethel", "Big Lake", "Bird Island", "Biwabik",
  "Blooming Prairie", "Blue Earth", "Bovey", "Boyd", "Braham",
  "Brainerd", "Brandon", "Breckenridge", "Brewster", "Britt",
  "Brooten", "Buffalo", "Burnsville", "Byron", "Caledonia",
  "Cambridge", "Canby", "Cannon Falls", "Carlton", "Carver",
  "Cedar", "Center City", "Champlin", "Chanhassen", "Chaska",
  "Chatfield", "Chisago City", "Chisholm", "Circle Pines", "Clara City",
  "Claremont", "Clarkfield", "Clarks Grove", "Clear Lake", "Clearwater",
  "Cleveland", "Climax", "Cloquet", "Cohasset", "Cokato",
  "Cold Spring", "Cologne", "Cook", "Cottage Grove", "Cottonwood",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < minnesotaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(minnesotaCities[i]);
}

module.exports = { batches };
