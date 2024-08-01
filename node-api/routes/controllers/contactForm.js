const nodemailer = require('nodemailer');
const emailValidator = require('email-validator');
require('dotenv').config();
// const spamFilter = require('spam-filter');
const { EMAIL_ADDRESS, EMAIL_PASSWD } = process.env;

const contactForm = async (request, response) => {
  try {
    const { name, phone, email, message } = request.query;

    // Validate the required fields
    if (!name || !phone || !email || !message) {
      return response.status(400).send({
        error: 'All fields are required',
      });
    }

    // Validate user's email address
    if (!emailValidator.validate(email)) {
      return response.status(400).send({
        error: 'Invalid email address'
      });
    }

    // Filter out spam requests
    // if (spamFilter.isSpam(request.body)) {
      // return response.status(400).send({
        // error: 'Spam detected'
      // });
    // }

    // Send email to the gmailAddress
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      // host: gt.EMAIL_HOST,
      // port: gt.EMAIL_PORT,
      // secure: true, // or 'STARTTLS'
      auth: {
        user: EMAIL_ADDRESS,
        pass: EMAIL_PASSWD
      },
    });

    const emailOptions = {
      from: EMAIL_ADDRESS,
      to: EMAIL_ADDRESS,
      subject: `Contact Form Submission by ${name}`,
      text: `Message: ${message}

      Sender Detail
      Name: ${name}
      Phone No: ${phone}
      Email: ${email}`
    };

    transporter.sendMail(emailOptions, (error, info) => {
      if (error) {
        return response.status(500).send({
          message: 'Failed to send mail',
          error: error.message,
        });
      }

    // Send Acknowledgement email to the user
    const acknowledgementMailOptions = {
      from: EMAIL_ADDRESS,
      to: email,
      subject: 'Acknowledgement: Contact Form Submission',
      text: `Dear ${name},

      Thank you for reaching out to us!
      We will reachout to you as soon as possible.
      
      Best Regards,
      Sepcam Media Team`
    };

    transporter.sendMail(acknowledgementMailOptions, (ackError, ackInfo) =>{
      if (ackError) {
        console.error(ackError);
      }
    });

    return response.send({ message: 'Email sent successfully' });
  });

  } catch (error) {
    response.status(500).json({
      error: error.message
    });
  }
};

module.exports = contactForm;
