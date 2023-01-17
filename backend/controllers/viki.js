const {Viki} = require ('../db/models');


exports.viki = async (req, res) => {
  try {
    const viki = await Viki.findAll({ raw: true });
    res.send(viki);
  } catch (error) {
      console.log('ERROR LIST==>', error.message);
  }
}