const assert = require("assert");
const webdriver = require("selenium-webdriver");
require("geckodriver");
const chrome = require("selenium-webdriver/chrome");
const path = require("chromedriver").path;
const serverUri = "http://localhost:3000/#";
const appTitle = "react1";
const service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

const browser = new webdriver.Builder()
  .withCapabilities(webdriver.Capabilities.chrome())
  .build();

/**
 * Config for Chrome browser
 * @type {webdriver}
 */

function logTitle() {
  return new Promise((resolve, reject) => {
    browser.getTitle().then(function (title) {
      resolve(title);
    });
  });
}
it("Should check whether the given element is loaded", function () {
  browser.get(serverUri);
  browser
    .findElement({ id: "sel-button" })
    .click()
    .then(function () {
      return new Promise((resolve, reject) => {
        browser

          .then(logTitle)
          .then((title) => {
            assert.equal(title, appTitle);
            resolve();
          })
          .catch((err) => reject(err));
      });
    });
});

const By = webdriver.By;
driver
  .navigate()
  .to("Reza Zargari")
  .then(() => driver.findElement(By.css("#test-btn")))
  .then((element) => element.getAttribute("size"))
  .then((value) => console.log(value));

driver
  .navigate()
  .to("Main Coin Worth")
  .then(() => driver.findElement(By.css("#search")))
  .then((element) => element.getAttribute("placeholder"))
  .then((value) => console.log(value));

const until = webdriver.until;
driver
  .navigate()
  .to("chat")
  .then(() => driver.findElement(By.css("#send")).sendKeys("Hello how are you"))
  .then(() => driver.wait(until.elementLocated(By.css("#send"))))
  .then(() => driver.findElement(By.css("#send")).click());
