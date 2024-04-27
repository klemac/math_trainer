let checkedState = [true, false, false, true]
let rIndexes = [0, 1, 2, 3].filter((x, index) => (checkedState[index] === true))
console.log(rIndexes)