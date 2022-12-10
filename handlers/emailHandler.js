const nodemailer = require("nodemailer");


const sendNodeMailerEmail = async(emailData) => {

  // create reusable transporter object using the default SMTP transport
    try{
        var transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'devinborchard@gmail.com',
                pass: 'npmaphihcpdocnca'
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
            from: `devinborchard@gmail.com`, // sender address
            to: "devinborchard@gmail.com", // list of receivers
            subject: `Portfolio email from [${emailData.email}]-${emailData.name}`, // Subject line
            text: emailBody, // plain text body
        }
        console.log('TRANSPORTER DATA:', transporterData)

        // send mail with defined transport object
        let info = await transporter.sendMail(transporterData);
        console.log('INFO: ', info)

        return true
    }catch(e){
        console.log('ERROR SENDING EMAIL: ',emailData, e)
        return false
    }
}

module.exports = {
    sendNodeMailerEmail
}

