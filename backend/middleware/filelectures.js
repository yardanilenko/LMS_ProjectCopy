const multer = require('multer')
const storage = multer.diskStorage({
    destination(req,file,cb){
        cb(null,'files/')
    },
    filename(req,file,cb){
        // cb(null, new Date().toISOString() + '-' + file.originalname)
        cb(null, file.originalname)
    }
})

const types = ['application/pdf','application/zip','application/vnd.rar']

const fileFilter = (req,file,cb) => {
    if (types.includes(file.mimetype)) {
        cb(null,true)
    } else {
        cb(null,false)
    }
}

module.exports = multer({storage, fileFilter})