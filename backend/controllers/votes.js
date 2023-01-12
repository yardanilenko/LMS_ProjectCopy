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

exports.createVote = async (req, res) => {
    try {
        const newVote = await Vote.create({
            // TODO: user is from session
            user_id: 1,
            name: req.body.name,
            data: JSON.stringify(req.body.data),
            group_id: req.body.group_id
        });
        res.status(201).json(newVote);
    } catch (error) {
        console.log('ERROR CREATE==>', error.message);
    }
}
