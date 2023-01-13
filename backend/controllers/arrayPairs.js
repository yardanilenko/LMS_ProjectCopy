const { ArrayPair, Group, User } = require("../db/models");

exports.allPairs = async (req, res) => {

    try {
        const allPairs = await ArrayPair.findAll({}
        );
        console.log(allPairs);
        res.json(allPairs)
    } catch (error) {
        console.log('ERROR LIST==>', error.message);
    }
}

exports.createArrayPair = async (req, res) => {
    const group_id = req.params.id;

    function getShuffledArr(array) {
        let result = [], source = array.concat([]);
      
        while (source.length) {
          let index = Math.floor((Math.random()-0.5) * source.length);
          result.push(source.splice(index, 1)[0]);
       }
      
        if(result === array){
            result.reverse();
        }
       
      
        return result;
      }
      
      function getPairs(arr){
          const res = getShuffledArr(arr)
          const pairs = [];
          for (let i = 0; i < res.length/2; i++) { 
            if(res.length % 2 === 0){
              pairs.push([res[2*i].login, res[2*i+1].login])
            } else {
              const popped = res.pop();
              pairs.push([res[2*i].login, res[2*i+1].login])
              pairs.at(-1).push(popped.login)
            }
          }
          return pairs;
      }

      function createData(week1, week2, week3, week4) {
        return { week1, week2, week3, week4 };
      }
      
      const myGroup = async (req, res) => {
        try {
          const group_id = req.params.id;
          const group = await Group.findAll({
            where: {
              id: group_id
            },
            include: { 
              model : User , 
            },
        });
          res.send(group);
        } catch (error) {
            console.log('ERROR LIST==>', error.message);
        }
      }
      console.log("🚀 ~ file: arrayPairs.js:54 ~ exports.createArrayPair= ~ myGroup}", myGroup)

      const getRowUl = () => {
        let row  = getPairs(myGroup);
        let ul = <ul>{row.map((el) => <li>{el.join('-')}</li> )}</ul>;
        return ul;
      }
    
    const getRowsArr = () => {
      const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница'];
      let myRows = [];
        myRows = [
      createData(days[0], days[0], days[0], days[0]),
      createData(getRowUl(), getRowUl(), getRowUl(), getRowUl()),
      createData(days[1], days[1], days[1], days[1]),
      createData(getRowUl(), getRowUl(), getRowUl(), getRowUl()),
      createData(days[2], days[2], days[2], days[2]),
      createData('Solo', 'Solo', 'Solo', 'Solo'),
      createData(days[3], days[3], days[3], days[3]),
      createData('Solo', 'Solo', 'Solo', 'Solo'),
      createData(days[4], days[4], days[4], days[4]),
      createData(getRowUl(), getRowUl(), getRowUl(), getRowUl()),
    ];
    return myRows;
    }

    try {
        const newArrayPair = await ArrayPair.create({
            data: JSON.stringify(req.body.data),
            group_id
        });
        res.status(201).json(newArrayPair);
    } catch (error) {
        console.log('ERROR CREATE==>', error.message);
    }
}