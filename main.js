function countPositivesSumNegatives(input) {
    let posCount = input.filter(x => x > 0).length
    let negSum = input.filter(x => x < 0).reduce((a, b) => a +  b)
    let answer = []
    answer.push(posCount)
    answer.push(negSum)

    return answer
}

let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
let testData1 = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];

console.log(countPositivesSumNegatives(testData))
console.log(countPositivesSumNegatives(testData1))

//Output
//[ 10, -65 ]
//[ 8, -50 ]
