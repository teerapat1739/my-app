const User = require('../models/user.model')


exports.create = (req, res, next) => {
    console.log('create')
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
