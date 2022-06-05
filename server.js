const express = require("express")
const app = express();
const cors = require('cors')
const path = require("path")
var bodyParser = require('body-parser')

app.use(cors())
app.use(express.json())
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json())

// app.use('/', (req, res, next) => {
//     next()
// })
app.use("/Uploads", express.static(__dirname + "/Uploads"));
app.use('/user', require('./Routes/User'))
app.use('/auth', require('./Routes/Auth'))
app.use('/university', require('./Routes/University'))
app.use('/school_subject', require('./Routes/School_subject'))
app.use('/faculty', require('./Routes/Faculty'))
app.use('/course', require('./Routes/Course'))
app.use('/course-request', require('./Routes/Course-request.js'))

app.use('/test', require('./Routes/myTest.js'))


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