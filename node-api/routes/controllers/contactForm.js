const nodemailer = require('nodemailer');
const emailValidator = require('email-validator');
// const spamFilter = require('spam-filter');
const gt = process.env;

const contactForm = async (request, response) => {
  try {
    const { name, phone, email, message } = request.body;
    const gmailAddress = gt.EMAIL_ADDRESS
    
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
      host: gt.EMAIL_HOST,
      port: gt.EMAIL_PORT,
      secure: true, // or 'STARTTLS'
      auth: {
        user: gmailAddress,
        pass: gt.EMAIL_PASSWD
      },
    });

  const emailOptions = {
    from: email,
    to: gmailAddress,
    subject: `Contact Form Submission by ${name}`,
    text: `Message: ${message} <br>
    <u>Sender Detail</u>
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
      from: gmailAddress,
      to: email,
      subject: 'Acknowledgement: Contact Form Submission',
      text: `Dear ${name},
      Thank you for reaching out to us!
      We will reachout to you as soon as possible.
      
      Best Regards,
      <b><i>Sepcam Media Team</i></b>`
    };

    transporter.sendMail(acknowledgementMailOptions, (error, info) =>{
      if (error) {
        console.error(error);
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
