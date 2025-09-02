function sumOfTripledEvens(array) {
    return array
    .filter((num) => num % 2 === 0)
    .map((num) => num * 3)
    .reduce((actual, current) => actual + current)
}
const testArray = [1, 2, 3, 4, 5]
console.log(sumOfTripledEvens(testArray))