var fs = require('fs');
var spanish = require('./languages/palabras.json');
var english = require('./languages/words.json');
var german = require('./languages/worts.json');


function searchMyWords (word, languageDictionary) {
  var jsonList;

    switch (languageDictionary.toLowerCase()) {
        case 'english':
            jsonList = JSON.stringify(english);
            break;
        case "spanish":
            jsonList = JSON.stringify(spanish);
            break;
        case "german":
            jsonList = JSON.stringify(german);
            break;
    }
    console.log('Validating word => ' + word);
    expect(jsonList.toLowerCase()).toContain(word.toLowerCase());
}

function containSpecialChar (string) {
    return /[~`!#$%\^&*+=[\]\\';,/{}|\\":<>\?]/g.test(string);
}

module.exports = {
    searchMyWords: searchMyWords,
    containSpecialChar: containSpecialChar
};
