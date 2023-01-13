const route = require("express").Router();
const { ArrayPair, Group, User } = require('../db/models');


route.post("/arrayPairs", async (req, res) => {

    const { data, group_id } = req.body;
    console.log("🚀 ~ file: arrayPairs.js:10 ~ route.post ~ data", Array.isArray(data))
   const stringArr = JSON.stringify(data);
    
    try {
        const {data} = await ArrayPair.create({data: stringArr, group_id});
        console.log("🚀 ~ file: arrayPairs.js:14 ~ route.post ~ arrayPairs", data)
        res.json({data});        
    } catch
        (error) {
        console.log(error);
        res.status(500).json({error: error.message});
    }
})


module.exports = route;