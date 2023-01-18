const route = require("express").Router();
const { Wiki } = require('../db/models');


route.post("/createWiki", async (req, res) => {

    const { name, page } = req.body;
    
    try {
        const {data} = await Wiki.create(name, page);
        res.json({data});        
    } catch
        (error) {
        console.log(error);
        res.status(500).json({error: error.message});
    }
})

module.exports = route;