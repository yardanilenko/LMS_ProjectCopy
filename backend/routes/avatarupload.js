const { Router } = require ('express')
const fileMiddleware = require('../middleware/file')
const { UserInfo } = require("../db/models");

const router = Router ()

router.post('/uploadavatar', fileMiddleware.single('avatar'), async (req,res) => {
    try {
        if (req.file){
            // res.json(req.file)
            // res.json({ user: 'geek' })
            // res.send(res.body{ title: 'GeeksforGeeks' })
            // res.append('Content-Length', '5089990');
            res.json(req.file.filename)
           await UserInfo.update(
                { photo: req.file.filename },
                { where: { user_id: req.session.currentUserId } },
            )
        }
    } catch (error) {
        console.log(error)
    }
})

module.exports = router
