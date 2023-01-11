const {Event, Member} = require("../db/models");

exports.allEvents = async (req, res) => {
    const user_id = 6;
    // TODO: get user_id from session
    try {
        const allEvents = await Member.findAll({
                where: {
                    user_id: user_id
                },
                include: {
                    model: Event,

                },
            }
        );
        res.json(allEvents)
    } catch (error) {
        console.log('ERROR LIST==>', error.message);
    }
}
