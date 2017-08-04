@smoke
Feature: I want to smoke test my app
  Ensure you create docker image and run
  with the below command
  $ docker run -p 8080:8080 <IMAGE_ID> -d

  Scenario: User is able to request a password with special characters
    Given I visit "https://mysterious-forest-66057.herokuapp.com/password/any"
    When I submit a password request for
      | number of words | language | special characters |
      | 5               | german   | true               |
    Then I can validate the password has special characters
