module.exports = {
  'Demo Automation 1': function (browser) {
    browser
      .url('https://www.google.com/')
      .waitForElementVisible('input[title="Search"]', 5000)
      .setValue('input[title="Search"]', 'flights')
      .click('input[value="Google Search"]')
      .waitForElementVisible('input[title="Search"]', 5000)
      .assert.elementCount('img[alt="Google"]', 1)
      .assert.elementPresent('input[value="flights"]')
      .assert.containsText('div[role="heading"]', 'Flight')
      .end()
  }
}
