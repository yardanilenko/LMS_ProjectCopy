const {Vote, Answer} = require("../db/models");

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

exports.getVoteById = async (req, res) => {
    // TODO: user id from session
    const user_id = 1;
    try {
        const vote = await Vote.findByPk(req.params.id);
        const answer = await Answer.findOne({
            where: {
                vote_id: req.params.id,
                user_id,
            }
        });
        const allAnswers = await Answer.findAll({
            where: {
                vote_id: req.params.id,
            }
        });
        res.json({
            ...vote.dataValues,
            isAnswered: !!answer,
            answer: answer ? answer.dataValues : null,
            allAnswers: allAnswers.map(item => JSON.parse(item.dataValues.data))
        });
    } catch (error) {
        console.log('ERROR GET==>', error.message);
    }
};

exports.createVoteAnswer = async (req, res) => {
    const user_id = 1;
    //TODO: user id from session
    const {id} = req.params;
    const data = JSON.stringify(req.body.data);
    try {
        const answer = await Answer.create({
            data,
            user_id,
            vote_id: id
        });
        res.status(201).json(answer);
    } catch (error) {
        console.log('ERROR CREATE ANSWER==>', error.message);
    }
}
