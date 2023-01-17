const {Wiki} = require ('../db/models');

exports.wiki = async (req, res) => {

  try {
    const wiki = await Wiki.findAll({ raw: true });
    res.send(wiki);
  } catch (error) {
      console.log('ERROR LIST==>', error.message);
  }
}