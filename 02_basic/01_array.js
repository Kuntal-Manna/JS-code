const myArr = [1, 2, 3, 4, 5]
const myHeros = ["thor", "loki"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array Methods

// myArr.push(6) add the data in last position of the array
// myArr.push(7)
// myArr.pop() delete the data from last position of the array

// myArr.unshift(5) add the data in first position of the array
// myArr.shift() delete the data from first position of the array

// console.log(myArr.includes(3)); 
// console.log(myArr.indexOf(3));

const newArr = myArr.join() 
// convert the array to string

// console.log(myArr);
// console.log(newArr);

// slice, splice

// console.log("A", myArr);
// const myN1 = myArr.slice(1, 4)
// console.log(myN1);
// console.log(myArr);

console.log("B", myArr);
const myN2 = myArr.splice(1, 3)
console.log(myN2);
console.log(myArr);



