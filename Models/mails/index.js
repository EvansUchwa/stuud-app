const nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'odjas229help@gmail.com',
        pass: 'OdjaAnnonce229'
    }
});



module.exports = transporter 