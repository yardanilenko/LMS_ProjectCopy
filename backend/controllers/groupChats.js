const {Op} = require('sequelize');
const {UserChat, Room} = require('../db/models');

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
                    name: name
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
        const rooms = await Room.findAll({
            where: {
                name: {[Op.ne]: null},
            }
        });
        res.json({rooms});
    } catch (error) {
        res.status(500).send({message: error.message});
    }
}
