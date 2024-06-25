const arr = [1, 2, 3, 4, 5];

// console.log(arr.length);

arr.push(6); // add element to the end

console.log(arr.toString());

arr.pop(); // remove element from the end

arr.shift(); // remove first element
arr.unshift(0); // add element to the beginning

/* ⭐ */

arr.slice(1, 3); // [2, 3]
console.log(arr);

arr.splice(1, 3); // [2, 3, 4]
console.log(arr); // splice mutates the original array
