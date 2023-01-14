const route = require("express").Router();
const { ArrayPair } = require('../db/models');


route.post("/pairs/", async (req, res) => {

    const { data, group_name, group_id } = req.body;
    const stringArr = JSON.stringify(data);
    
    try {
        const {data} = await ArrayPair.create({data: stringArr, group_name, group_id});
        res.json({data});        
    } catch
        (error) {
        console.log(error);
        res.status(500).json({error: error.message});
    }
})

route.get(`/pairs`, async (req, res) => {
    try {
      const allPairs = await ArrayPair.findAll({ raw: true });
      res.send(allPairs);
    } catch (error) {
      console.log("Error ==>", error);
    }
  });


module.exports = route;