function add (a, b){
    return a + b
}

function substract (a, b){
    return a - b
}

function multiply (a, b){
    return a * b
}

function divide (a, b){
    return a / b
}


function operate (a, b, sign){
    switch (sign){
        case "+":
            return (add (a, b))
        case "-":
            return substract (a, b)
        case "x":
            return multiply (a, b)
        case "÷":
            return divide (a, b)
    }

}

let multiplication = document.querySelector("#multiply")
let substraction = document.querySelector("#substract")
let addition = document.querySelector("#add")
let division = document.querySelector("#divide")
let change = document.querySelector(".change")
let clear = document.querySelector(".clear")
let perc = document.querySelector(".perc")
let one = document.querySelector(".one")
let two = document.querySelector(".two")
let three = document.querySelector(".three")
let four = document.querySelector(".four")
let five = document.querySelector(".five")
let six = document.querySelector(".six")
let seven = document.querySelector(".seven")
let eight = document.querySelector(".eight")
let nine = document.querySelector(".nine")
let zero = document.querySelector(".zero")
let equal = document.querySelector("#equal")
let period = document.querySelector(".period")
let display = document.querySelector("p")


let firstNumber = ""
let operator = ""
let lastNumber = ""


one.addEventListener("click", () => {
    if (operator == "") firstNumber += "1"
    else {lastNumber += "1"}
    display.textContent += "1"
})
two.addEventListener("click", () => {
    if (operator == "") firstNumber += "2"
    else {lastNumber += "2"}
    display.textContent += "2"
})
three.addEventListener("click", () => {
    if (operator == "") firstNumber += "3"
    else {lastNumber += "3"}
    display.textContent += "3"
})
four.addEventListener("click", () => {
    if (operator == "") firstNumber += "4"
    else {lastNumber += "4"}
    display.textContent += "4"
})
five.addEventListener("click", () => {
    if (operator == "") firstNumber += "5"
    else {lastNumber += "5"}
    display.textContent += "5"
})
six.addEventListener("click", () => {
    if (operator == "") firstNumber += "6"
    else {lastNumber += "6"}
    display.textContent += "6"
})
seven.addEventListener("click", () => {
    if (operator == "") firstNumber += "7"
    else {lastNumber += "7"}
    display.textContent += "7"
})
eight.addEventListener("click", () => {
    if (operator == "") firstNumber += "8"
    else {lastNumber += "8"}
    display.textContent += "8"
})
nine.addEventListener("click", () => {
    if (operator == "") firstNumber += "9"
    else {lastNumber += "9"}
    display.textContent += "9"
})
zero.addEventListener("click", () => {
    if (operator == "") firstNumber += "0"
    else {lastNumber += "0"}
    display.textContent += "0"
})

addition.addEventListener("click", () => {
    operator = "+"
    display.textContent = firstNumber + " + "
})
substraction.addEventListener("click", () => {
    operator = "-"
    display.textContent = firstNumber + " - "
})
multiplication.addEventListener("click", () => {
    operator = "x"
    display.textContent = firstNumber + " x "
})
division.addEventListener("click", () => {
    operator = "÷"
    display.textContent = firstNumber + " ÷ "
})

clear.addEventListener("click", () => {
    firstNumber = ""
    lastNumber = ""
    operator = ""
    display.textContent = ""
})


change.addEventListener("click", () => {
    if (operator == ""){
        if (firstNumber.charAt(0) == "-"){
            firstNumber = firstNumber.slice(1)
            display.textContent = firstNumber
        }
        else{
            firstNumber = "-"+firstNumber
            display.textContent = "-"+display.textContent
        }
    }
    else{
        if (lastNumber.charAt(0) == "-"){
            lastNumber = lastNumber.slice(1)
            display.textContent = firstNumber + " " + operator + " " + (lastNumber)
        }
        else{
            lastNumber = "-"+lastNumber
            display.textContent = firstNumber + " " + operator + " " + (lastNumber)
        }
    }
    
})

perc.addEventListener("click", () => {
    if (operator == ""){
        firstNumber = +firstNumber/100
        display.textContent = firstNumber
    }
    else{
        lastNumber = +lastNumber/100
        display.textContent = firstNumber + " " + operator + " " + (lastNumber)
    }
})

period.addEventListener("click", () => {
    if (operator == ""){
        firstNumber += "."
        display.textContent = firstNumber
    }
    else{
        lastNumber += "."
        display.textContent =  firstNumber + " " + operator + " " + lastNumber
    }
})


equal.addEventListener("click", () => {
    let result
    if (operator == "") result = firstNumber
    else {
        result = operate(+firstNumber, +lastNumber, operator)
    }
    display.textContent = result
    firstNumber = result.toString()
    lastNumber = ""
    operator = ""
    })

