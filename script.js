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
        case "*":
            return multiply (a, b)
        case "/":
            return divide (a, b)
    }

}


let btn = document.querySelector("button")
let ac = document.querySelector(".ac")
let back = document.querySelector(".back")
let division = document.querySelector(".divide")
let addition = document.querySelector(".add")
let substraction = document.querySelector(".substract")
let multiplication = document.querySelector(".multiply")
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
let period = document.querySelector(".period")
let equal = document.querySelector(".equal")
let display = document.querySelector("p")


let firstNumber = ""
let operator = ""
let lastNumber = ""

function chema (){
    one.addEventListener("click", () => {
        firstNumber += "1"
        display.textContent += "1"
    })
    two.addEventListener("click", () => {
        firstNumber += "2"
        display.textContent += "2"
    })
    three.addEventListener("click", () => {
        display.textContent += "3"
        firstNumber += "3"
    })
    four.addEventListener("click", () => {
        display.textContent += "4"
        firstNumber += "4"
    })
    five.addEventListener("click", () => {
        display.textContent += "5"
        firstNumber += "5"
    })
    six.addEventListener("click", () => {
        display.textContent += "6"
        firstNumber += "6"
    })
    seven.addEventListener("click", () => {
        display.textContent += "7"
        firstNumber += "7"
    })
    eight.addEventListener("click", () => {
        display.textContent += "8"
        firstNumber += "8"
    })
    nine.addEventListener("click", () => {
        display.textContent += "9"
        firstNumber += "9"
    })
    zero.addEventListener("click", () => {
        display.textContent += "0"
        firstNumber += "0"
    })

    addition.addEventListener("click", () => {
        display.textContent += " + "
        operator += "+"
        one.addEventListener("click", () => {
            lastNumber += "1"
            firstNumber = firstNumber.slice(0, -1)
        })
        two.addEventListener("click", () => {
            lastNumber += "2"
            firstNumber = firstNumber.slice(0, -1)
        })
        three.addEventListener("click", () => {
            lastNumber += "3"
            firstNumber = firstNumber.slice(0, -1)
        })
        four.addEventListener("click", () => {
            lastNumber += "4"
            firstNumber = firstNumber.slice(0, -1)
        })
        five.addEventListener("click", () => {
            lastNumber += "5"
            firstNumber = firstNumber.slice(0, -1)
        })
        six.addEventListener("click", () => {
            lastNumber += "6"
            firstNumber = firstNumber.slice(0, -1)
        })
        seven.addEventListener("click", () => {
            lastNumber += "7"
            firstNumber = firstNumber.slice(0, -1)
        })
        eight.addEventListener("click", () => {
            lastNumber += "8"
            firstNumber = firstNumber.slice(0, -1)
        })
        nine.addEventListener("click", () => {
            lastNumber += "9"
            console.log(lastNumber)
        })
        zero.addEventListener("click", () => {
            lastNumber += "0"
            firstNumber = firstNumber.slice(0, -1)
            console.log()
        })
    })
}

equal.addEventListener("click", () => {
    display.textContent = operate(+firstNumber, +lastNumber, operator)

    }   
    )

chema()

