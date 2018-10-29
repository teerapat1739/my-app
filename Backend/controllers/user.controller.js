const User = require('../models/user.model')
//ฟังก์ชันสร้างข้อมูลผู้ใช้ใหม่
exports.create = (req, res, next) => {
    console.log(req.body)
    console.log(req.body.email)
    User.findOne({ email: req.body.email }, (err, result) => {
        if (err) { return next(err); }

        if (result) {
            res.json({ status: 201, message: 'email is Duplicate' })
        } else {
            const user = new User(req.body)
            user.save(err => {
                if (err) { return next(err) }

                res.json(user)
            })
        }
    })
}

exports.update = (req, res, next) => {
    console.log('update')
    console.log(req.body);

    User.findOne({ email: req.body.email }, (err, results) => {
        if (err) { return next(err) }   //ดักจับ error

        if (results) {
            User.findOneAndUpdate({ email: results.email }, req.body, { new: true }, (err, user) => {
                if (err) {
                    return next(err)
                } else {
                    res.json(user)
                    // console.log(user)

                }
            })
        } else {
            console.log(err)
        }
    })
}
