const User = require('../models/User');
const jwt = require('jsonwebtoken');

// handle errors
const handleErrors = (err) => {
    console.log(err.message, err.code);
    let error = {
        email: '',
        password: ''
    };

    // duplicate error code
    if (err.code === 11000) {
        error.email = 'That email is already registered!';
        return error;
    }

    // validation errors
    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({
            properties
        }) => {
            error[properties.path] = properties.message;
        })
    }

    return error;
}

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
    return jwt.sign({id}, 'kultosh secret', {
        expiresIn: maxAge
    })
}

const signup_create = (req, res) => {
    res.render('signup');
}

const signup_store = async (req, res) => {
    const {
        email,
        password
    } = req.body;

    try {
        const user = await User.create({
            email,
            password
        });
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.status(201).json({user: user._id});
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({
            errors
        });
    }
}

const login_get = (req, res) => {
    res.render('login');
}

const login_post = (req, res) => {
    const {
        email,
        password
    } = req.body;
    console.log(email, password);
    res.send('user login')
}

module.exports = {
    signup_create,
    signup_store,
    login_get,
    login_post
}