const Tech = require('../models/Tech')
const User = require('../models/User');

module.exports = {
    async index(req, res) {
        const { user_id } = req.params

        /* Busca as tecnologias do usuário removendo as informações da tabela pivô */
        const user = await User.findByPk(user_id, {
            include: { association: 'techs', attributes:['name'], through:{
                attributes:[]
            } }
        })

        return res.json(user.techs)
    },
    async store(req, res) {
        const { user_id } = req.params

        const { name } = req.body

        const user = await User.findByPk(user_id)

        if (!user) {
            return req.status(400).json({ error: 'user not found' })
        }

        //Procura ou cria o registro
        const [tech] = await Tech.findOrCreate({
            where: { name }
        })

        /*Relaciona a tecnologia criado com o usuário */
        await user.addTech(tech)

        return res.json(tech)
    },

    async delete(req, res) {
        const { user_id } = req.params

        const { name } = req.body

        const user = await User.findByPk(user_id)

        if (!user) {
            return req.status(400).json({ error: 'user not found' })
        }

        const tech = await Tech.findOne({
            where: { name }
        })

        await user.removeTech(tech)

        return res.json();
    }
}