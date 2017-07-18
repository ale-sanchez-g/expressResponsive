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


};