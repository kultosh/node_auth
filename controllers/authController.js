const User = require('../models/User');

const signup_create = (req, res) => {
    res.render('signup');
}

const signup_store = async(req, res) => {
    const {email, password} = req.body;

    try {
        const user = await User.create({email, password});
        res.status(201).json(user);
    } catch (error) {
        console.log(error);
        res.status(400).send('error, user not created');
    }
}

const login_get = (req, res) => {
    res.render('login');
}

const login_post = (req, res) => {
    const {email, password} = req.body;
    console.log(email, password);
    res.send('user login')
}

module.exports = {
    signup_create,
    signup_store,
    login_get,
    login_post
}