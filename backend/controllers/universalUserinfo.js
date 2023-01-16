const { UserInfo, Group } = require("../db/models");

exports.universalUserinfo = async (req, res) => {
    const { id } = req.params
    // const userId = req.session.currentUserId
        try {
        const userinform = await UserInfo.findOne({where: {user_id : id},
            include: { 
              model : Group , 
            },
      
            }
        );
        console.log('11111',userinform);
        res.json(userinform)
    } catch (error) {
        console.log('ERROR LIST==>', error.message);
    }
}