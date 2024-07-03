

const formElement = document.getElementById('form-biglietto')

//console.log(formElement)

const inputKmElement = document.getElementById('km')
const outputPriceElement = document.getElementById('price-output')
const inputAgeElement = document.getElementById('age')

console.log(inputKmElement , outputPriceElement , inputAgeElement)

formElement.addEventListener('submit', function (event) {

    event.preventDefault()
    console.log('submit', event)


const km = parseFloat(inputKmElement.value)//number
const age = parseFloat(inputAgeElement.value)//number
console.log(km , age)

const prezzoBase = km * 0.21
let prezzoFinale = ''
if (age<18) [
    prezzoFinale = prezzoBase * 0.20
]
else if (age>65) [
    prezzoFinale = prezzoBase * 0.40
]
else [
    prezzoFinale = prezzoBase
]
console.log(prezzoFinale)
outputPriceElement.innerHTML = prezzoFinale +'&#8364'
})