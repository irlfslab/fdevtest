/*Describe a test for sign up form */
describe("Test function Validate", function () {

   describe("Return true or false", function () {
      // Specs are defined by calling the global Jasmine function it
      //Scenario 1 - test function should exist 
      it("should exist", function () {
          /*
          - Expectations are built with the function expect which takes a value, called the actual. 
          - Below we checking if the function "validate" if defined or not
          */
          expect(validate).toBeDefined();
      }); // end first should

    //Scenario 1 - test name with 2 chars
    it("should return true when called validate('aa', 'name') with 2 chars", function () {
      var result = validate('aa','name')
      expect(result).toBe(true);
    });
    
    //Scenario 2 - test name with 20 chars
    it("should return true when called validate('abcdefghijklmnopqrst', 'name') with 20 chars", function () {
      var result = validate('abcdefghijklmnopqrst','name')
      expect(result).toBe(true);
    });
    
    //Scenario 3 - test name with 1 char
    it("should return false when called validate('a', 'name') with 1 char", function () {
      var result = validate('a','name')
      expect(result).toBe(false);
    });

    //Scenario 4 - test name with 21 chars
    it("should return false when called validate('abcdefghijklmnopqrstu', 'name') with 21 chars", function () {
      var result = validate('abcdefghijklmnopqrstu','name')
      expect(result).toBe(false);
    });
    
    //Scenario 5 - test name with number
    it("should return false when called validate('1', 'name') with number", function () {
      var result = validate('1','name')
      expect(result).toBe(false);
    });

    //Scenario 6 - test regular email with domain
    it("should return true when called validate('aa@gmail.com', 'email')", function () {
      var result = validate('aa@gmail.com','email')
      expect(result).toBe(true);
    });

    //Scenario 7 - test email without domain
    it("should return false when called validate('aa', 'email') without domain", function () {
      var result = validate('aa','email')
      expect(result).toBe(false);
    });

    //Scenario 8 - test email with @ only
    it("should return false when called validate('@', 'email')", function () {
      var result = validate('@','email')
      expect(result).toBe(false);
    });

    //Scenario 9 - test email with aa@
    it("should return false when called validate('aa@', 'email')", function () {
      var result = validate('aa@','email')
      expect(result).toBe(false);
    });

    //Scenario 10 - test email without dot
    it("should return false when called validate('aa@gmail', 'email')", function () {
      var result = validate('aa@gmail','email')
      expect(result).toBe(false);
    });

    //Scenario 11 - test phone with (222)222-2222
    it("should return true when called validate('(123)456-7890', 'phone')", function () {
      var result = validate('(123)456-7890', 'phone')
      expect(result).toBe(true);
    });
    
    //Scenario 12 - test phone with 222-222-2222
    it("should return true when called validate('123-456-7890', 'phone')", function () {
      var result = validate('123-456-7890', 'phone')
      expect(result).toBe(true);
    });

    //Scenario 13 - test phone with 10 digit 
    it("should return true when called validate('1234567890', 'phone') with 10 digit", function () {
      var result = validate('1234567890', 'phone')
      expect(result).toBe(true);
    });

    //Scenario 14 - test phone with 9 digit
    it("should return false when called validate('123456789', 'phone') with 9 digit", function () {
      var result = validate('123456789', 'phone')
      expect(result).toBe(false);
    });
    
    //Scenario 15 - test phone with char
    it("should return false when called validate('aa', 'phone') with char", function () {
      var result = validate('aa', 'phone')
      expect(result).toBe(false);
    });   
  });
}); // end for testing 
