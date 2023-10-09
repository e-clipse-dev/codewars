//1
const past = (h, m, s) => ((3600000*h) + (60000*m) + (1000*s))

//2
const opposite = (num) => -num

//3
const evenOrOdd = num => (num % 2 === 0) ? 'Even' : 'Odd'

//4
const doubleInteger = i => i*2

//5
const removeExclamationMarks = s => s.replaceAll('!', '')
