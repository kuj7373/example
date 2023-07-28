// let random = Math.random();
// if (random < 0.5) {
//     console.log("YOUR NUMBER IS LESS THAN 0.5!!!");
// }
// else {
//     console.log("YOUR NUMBER IS GREATER (OR EQUAL) THAN 0.5!!!");
// }
// console.log(random);

// const dayOfWeek = promt('ENTER A DAY').toLowerCase();

// if (dayOfWeek === 'monday') {
//     console.log("I HATE MONDAYS!!");
// }
// else if (dayOfWeek === 'saturday') {
//     console.log("I LOVE SATURDAYS!!");
// }
// else if (dayOfWeek === 'friday') {
//     console.log("FRIDAYS ARE DECENT, ESPECIALLY AFTER WORK!!");
// }
// else {
//     console.log("MEH");
// }


// const age = 3;

// if (age < 5) {
//     console.log("You are a baby. You get in for free!");
// }
// else if (age < 10) {
//     console.log("You are a child. You pay $10");
// }
// else if (age < 65) {
//     console.log("You are a child. You pay $20");
// }
// else {
//     console.log("You are a senior. You pay $10");
// }


const password = prompt("please enter a new password");

if (password.length >= 6) {
    if (password.indexOf(' ') === -1) {
        console.log("Valid Password!");
    }
    else {
        console.log("Password cannot contain spaces!");
    }
}
else {
    console.log("Password too short! Must be 6+ characters");
}


// const a = prompt("Enter a letter");

// switch (a) {
//     case 'me':
//         console.log("Print");
//         break;
//     case 'what':
//         console.log("what");
// }