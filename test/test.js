const assert = require('assert')
const webdriver = require('selenium-webdriver')
require('geckodriver')
const chrome = require('selenium-webdriver/chrome')
const path = require('chromedriver').path
const serverUri = 'http://localhost:3000/#'
const appTitle = 'react1'
const service = new chrome.ServiceBuilder(path).build()
chrome.setDefaultService(service)

const browser = new webdriver.Builder()
  .withCapabilities(webdriver.Capabilities.chrome())
  .build()

/**
 * Config for Chrome browser
 * @type {webdriver}
 */

function logTitle () {
  return new Promise((resolve, reject) => {
    browser.getTitle().then(function (title) {
      resolve(title)
    })
  })
}
it('Should check whether the given element is loaded', function () {
  browser.get(serverUri)
  browser
    .findElement({ id: 'sel-button' })
    .click()
    .then(function () {
      return new Promise((resolve, reject) => {
        browser

          .then(logTitle)
          .then((title) => {
            assert.equal(title, appTitle)
            resolve()
          })
          .catch((err) => reject(err))
      })
    })
})
