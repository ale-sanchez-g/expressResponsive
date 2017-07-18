Feature: Users are able to get passwords suggested

  Scenario Outline: User is able to get a password suggested in "<language>"
    Given I visit "https://mysterious-forest-66057.herokuapp.com/"
    When I select a password in "<language>" through my navigation menu
    Then I will see a password with 3 words in "<language>"

    Examples:
    | language |
    | English  |
    | Spanish  |
    | German   |
