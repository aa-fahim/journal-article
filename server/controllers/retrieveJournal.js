const urlUtility = require("../utilities/retrieveUrl.js");
const emailUtility = require("../utilities/sendEmail");

const testUrl =
  "https://onlinelibrary.wiley.com/doi/abs/10.1002/car.2514?fbclid=IwAR2bxGmaKP8xbe9Ad8_jo8FykPbFoUlHYM2N3jyrUlmBw_tO5T69ccYpXBI";

exports.retrieveJournal = async (req, res) => {
  if (!req.body.doi) {
    res.status(400).send({ message: "No DOI provided" });
    return;
  } else if (!req.body.email) {
    res.status(400).send({ message: "No email provided" });
    return;
  }

  console.log(`The DOI is ${req.body.doi}`);
  const url = await urlUtility.retrieveUrl(testUrl);
  await emailUtility.sendEmail(req.body.email, url);
  res.status(200).send({
    message: `Email successfully sent`,
  });
};
