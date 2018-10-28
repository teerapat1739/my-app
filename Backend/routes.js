const user = require('./controllers/user.controller')


module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send({ message: 'Fancy App' })
    })

    app.post('/users', user.create)
}