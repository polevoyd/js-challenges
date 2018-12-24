// Pass functions as data 
const biggerThanFive = n => n > 5
[3,4,5,6,7].filter(biggerThanFive) // [6,7]

// Expressions instead of Statements

const getHello = hour => hour < 12 ? 'Morning!' : 'Afternoon!'
getHello(10) // 'Morning!'

// HOF
// Function that accepts another function as parameter, or
// returns another function

const mapConsecutive = (values, fn) => {
  const result = []
  for (let i=0; i < values.length-1; i++) {
    result.push(fn(values[i], values[i+1]))
  }
  return result
}

const letters = ['a','b','c','d','e','f','g']
const twoByTwo = mapConsecutive(letters, (x,y) => [x,y])
// [[a,b],[b,c],[c,d],[d,e],[e,f],[f,g]]

// Currying
// translating function with multiple arguments
// into a sequence of functions 

const convertUnits = (toUnit, factor, offset = 0) =>
  input => ((offset + input) * factor).toFixed(2).concat(toUnit)


const milesToKm = convertUnits(' km', 1.60936, 0)
const poundsToKg = convertUnits(' kg', 0.45460, 0)
const farenheitToCelsius = convertUnits('degrees C', 0.5556, -32)

milesToKm(10) // '16.09km'
poundsToKg(2.5) // '1.14kg'
farenheitToCelsius(98) // '36.67 degrees C'
const weightsInPounds = [5,15.4,9.8,110]

// without currying
const weightsInKg = weightsInPounds.map(x => convertUnits('kg', 0.45460, 0)(x))
// with currying
const weightsInKg = weightsInPounds.map(poundsToKg)
// 2.27kg, 7.00kg, 4.46kg, 50.01kg

// Pipeline
// allows for easy function composition when
// performing multiple operations on variable

const pipe = functions => params => {
  return functions.reduce((value, func) => func(value), data)
}

const cart = [3.12, 45.15, 11.01]
const addSalesTax = (total, taxRate) => (total * taxRate) * total

const tally = orders => pipe([
  x => x.reduce((total, val) => total + val), // sum the order
  x => addSalesTax(x, 0.09),
  x => `Order Total = ${x.toFixed(2)}` // convert to text
])(orders)
// Order Total = 64.62
