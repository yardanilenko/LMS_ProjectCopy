const { Router } = require ('express')
const fileMiddleware = require('../middleware/file')
const { UserInfo } = require("../db/models");

const router = Router ()

router.post('/uploadavatar', fileMiddleware.single('avatar'), async (req,res) => {
    const userID = 6
    try {
        if (req.file){
            res.json(req.file)
            console.log(req.file.filename)
            const update = await UserInfo.update(
                { photo: req.file.filename },
                { where: { user_id: userID } },
            )
        }
    } catch (error) {
        console.log(error)
    }
}) 

module.exports = router