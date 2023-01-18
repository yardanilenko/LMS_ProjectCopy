const { UserInfo, Group } = require("../db/models");

exports.listUserinfo = async (req, res) => {
    const userId = req.session.currentUserId
        try {
        const userinform = await UserInfo.findOne({logging: console.log, where: {user_id : userId},
            include: { 
              model : Group , 
            },
      
            }
        );
        console.log('11111',userinform);
        res.json(userinform)
        // const userinform = await UserInfo.findOne({where: {user_id : userId},
        //     include: { 
        //       model : Group ,
        //       where: {
        //         id: 5
        //       }, 
        //     },
      
        //     }
        // );
        // console.log('11111',userinform);
        // res.json(userinform)
    } catch (error) {
        console.log('ERROR LIST==>', error.message);
    }
}