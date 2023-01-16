const { UserInfo, Group } = require("../db/models");

exports.listUserinfo = async (req, res) => {

    // try {
    //     const userinform = await UserInfo.findOne({where: {user_id : 6}}
    //     );
    //     console.log(userinform);
    //     res.json(userinform)
    // } catch (error) {
    //     console.log('ERROR LIST==>', error.message);
    // }
    // console.log('111111!!!!!',req.session.currentUserId)
    const userId = req.session.currentUserId
        try {
        const userinform = await UserInfo.findOne({where: {user_id : userId},
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