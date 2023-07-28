let menu;
const todolist = [];

while (true) {
    menu = prompt("What would you like to do?");

    if (menu === 'quit') {
        console.log("You quit the app");
        break;
    }
    else if (menu === 'new') {
        let add = prompt("Enter new todo");
        todolist.push(add);
        console.log(`${add} added to list`);
    }
    else if (menu === 'list') {
        console.log('**********');
        for (let i = 0; i < todolist.length; i++) {
            console.log(`${i}: ${todolist[i]}`);
        }
        console.log('**********');
    }
    else if (menu === 'delete') {
        let del = prompt("Enter index of todo to delete");
        todolist.splice(del, 1);
        console.log("Todo removed");
    }

}