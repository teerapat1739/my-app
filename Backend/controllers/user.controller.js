const User = require('../models/user.model')
const jwt = require('jwt-simple')
const config = require('../config')


exports.create = (req, res, next) => {
    User.findOne({ email: req.body.email }, (err, result) => {
        if (err) { return next(err); }

        if (result) {
            res.json({ status: 201, message: 'Username is Duplicate' })
        } else {
            const user = new User(req.body)
            user.save(err => {
                if (err) { return next(err) }
                res.json(user)
            })
        }
    })
}
