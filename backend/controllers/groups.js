const {Group} = require ('../db/models');


exports.groups = async (req, res) => {
  try {
    const groups = await Group.findAll({ raw: true });
    res.send(groups);
  } catch (error) {
      console.log('ERROR LIST==>', error.message);
  }
}