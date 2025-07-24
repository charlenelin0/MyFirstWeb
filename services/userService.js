const userRepo = require('../repositories/userRepository');
const HTTPError = require('../utils/httpError');

exports.findUser = async(id) => {
    const user = await userRepo.findUser(id);
    if(!user) throw new HTTPError(404, 'Missing User');
    return user;
};

exports.addUser = async(userInfo) => {
    const exstinguser = await userRepo.findUser(userInfo.ID);
    if(exstinguser){
        throw new HTTPError(409, 'User already exist')
    };
    try{
        await userRepo.addUser(userInfo)
    }
    catch(err){
        throw err
    }
};