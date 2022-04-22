let listOfNumbers = [10, 12, 23, 42]
function sumOfNumbers (listOfNumbers){
    let sum = 0
    for (let i = 0; i < listOfNumbers.length; i++) {
        sum = sum + listOfNumbers[i]
    }
    return sum
}
console.log('The sum of this array is ' + sumOfNumbers(listOfNumbers))