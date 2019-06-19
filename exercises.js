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

// console.log(tree._inOrder())
// console.log(tree._preOrder())
// console.log(tree._postOrder())

// 6. Commanding Officer

function main2() {
  let commanderTree = new BST(5, 'Captain Pickard')
  commanderTree.insert(3, 'Commander Riker')
  commanderTree.insert(6, 'Commander Data')
  commanderTree.insert(2, 'Lt. Cmdr. Worf')
  commanderTree.insert(4, 'Lt. Cmdr. LaForge')
  commanderTree.insert(8, 'Lt. Cmdr. Crusher')
  commanderTree.insert(1, 'Lieutenant security-officer')
  commanderTree.insert(7, 'Lieutenant Selar')
  return commanderTree
}

let cTree = main2()

// console.log(cTree)
// console.log(cTree.bfs())

// 7. Max Profit


function findMaxProfit(arr) {
  let profit = 0
  for (let i = 0; i < arr.length; i++) {
    if(arr[i+1] - arr[i] > profit) {
      profit = arr[i+1] - arr[i]
    }
  }
  return profit
}

console.log(findMaxProfit([128, 97, 121, 123, 98, 97, 105]))