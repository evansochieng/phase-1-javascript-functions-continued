// code your solution here

// Function declaration with a default argument
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

// Hoisting
// Calling a function before declaration. Works with declaration only
// Note: Function expressions are not hoisted

// Defining a function using function expression
const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

// IIFE - Immediately-Invoked Function Expression
// Scope chain - Children functions access parents' scope variables

function wrapAdjective(flair = '*'){
    return function(description = 'special'){
        return `You are ${flair}${description}${flair}!`;
    };
};