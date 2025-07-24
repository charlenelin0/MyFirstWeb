const userService = require('../services/userService');

exports.findUser = async(req, res) => {
    try{
        const user = await userService.findUser(req.params.id);
        return res.json(user);
    }
    catch(err){
        return res.status(err.statusCode || 500).json({ message: err.message });
    };
};

exports.addUser = async(req, res) => {

    const data = req.body;

    if(!data.email || !data.password){
        return res.status(400).json({message: 'Missing Fiedls'})
    };

    try{
        await userService.addUser(data);
        return res.status(201).json({message: 'User created successfully'});
    }
    catch(err){
        return res.status(err.statusCode || 500).json({ message: err.message });
    }
    
};