// Import Connection from index
const {sequelize, DataTypes} = require('./index');

const UserInfo = sequelize.define(
    'user_info',
    {
        'ID': {type: DataTypes.STRING, primaryKey:true},
        'email': {type: DataTypes.STRING, allowNull: false},
        'password': {type: DataTypes.STRING, allowNull: false},
        'birthday': {type:DataTypes.DATEONLY},
        'gender': {type: DataTypes.STRING},
        'country': {type: DataTypes.STRING},
        'city':{type: DataTypes.STRING}

},{tableName: 'user_info'});

const SampleUserInfo= {
    'ID': 'A123456789',
    'email': 'c1234@gmail.com',
    'password': 'c1234password'
};

module.exports = {UserInfo, SampleUserInfo};

