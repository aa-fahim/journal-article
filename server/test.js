const nodemailer = require('nodemailer');

const sendEmail = async (email, text) => {
  let transport = nodemailer.createTransport({
    service: 'Hotmail',
    auth: {
      user: 'fahim_toronto@hotmail.com',
      pass: 'Fahim1995',
    },
  });

  const message = {
    from: email, // Sender address
    to: 'fahim_toronto@hotmail.com', // List of recipients
    subject: 'Requested Journal Article', // Subject line
    text: text, // Plain text body
  };

  transport.sendMail(message, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
};

sendEmail('fahim_toronto@hotmail.com', 'Hello, this is a test.');
