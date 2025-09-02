function addOne(num) {
  return num + 1;
}
const arr = [1, 2, 3, 4, 5];
const mappedArr = arr.map(addOne);
console.log(mappedArr);

const arr2 = [1, 2, 3, 4, 5];
const mappedArr2 = arr2.map((num) => num + 1);
console.log(mappedArr2); 
