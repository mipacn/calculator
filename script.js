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

let firstNumber
let operator
let lastNumber


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

console.log(operate(6, 2, "-"))


