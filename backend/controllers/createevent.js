
const { Event,Member } = require("../db/models");

exports.createevent = async (req, res) => {
    try {
        const createEvent = await Event.create(
          { name: req.body.name, user_id: req.body.user_id, description: req.body.description, start: req.body.start, finish: req.body.finish  }
        );
        const createMember = await Member.create(
          { user_id: req.body.member_id, event_id: createEvent.id }
        );
        res.json(createMember);
      } catch (error) {
        console.log(error);
      }
}