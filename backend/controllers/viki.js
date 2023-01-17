const {Viki} = require ('../db/models');

exports.viki = async (req, res) => {
  console.log("🚀 ~ file: viki.js:7 ~ exports.viki= ~ viki")
  try {
    const viki = await Viki.findAll({ raw: true });
    console.log("🚀 ~ file: viki.js:7 ~ exports.viki= ~ viki", viki)
    res.send(viki);
  } catch (error) {
      console.log('ERROR LIST==>', error.message);
  }
}