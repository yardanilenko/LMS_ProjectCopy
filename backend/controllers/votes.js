const { Vote } = require("../db/models");

exports.allVotes = async (req, res) => {

    try {
        const allEvents = await Vote.findAll({}
        );
        console.log(allEvents);
        res.json(allEvents)
    } catch (error) {
        console.log('ERROR LIST==>', error.message);
    }
}
