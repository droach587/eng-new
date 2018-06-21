const argv = require('yargs').argv;
const isProduction = !!(argv.production);

module.exports = () => {
    return isProduction;
}
