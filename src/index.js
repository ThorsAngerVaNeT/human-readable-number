const numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
    "twenty",
];
const decades = [
    "ten",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
];


function getWordsBelow100 (number){
    return (number <= 20 ? numbers[number] : (decades[Math.floor(number / 10)-1] + ((number % 10 === 0) ? '' : ' ' + numbers[number % 10])));
}

module.exports = function toReadable(number) {
    return number < 100 ? getWordsBelow100(number) : (numbers[Math.floor(number / 100)] + ' hundred' + ((number % 100 === 0) ? '' : ' ' + getWordsBelow100(number % 100)));
};
