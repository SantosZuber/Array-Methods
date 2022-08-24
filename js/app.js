// Arrays
const array = [];
const emojis = ["🍩", "🍪", "🎂", "🍰", "🧁", "🍕", "🍔", "🍟", "🌭", "🍿"];
//Booleans
let isFull = false;
let isEmpty = true;
//DOM elements
const pushBtn = document.getElementById("push");
const unshiftBtn = document.getElementById("unshift");
const spliceABtn = document.getElementById("spliceA");

const popBtn = document.getElementById("pop");
const shiftBtn = document.getElementById("shift");
const spliceRBtn = document.getElementById("spliceR");

const paragraph = document.getElementById("array__text");
const warning = document.getElementById("warning");

document.getElementById("number__input-add").setAttribute("max", array.length);
document.getElementById("number__input-remove").setAttribute("max", array.length);

// Add
pushBtn.onclick = function () {
    if (!isFull) {
        isEmpty = false;
        array.push(getRandomEmoji())
        updateArray();
    }
    else {
        updateArray();
    }
}

unshiftBtn.onclick = function () {
    if (!isFull) {
        isEmpty = false;
        array.unshift(getRandomEmoji())
        updateArray();
    }
    else {
        updateArray();
    }
}

spliceABtn.onclick = function () {
    if (!isFull) {
        isEmpty = false;
        let spliceA_number = document.getElementById("number__input-add").value;
        array.splice(spliceA_number, 0, getRandomEmoji());
        updateArray();
    }
    else {
        updateArray();
    }
}


// Remove
popBtn.onclick = function () {
    if (!isEmpty) {
        isFull = false;
        array.pop()
        updateArray();
    }
    else {
        updateArray();
    }
}
shiftBtn.onclick = function () {
    if (!isEmpty) {
        isFull = false;
        array.shift()
        updateArray();
    }
    else {
        updateArray();
    }
}
spliceRBtn.onclick = function () {
    if (!isEmpty) {
        let spliceR_number = document.getElementById("number__input-remove").value;
        isFull = false;
        array.splice(spliceR_number, 1)
        updateArray();
    }
    else {
        updateArray();
    }
}



function updateArray() {
    warning.innerHTML = "";
    document.getElementById("number__input-add").setAttribute("max", array.length);
    document.getElementById("number__input-remove").setAttribute("max", array.length);
    paragraph.innerHTML = `[${array}]`;
    if (array.length == 33) {
        isFull = true;
        warning.innerHTML = "Array is full, remove some items";
    }
    if (array.length == 0) {
        isEmpty = true;
        warning.innerHTML = "Array is empty, add some items";
    }
}

function getRandomEmoji() {
    let randomNum = Math.floor(Math.random() * (10 - 1)) + 1;
    return emojis[randomNum];
}