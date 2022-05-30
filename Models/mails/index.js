const nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
    pool: true,
    host: 'smtp.hostinger.com',
    port: "465",
    auth: {
        user: 'lequip@stuud.fr',
        pass: 'Stuud@2022'
    }
});



module.exports = transporter 
// ssh -p 65002 u736848414@51.178.134.91