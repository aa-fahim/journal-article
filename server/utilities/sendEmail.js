const nodemailer = require("nodemailer");

exports.sendEmail = async (email, url) => {
  let transport = nodemailer.createTransport({
    service: "Hotmail",
    auth: {
      user: "fahim_toronto@hotmail.com",
      pass: "Fahim1995",
    },
  });

  const message = {
    from: email, // Sender address
    to: "fahim_toronto@hotmail.com", // List of recipients
    subject: "Requested Journal Article", // Subject line
    text: `Hello there! This is your requested journal article. 
  Follow the link to access the article: ${url}`, // Plain text body
  };

  transport.sendMail(message, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
};
