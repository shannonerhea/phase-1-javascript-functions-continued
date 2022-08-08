// code your solution here
/**LAB: Implement a function called saturdayFun. 
 * It should return a String like "This Saturday, 
 * I want to ....!" Fill in the ... with the activity 
 * that's passed in as the first parameter. If nothing 
 * is passed in, default to "roller-skate". Run learn 
 * test to verify you've gotten the first set of tests 
 * passing before continuing with the lesson. */
function saturdayFun (activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
};


//1) uses the default activity 'go to the office' when no arguments are passed
function mondayWork (activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
};

//when initialized with '*' creates a function that, when called, wraps an adjective in a highlight
/**describe("defines wrapAdjective function according to the specification", function() {
    it("function exists", function() {
      expect(wrapAdjective).to.exist
    })
    
    it("when initialized with '*' creates a function that, when called, wraps an adjective in a highlight", function() {
      let result = wrapAdjective('*')
      let emphatic = result("a hard worker")
      expect(emphatic).to.equal("You are *a hard worker*!")
    });

    it("when initialized with '||' creates a function that, when called, wraps an adjective in a highlight", function() {
      let result = wrapAdjective("||")
      let emphatic = result("a dedicated programmer")
      expect(emphatic).to.equal("You are ||a dedicated programmer||!")
    });
  })
}) */
function wrapAdjective (wrapper = "*") {
    const msg = "You are ";
    return function innerFunction (inner = "special") {
        return `${msg}${wrapper}${inner}${wrapper}!`
    };
};

