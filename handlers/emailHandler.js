const nodemailer = require("nodemailer");


const sendNodeMailerEmail = async(emailData) => {

    let emailCredentials = process.env.EMAIL_CREDS
    emailCredentials = emailCredentials.split(',')
    let creds = {}
    emailCredentials.forEach(cred => {
        let vals = cred.split(':')
        creds[vals[0]] = vals[1]
    });
    emailCredentials = creds

  // create reusable transporter object using the default SMTP transport
    try{
        var transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: emailCredentials.user,
                pass: emailCredentials.pass
            }
        });

        let emailBody = (
            `
            EMAIL FROM: ${emailData.name}\n
            SUBJECT: ${emailData.subject}\n\n
            MESSAGE: ${emailData.message}
            `
        )

        let transporterData = {
            from: emailData.email,
            to: emailCredentials.to, // list of receivers
            subject: `Portfolio email from [${emailData.email}]-${emailData.name}`, // Subject line
            text: emailBody, // plain text body
        }

        // send mail with defined transport object
        let info = await transporter.sendMail(transporterData);

        return true
    }catch(e){
        console.log('ERROR SENDING EMAIL: ',emailData, e)
        return false
    }
}

module.exports = {
    sendNodeMailerEmail
}

