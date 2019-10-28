const Sequelize = require('sequelize')
const dbConfig = require('./../config/database')
const User = require('../models/User')
const Address = require('../models/Address')
const Tech = require('../models/Tech')

const conection = new Sequelize(dbConfig)
User.init(conection)
Address.init(conection)
Tech.init(conection)

Address.associate(conection.models)
User.associate(conection.models)
Tech.associate(conection.models)

module.exports = conection