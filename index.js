// code your solution here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}
console.log (saturdayFun('bathe my dog'));

const mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
}
console.log (mondayWork());

function wrapAdjective(wrapper = "*") {
    return function(adjective = "special") {
        return `You are ${wrapper}${adjective}${wrapper}!`;
    };
}

// Test cases
const result = wrapAdjective("*");  // Returns a function
console.log(result("amazing"));      // Output: "You are *amazing*!"
console.log(result());               // Output: "You are *special*!"

const result2 = wrapAdjective("||");
console.log(result2("a superstar")); // Output: "You are ||a superstar||!"

