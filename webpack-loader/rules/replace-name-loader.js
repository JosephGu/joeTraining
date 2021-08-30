const { getOptions } = require('loader-utils');

module.exports = async function (source) {
    // this options are set in the webpack.config.js
    const options = getOptions(this);
    const { qaName } = options;
    // await is required
    const code = await JSON.stringify(source.replace('qaName', qaName));
    return code;
}