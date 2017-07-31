var dictionary = require("../support/dictionary");

module.exports = function() {

    this.Given(/^I visit "([^"]*)"$/, function (uri) {
        browser.url(uri);
    });

    this.When(/^I select a password in "([^"]*)" through my navigation menu$/, function (lang) {
        browser.element("ul.nav").click("a*=" + lang);
    });

    this.Then(/^I will see a password with (\d+) words in "([^"]*)"$/, function (wordCount, lang) {
        browser.waitForVisible("#password", 5000);
        var password = browser.getText("#password").split('-');
        console.log(password);
        expect(password.length).toEqual(parseInt(wordCount) + 1);
        dictionary.searchMyWords(password[2], lang);
    });

    this.When(/^I select a password in "([^"]*)" through homepage$/, function (lang) {
        browser.click("#" + lang + "_password");
    });


    this.Then(/^I am redirected to my API with a password in "([^"]*)"$/, function (lang) {
        var tabIds = browser.getTabIds();
        console.log(tabIds[1]);
        browser.switchTab(tabIds[1]);
        console.log(browser.getText("body"));
        browser.switchTab(tabIds[1]).close();
    });


    this.When(/^I submit a password request for$/, function (table) {
        var data = table.hashes();
        browser.setValue("#num_of_word", data[0]['number of words']);
        browser.selectByVisibleText("#language", data[0]['language']);
        browser.selectByVisibleText("#special_char", data[0]['special characters']);
        browser.click("#submit");
    });


    this.Then(/^I can validate the password has special characters$/, function () {
        browser.waitForVisible("#password", 5000);
        var password = browser.getText("#password");
        expect(dictionary.containSpecialChar(password)).toBe(true);
    });

};