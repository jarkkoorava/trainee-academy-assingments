const objectArray = [
    { x: 14, y: 21, type: "tree", toDelete: false },
    { x: 1, y: 30, type: "house", toDelete: false },
    { x: 22, y: 10, type: "tree", toDelete: true },
    { x: 5, y: 34, type: "rock", toDelete: true },
    null,
    { x: 19, y: 40, type: "tree", toDelete: false },
    { x: 35, y: 35, type: "house", toDelete: false },
    { x: 19, y: 40, type: "tree", toDelete: true },
    { x: 24, y: 31, type: "rock", toDelete: false }
];

const objectArrayCopy = [...objectArray];

for (let i = 0; i < objectArray.length; i++) {
    if (objectArray[i] !== null && objectArray[i].toDelete) {
        objectArray[i] = null;
    }
}

const cleaned = objectArrayCopy.map((element) => {
    if (element === null || !element.toDelete) {
        return element;
    }

    return null;
});

console.log(objectArray);
console.log(cleaned);
