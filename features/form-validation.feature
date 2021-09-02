Feature: Form Validation
  In order to apply for visa
  As a visitor John
  John wants to able to fill up the registration form
  
    Background: 
      Given John is at the embassy

       Scenario: Fill up registration form
    When he fill up his registration details
    | username | age | residency | accounts | nationality |
    | johnmark | 48  | resident  | Savings  | USA         |
    Then he is able to submit his form
