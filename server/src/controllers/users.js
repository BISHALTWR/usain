const User = require('../models/user')
const registerNewUser = async (req, res) => {
    const existingUser = await User.findOne({email: req.body.email})
    if(existingUser) {
        return res.status(403).json(
            {
                msg: "User already exists"
            }
        )
    } else{
        await User.create(req.body)
        return res.json({
            msg: "registered successfully"
        })
    }
}

module.exports = {registerNewUser}