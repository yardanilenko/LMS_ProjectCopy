
const { UserInfo } = require("../db/models");

exports.updateinfo = async (req, res) => {
    try {
        const update = await UserInfo.update(
          { city: req.body.city, phone: req.body.phone, telegram: req.body.telegram, github: req.body.github, email: req.body.email  },
          { where: { user_id: req.body.user_id } },
        );
        res.json(update);
        console.log(update)
        console.log(req.body.user_id)
      } catch (error) {
        console.log(error);
      }
}