const route = require("express").Router();
const { ArrayPair } = require('../db/models');


route.post("/pairs/:id", async (req, res) => {

    const { data, group_id } = req.body;
    const stringArr = JSON.stringify(data);
    
    try {
        const {data} = await ArrayPair.create({data: stringArr, group_id});
        res.json({data});        
    } catch
        (error) {
        console.log(error);
        res.status(500).json({error: error.message});
    }
})

route.get(`/pairs/:id`, async (req, res) => {
    try {
      const group_id = req.params.id;
        console.log("🚀 ~ file: arrayPairs.js:25 ~ route.get ~ group_id", group_id)
      const allPairs = await ArrayPair.findAll({ where: { group_id }, raw: true });
      const pairs = allPairs.pop()
      res.send(pairs);
    } catch (error) {
      console.log("Error ==>", error);
    }
  });


module.exports = route;