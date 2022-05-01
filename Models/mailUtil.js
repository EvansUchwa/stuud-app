const { mailSender } = require('./mails/query')

function setRegistrationMail(req,to, hashMailToken) {
    let mailConfirmationHtml = 'Bienvenue sur Stuud,votre mail de verification' +
        '<a href='+req.protocol +'://'+ req.get('host')+'/mail/confirmation/' + hashMailToken + '>Cliquez ici pour verifier le mail</a>'


    mailSender(to, 'Votre inscription', mailConfirmationHtml)
}

module.exports = { setRegistrationMail }