const user = require('./controllers/user.controller')


module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send({ message: 'Fancy App' })
    })

    app.post('/signin', user.signin)

    app.post('/users', user.create)
    app.put('/users', user.update)

}