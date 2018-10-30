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


exports.changePassword = (req, res, next) => {
    console.log('update')
    console.log(req.body);

    User.findOne({ email: req.body.email }, (err, results) => {
        console.log(results)
        if (err) { return next(err) }   //ดักจับ error
        if (results.password === req.body.password) {
            User.findOneAndUpdate({ email: results.email }, { password: req.body.newPassword }, { new: true }, (err, user) => {
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

exports.signin = (req, res, next) => {
    User.findOne({ email: req.body.email }, (err, result) => {
        if(err) {
            console.log(err)
            return next(err)
        }
        console.log(result)
        if (result == null) {
            console.log('xxxx')
            res.json({
                login: false,
                message: 'No this account'
            })
        } else {
            if (result.password === req.body.password) {
                console.log(result.password === req.body.password)
                res.json({
                    ...result,
                    login: true
                })
            }
            else {
                res.json({
                    login: false
                })
            }
        }
    })
}

exports.delete = (req, res, next) => {
    console.log('delete')
    console.log(req.body)
    User.findOneAndRemove({ email: req.body.email}, (err, result) => {
        if (err) {
            return next(err)
        } else {
            res.json({
                ...result,
                message: 'delete account success'
            })
        }
    })
}