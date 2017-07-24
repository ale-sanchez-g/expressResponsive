Feature: Users are able to get passwords suggested

  # Currently there is a bug in the WEB APP so might need to change the URLS to us password API
  Scenario Outline: User is able to get a password suggested in "<language>"
    Given I visit "https://mysterious-forest-66057.herokuapp.com/"
    When I select a password in "<language>" through my navigation menu
    Then I will see a password with 3 words in "<language>"

    Examples:
    | language |
    | English  |
    | Spanish  |
    | German   |


  # Want to change this so that I can get this displayed on my app
  Scenario Outline: User is able to get a password suggested in "<language>"
    Given I visit "https://mysterious-forest-66057.herokuapp.com/"
    When I select a password in "<language>" through homepage
    Then I am redirected to my API with a password in "<language>"

    Examples:
      | language |
      | English  |
      | Spanish  |
      | German   |


  Scenario: User is able to request a customize password
    Given I visit "https://mysterious-forest-66057.herokuapp.com/password/any"
    When I submit a password request for
      | number of words | language | special characters |
      | 5               | german   | true               |
    Then I am redirected to my API with a password in german
    And with 5 number of words
    And with special characters
