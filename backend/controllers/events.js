const {Event, Member, User} = require("../db/models");

exports.allEvents = async (req, res) => {
    const user_id = req.session.currentUserId
    const user = await User.findOne({where: {id:user_id}})
    if (user.role === 'student') {
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
            const data = allEvents.map((member) => ({
                name: member?.dataValues?.Event?.name,
                start: member?.dataValues?.Event?.start,
                finish: member?.dataValues?.Event?.finish,
                description: member?.dataValues?.Event?.description,
                //TODO: add output of description
            }))
            res.json(data)
        } catch (error) {
            console.log('ERROR LIST==>', error.message);
        }
    } else {
    try {
        const allEvents = await Event.findAll({
            where:{
                user_id
            }
        });
        res.json(allEvents)
    } catch (error) {
        console.log('ERROR LIST==>', error.message);
    }
}
}
