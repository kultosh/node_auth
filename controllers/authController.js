const signup_create = (req, res) => {
    res.render('signup');
}

const signup_store = (req, res) => {
    res.send('new signup');
}

const login_get = (req, res) => {
    res.render('login');
}

const login_post = (req, res) => {
    res.send('user login')
}

module.exports = {
    signup_create,
    signup_store,
    login_get,
    login_post
}