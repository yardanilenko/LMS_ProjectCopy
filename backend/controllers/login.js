const { User } = require("../db/models");
const bcrypt = require("bcrypt");

exports.loginUser = async (req, res) => {
    const { login, password } = req.body;
    try {
        const user = await User.findOne({ where: { login } });
        if (!user) {
            res.status(400).send({ message: "User does not exist" });
            return
        }
        const passCheck = await bcrypt.compare(password, user.password);
        if (passCheck) {
            req.session.currentUserName = user.login;
            req.session.currentUserId = user.id;
            req.session.currentRole = user.role;
            req.session.save(() => {
                res.json({ userName: user.login, userId: user.id , userRole: user.role});
            });
        } else {
            res.status(401).send({ message: "Incorrect email or password" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};
