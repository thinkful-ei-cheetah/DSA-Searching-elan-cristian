const BST = require('./BST')

function createDewey(num) {
  const system = []

  for (let i = 0; i < num; i++) {
    system.push(i)
  }
  return system
}

function findBook(array, indexVal, start, end) {
  var start = start === undefined ? 0 : start;
  var end = end === undefined ? array.length : end;

  if (start > end) {
    return 'not found'
  }

  const middle = Math.floor((start + end)/2)
  const book = array[middle]

  if (book === indexVal) {
    return middle;
  }

  else if (book < indexVal) {
    return findBook(array, indexVal, middle + 1, end)
  }

  else if (book > indexVal) {
    return findBook(array, indexVal, start, middle - 1)
  }
}

// console.log(findBook(createDewey(999), 508));

function main() {
  const t = new BST(25);
  t.insert(15)
  t.insert(50)
  t.insert(10)
  t.insert(24)
  t.insert(35)
  t.insert(70)
  t.insert(4)
  t.insert(12)
  t.insert(18)
  t.insert(31)
  t.insert(44)
  t.insert(66)
  t.insert(90)
  t.insert(22)
  return t
}

let tree = main()

console.log(tree._inOrder())
console.log(tree._preOrder())
console.log(tree._postOrder())

