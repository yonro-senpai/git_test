function camelizer(str) {
    return str
    .split('-')
    .map( (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
    .join('')
}
console.log(camelizer("background-color"))
console.log(camelizer("list-style-image"))
console.log(camelizer("-webkit-transition"))