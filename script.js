const square = Array.from(document.querySelectorAll(".square p"));
const input  = document.querySelector("input")



input.value = ''

square.forEach( (key) => key.addEventListener("click", function () {
if (key.textContent == "C") {
        return input.value = ''
    } else if (Number(key.textContent) === 1){
        return input.value += 1
    
    } else if (Number(key.textContent) === 1){
        return input.value += 1
    
    } else if (Number(key.textContent) === 2){
        return input.value += 2
    
    } else if (Number(key.textContent) === 3){
        return input.value += 3
    
    } else if (key.textContent === "/"){
        return input.value += "/"
    
    } else if (Number(key.textContent) === 4){
        return input.value += 4
    
    } else if (Number(key.textContent) === 5){
        return input.value += 5
    
    } else if (Number(key.textContent) === 6){
        return input.value += 6
    
    } else if (key.textContent === "*"){
        return input.value += "*"
    
    } else if (Number(key.textContent) === 7){
        return input.value += 7
    
    } else if (Number(key.textContent) === 8){
        return input.value += 8

    } else if (Number(key.textContent) === 9){
        return input.value += 9

    } else if (key.textContent === "-"){
        return input.value += "-" 

    } else if (Number(key.textContent) === 0){
        return input.value += 0
    
    } else if (key.textContent === "."){
        return input.value += "."
    
    } else if (key.textContent === "="){
        return input.value += "="

    } else if (key.textContent === "+"){
        return input.value += "+"
    }
}))



function sum(...numbers) {
    let summedNumbers = numbers.reduce( (total, current) => total +=current)
    return summedNumbers
}


function minus (...numbers) {
    let minusedNumbers = numbers.reduce( (total, current) => total -= current)
    return minusedNumbers
}

function multiply(...numbers) {
    let multiplied = numbers.reduce( (total, current) => total *= current)
    return multiplied
}
function divide(...numbers){
    let divided = numbers.reduce( (total, current) => total /= current)
    return divided
}

