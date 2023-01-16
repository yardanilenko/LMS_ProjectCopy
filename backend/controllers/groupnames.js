const {Group, UserInfo} = require ('../db/models');


exports.groupnames = async (req, res) => {
  try {
    const group_id = req.params.id;
    const groupnames = await Group.findAll({
      where: {
        id: group_id
      },
      include: { 
        model : UserInfo , 
      },
  });
    res.send(groupnames);
  } catch (error) {
      console.log('ERROR LIST==>', error.message);
  }
}
