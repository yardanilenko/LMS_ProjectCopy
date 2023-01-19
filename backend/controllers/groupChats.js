const {Op} = require('sequelize');
const {UserChat, Room, User} = require('../db/models');

exports.findOrCreateGroup = async (req, res) => {
    try {
        if (req.session.currentUserName) {
            const {id, name} = req.body;
            const [row] = await UserChat.findOrCreate({
                where: {
                    room_id: id,
                    user_id: req.session.currentUserId,
                },
                defaults: {
                    room_id: id,
                    user_id: req.session.currentUserId,
                    name: name,
                    isGroup: true,
                }
            })
            res.json({
                id: row.id,
            });
        } else {
            res.send({message: 'You have to be logged in to see all chats'});
        }

    } catch (error) {
        res.status(500).send({message: error.message});
    }
};

exports.getPublicRooms = async (req, res) => {
    try {
        const user = await User.findByPk(req.session.currentUserId);
        const condition = {
                name: {[Op.ne]: null},
        }
        if (req.session.currentRole === 'student') {
            condition.group_id = user.group_id;
        }
        const rooms = await Room.findAll({
            where: condition
        });
        res.json({rooms});
    } catch (error) {
        res.status(500).send({message: error.message});
    }
}
