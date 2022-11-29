// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
// You can assume that all values are integers. Do not mutate the input array/list.

const invert = (arr) => {
    return arr.map(num => num * -1)
}

console.log(invert([1,-2,3,-4,5]))