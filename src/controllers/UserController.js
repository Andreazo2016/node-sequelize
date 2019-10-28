const User = require('../models/User')

module.exports = {

    async index(req, res) {
        const users = await User.findAll()

        return res.json(users)
    },
    async store(req, res) {
        const { email, name } = req.body

        try {
            const user = await User.create({ name, email })
            return res.json(user);
        } catch (error) {
            const { errors } = error
            return res.json(errors)
        }



    }
}