let start = parseInt(prompt("Welcome! Enter the max number:"));

while (!start) {
    start = parseInt(prompt("Enter a valid number!"));
}

const target = Math.floor(Math.random() * start) + 1;
console.log(target);

let attempts = 1;
let input = parseInt(prompt("Enter your first guess:"));
while (!(parseInt(input) === target)) {
    if (input === 'q')
        break;
    if (input > target) {
        input = prompt("Too High. Guess Again.");
    }
    else {
        input = prompt("Too Low. Guess Again.");
    }
    attempts++;
}

if (input === 'q')
    console.log("OK, You quit!");
else
    console.log(`Congratulation! It took you ${attempts} guesses.`);