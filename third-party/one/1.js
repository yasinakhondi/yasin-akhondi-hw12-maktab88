"use strict";
const nodemailer = require("nodemailer");

async function main() {

    let testAccount = await nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: testAccount.user, // generated ethereal user
            pass: testAccount.pass, // generated ethereal password
        },
    });
    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '<yasinakhondi9@gmail.com>', // sender address
        to: "yasinakhondi10@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello Yasinnnnn  ;)?</b>", // html body
    });
    console.log("Message sent:<yasinakhondi9@gmail.com>", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

main().catch(console.error);
