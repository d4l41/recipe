const arr = [23, 44];

let myFunc = (a) => {
  console.log(`too : ${a}`);
};

const arr2 = [...arr, 44, 1223];

myFunc(arr[1]);
