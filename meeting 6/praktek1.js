// praktek 1

let identity = ["Hektor", "15", "Bogor"]

console.log(identity)


// Praktek 2

let identity2 = ["Hektor", "15", "Bogor"]
identity2[0] = "alfatih"

console.log(identity2)

// praktek 3

let identity3 = ["Hektor", "15", "Bogor"]
identity3[0] = "alfatih"
identity3.splice(1, 1)

console.log(identity3)


// praktek 4

let array1 = [1, 2, 3]
let array2 = [4, 5, 6]

let array12 = array1.concat(array2)

console.log(array12)


// praktek 5

let identity4 = ["Hektor", "15", "Bogor"]
identity4[0] = "alfatih"
identity4.splice(1, 1)
console.log(identity4);


console.log(identity4.indexOf('Bogor'))

// praktek 6

function compareNumbers(a, b) {
    return a - b;
  }

let array3 =  [34, 7, 23, 32, 5]
array3.sort();
console.log(array3.sort(compareNumbers));

// praktek 7

let array4 =  [34, 7, 23, 32, 5]
console.log(array4.length);
