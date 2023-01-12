const { Vote } = require("../db/models");

exports.allVotes = async (req, res) => {
    // const user_id = req.params.user_id;
    const user_id = 1;
    try {
        const allVotes = await Vote.findAll({
                where: {
                    user_id
                }
            }
        );
        res.json(allVotes)
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

exports.deleteVote = async (req, res) => {
    try {
        const vote = await Vote.findByPk(req.params.id);
        await vote.destroy();
         // TODO: user id from session
        const user_id = 1;
        const allVotes = await Vote.findAll({
                where: {
                    user_id
                }
            }
        );
        res.json(allVotes)
    } catch (error) {
        console.log('ERROR DELETE==>', error.message);
    }
}
