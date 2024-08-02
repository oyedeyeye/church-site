const nodemailer = require('nodemailer');
const { validate } = require('deep-email-validator');
require('dotenv').config();

// const spamFilter = require('spam-filter');
const { EMAIL_ADDRESS, EMAIL_PASSWD } = process.env;

const contactForm = async (request, response) => {
  try {
    const { name, phone, email, message } = request.body;

    console.log(`
      name: ${name}
      phone: ${phone},
      email: ${email},
      message: ${message}
      `);

    // Validate the required fields
    if (!name || !phone || !email || !message) {
      return response.status(400).send({ error: 'All fields are required' });
    }

    // Validate user's email address
    const emailValidation = await validate(email);
    if (!emailValidation.valid) {
      return response.status(400).send({ 
        status: 'error',
        message: 'Invalid email address. Please try again!',
        reason: emailValidation.reason
      });
    }

    // Send email to the gmailAddress
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: EMAIL_ADDRESS,
        pass: EMAIL_PASSWD
      },
    });

    const emailOptions = {
      from: EMAIL_ADDRESS,
      to: EMAIL_ADDRESS,
      subject: `Contact Form Submission by ${name}`,
      text: `Message: ${message}\nSender Detail\nName: ${name}\nPhone No: ${phone}\nEmail: ${email}`
    };

    transporter.sendMail(emailOptions, (error, info) => {
      if (error) {
        return response.status(500).send({ message: 'Failed to send mail', error: error.message });
      }

      // Send Acknowledgement email to the user
      const acknowledgementMailOptions = {
        from: EMAIL_ADDRESS,
        to: email,
        subject: 'Acknowledgement: Contact Form Submission',
        text: `Dear ${name},\nThank you for reaching out to us!\nWe will reachout to you as soon as possible.\n\nBest Regards,\nSepcam Media Team`
      };

      transporter.sendMail(acknowledgementMailOptions, (ackError, ackInfo) => {
        if (ackError) {
          console.error(ackError);
        }
      });

      return response.send({ message: 'Email sent successfully' });
    });
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

module.exports = contactForm;
