module.exports = function() {

    this.Given(/^I visit "([^"]*)"$/, function (uri) {
        browser.url(uri);
    });

    this.When(/^I select a password in "([^"]*)" through my navigation menu$/, function (lang) {
        browser.element("ul.nav").click("a*=" + lang);
    });

    this.Then(/^I will see a password with (\d+) words in "([^"]*)"$/, function (wordCount, lang) {
        var password = browser.getText("div.panel-body").split("-");
        expect(password.length).toEqual(parseInt(wordCount) + 2);
        console.log(password);
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
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
    });


    this.Then(/^with (\d+) number of words$/, function (arg1) {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
    });

    this.Then(/^with special characters$/, function () {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
    });

    this.Then(/^I am redirected to my API with a password in german$/, function () {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
    });

};