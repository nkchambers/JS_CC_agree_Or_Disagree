//CODECADEMY JAVASCRIPT CODING CHALLENGES - agree_Or_Disagree challenge

// STARTING CODEBASE

// Task 1 - Write a function, agreeOrDisagree(), that takes in two strings, and returns 
// 'You agree!' if the two strings are the same and 'You disagree!' if the two strings are different.

// Write your function here:
const agreeOrDisagree = (string1, string2) => {
    if (string1 === string2) {
        return 'You agree!';
    } else {
        return 'You disagree!';
    }
};

// Testing agreeOrDisagree function
console.log(agreeOrDisagree('Yep', 'Yep'));
console.log(agreeOrDisagree('Nooope', 'Yessir'));





// Uncomment the line below when you're ready to try out your function
// console.log(agreeOrDisagree("yep", "yep")) 
// Should print 'You agree!'

// We encourage you to add more function call of your own to test your code!