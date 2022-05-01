const express = require("express")
const app = express();
const cors = require('cors')
const path = require("path")

app.use(cors())

app.use(express.json())

// app.use('/', (req, res, next) => {
//     next()
// })
app.use("/Uploads", express.static(__dirname + "/Uploads"));
app.use('/user', require('./Controllers/routes/User'))
app.use('/auth', require('./Controllers/routes/Auth'))
app.use('/university', require('./Controllers/routes/University'))
app.use('/faculty', require('./Controllers/routes/Faculty'))
// app.use('/course', require('./Controllers/routes/course'))



// app.post('/add', (req, res) => {
//     if (req) {
//         console.log(req.body)
//         res.send('ok')
//     }
// })


if(process.env.NODE_ENV == "production"){
    app.use(express.static(path.resolve(process.cwd(), 'client/build')))
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(process.cwd(), 'client/build/index.html'))
    });
}

const server_port = process.env.PORT || 3001;
app.listen(server_port, (err) => {
    if (err) {
        console.log(err)
    }
    console.log('APP lancé sur '+server_port)
    console.log('App started')
})