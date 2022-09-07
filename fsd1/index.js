const exp = require('express')
const m = require('mongoose')
const url = "mongodb://localhost/FSD_lab_043"
m.connect(url, { useNewUrlParser: true }) //To avoid warnings we have used useNewUrlParser:true
const app = exp();
const con = m.connection
con.on('open', function() {
    console.log("Welcome")
})
app.use(exp.json())
const r = require('./controller/route')
app.use('/student', r)
app.listen(9000, () => {
    console.log("Server connected")
})