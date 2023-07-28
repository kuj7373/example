let start = parseInt(prompt("Welcome! Enter the max number:"));

while (!start) {
    start = parseInt(prompt("Enter a valid number!"));
}

const target = Math.floor(Math.random() * start) + 1;
console.log(target);

let attempts = 1;
let input = prompt("Enter your first guess: (Type 'q' to quit)");
while (!(parseInt(input) === target)) {
    if (input === 'q')
        break;
    input = parseInt(input);
    if (input > target) {
        input = prompt("Too High. Guess Again.");
        attempts++;
    }
    else if (input < target) {
        input = prompt("Too Low. Guess Again.");
        attempts++;
    }
    else {
        input = prompt("Invalid guess. Please enter a number or 'q' to quit.");
    }
}

if (input === 'q')
    console.log("OK, You quit!");
else
    console.log(`Congratulation! It took you ${attempts} guesses.`);