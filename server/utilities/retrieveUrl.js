const { Builder, By, Key, until } = require("selenium-webdriver");
const webdriver = require("selenium-webdriver");

exports.retrieveUrl = async (value) => {
  const chromeCapabilities = webdriver.Capabilities.chrome();
  //setting chrome options to start the browser fully maximized
  const chromeOptions = {
    args: [
      "--ignore-certificate-errors",
      "--ignore-ssl-errors",
      "--ignore-certificate-errors-spki-list",
    ],
    excludeSwitches: ["enable-logging"],
  };
  chromeCapabilities.set("chromeOptions", chromeOptions);

  let driver = await new Builder().withCapabilities(chromeCapabilities).build();
  await driver.get("https://sci-hub.st/");
  const inputField = await driver.findElement(By.name("request"));
  await inputField.sendKeys(value, Key.RETURN);

  await driver.wait(until.elementLocated(By.id("buttons")), 10000);
  let retrievedUrl;
  retrievedUrl = await driver.getCurrentUrl();
  await driver.quit();

  return retrievedUrl;
};
