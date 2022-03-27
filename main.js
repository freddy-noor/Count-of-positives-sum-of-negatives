function countPositivesSumNegatives(input) {
    let findPost = arr => arr > 0 ? true : false;
    let posCount = input.filter(findPost).length;
    let getNeg = arr => arr < 0 ? true : false;
    let negSum = input.filter(getNeg).reduce((total, value) => total + value);
    let answer = [];
    answer.push(posCount);
    answer.push(negSum);
    return answer;
}

let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
let testData1 = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];

console.log(countPositivesSumNegatives(testData))
console.log(countPositivesSumNegatives(testData1))

//Output
//[ 10, -65 ]
//[ 8, -50 ]
