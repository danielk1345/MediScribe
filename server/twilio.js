import express from "express";
import sgMail from '@sendgrid/mail'
import dotenv from "dotenv"
dotenv.config();
const app = express()

app.get('/', (req,res)=>{
    // const sgMail = require('@sendgrid/mail')
    sgMail.setApiKey(process.env.TWILIO)
    console.log(process.env.REACT_APP_TWILIO)
    const msg = {
    to: 'leo233257@gmail.com', // Change to your recipient
    from: 'll2lau@uwaterloo.ca', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    }
    sgMail
    .send(msg)
    .then(() => {
        console.log('Email sent')
    })
    .catch((error) => {
        console.error(error)
    })
})

app.listen(8080)