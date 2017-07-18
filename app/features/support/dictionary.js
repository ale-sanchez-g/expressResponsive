var fs = require('fs');
var spanish = require('./languages/palabras.json');
var english = require('./languages/words.json');
var german = require('./languages/worts.json');


function searchMyWords (word, languageDictionary) {
  var jsonList;

    switch (languageDictionary) {
        case 'English':
            jsonList = JSON.stringify(english);
            break;
        case "Spanish":
            jsonList = JSON.stringify(spanish);
            break;
        case "German":
            jsonList = JSON.stringify(german);
            break;
    }
    console.log('Validating word => ' + word);
    expect(jsonList.toLowerCase()).toContain(word.toLowerCase());
}

module.exports = {
    searchMyWords: searchMyWords
};
