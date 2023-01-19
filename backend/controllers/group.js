const {Group, User} = require ('../db/models');


exports.group = async (req, res) => {
  try {
    const group_id = req.params.id;
    const group = await Group.findAll({
      where: {
        id: group_id
      },
      include: { 
        model : User , 
      },
  });
    res.send(group);
  } catch (error) {
      console.log('ERROR GROUP==>', error.message);
  }
}

