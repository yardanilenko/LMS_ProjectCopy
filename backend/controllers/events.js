const {Event, Member} = require("../db/models");

exports.allEvents = async (req, res) => {
    const user_id = 1;
    // TODO: get user_id from session
    try {
        const allEvents = await Member.findAll({
                where: {
                    user_id: user_id
                },
                include: {
                    model: Event,

                },
            attributes: ['Event.id']
            }
        );
        console.log(allEvents);
        res.json(allEvents)
    } catch (error) {
        console.log('ERROR LIST==>', error.message);
    }
}
