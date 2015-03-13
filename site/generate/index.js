var buildReference = require('./reference');

function main() {
  if (process.argv.length !== 4) {
    console.error('usage: build <siteDir> <outDir>');
    return process.exit(1);
  }

  var siteDir = process.argv[2];
  var outDir = process.argv[3];

  buildReference(siteDir, outDir);
}

if (require.main === module) {
  main();
}
