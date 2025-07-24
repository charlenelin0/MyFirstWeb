const user = require('../models/db/user');
const sequelize = require('sequelize')

exports.addUser = async(users) => {
    return await user.UserInfo.create({
    ID: users.ID,
    email: users.email,
    password: users.password,
    birthday: users.birthday,
    gender: users.gender,
    country: users.country,
    city: users.city
})};

exports.findUser = async(id) => {
    const result = await user.UserInfo.findOne({
    where: {
        ID: id
    },});
    return result;   
};
