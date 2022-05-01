const transporter = require("./index");

function mailSender(to, subject, html, setter = null) {
    let from = 'odjas229help@gmail.com';
    if (setter != null) {
        from = setter
    }
    var mailOptions = { from, to, subject, html };

    return new Promise((resolve, reject) =>
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                reject(error)
            } else {
                resolve({ message: "Mail envoyé", info })
            }
        })
    )
}




module.exports = { mailSender } 