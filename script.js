const square = Array.from(document.querySelectorAll(".square p"));
const input  = document.querySelector("input")


input.value = ''

square.forEach( (key) => key.addEventListener("click", function () {
    console.log(key)
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
        return input.value += " / "
    
    } else if (Number(key.textContent) === 4){
        return input.value += 4
    
    } else if (Number(key.textContent) === 5){
        return input.value += 5
    
    } else if (Number(key.textContent) === 6){
        return input.value += 6
    
    } else if (key.textContent === "*"){
        return input.value += " * "
    
    } else if (Number(key.textContent) === 7){
        return input.value += 7
    
    } else if (Number(key.textContent) === 8){
        return input.value += 8

    } else if (Number(key.textContent) === 9){
        return input.value += 9

    } else if (key.textContent === "-"){
        return input.value += " - " 

    } else if (Number(key.textContent) === 0){
        return input.value += 0
    
    } else if (key.textContent === "."){
        return input.value += " . "
    
    } else if (key.textContent === "="){

            //Return output
        function operate(){
        let inputGiven = input.value 
        let inputGivenArray = []

        if(inputGiven.includes("+") ){

            inputGivenArray = inputGiven.split("+")
            inputGiven = sum(Number(inputGivenArray[0]), Number(inputGivenArray[1]))
                if (Number.isNaN(inputGiven)){
                    return alert("Oyy Baka!! Stop messing my app")
                } else {
                    input.value = inputGiven
                }

        } else if(inputGiven.includes("-") ){

            inputGivenArray = inputGiven.split("-")
            inputGiven = minus(inputGivenArray[0], inputGivenArray[1])
                if (Number.isNaN(inputGiven)){
                    return alert("Oyy Baka!! Stop messing my app")
                } else {
                    input.value = inputGiven
                }

        } else if(inputGiven.includes("*") ){

            inputGivenArray = inputGiven.split("*")
            inputGiven = multiply(inputGivenArray[0], inputGivenArray[1])
                if (Number.isNaN(inputGiven)){
                    return alert("Oyy Baka!! Stop messing my app")
                } else {
                    input.value = inputGiven
                }

        } else if(inputGiven.includes("/") ){

            inputGivenArray = inputGiven.split("/")
             inputGiven = divide(inputGivenArray[0], inputGivenArray[1])
                if (Number.isNaN(inputGiven)){
                    return alert("Oyy Baka!! Stop messing my app")
                } else {
                    return input.value = inputGiven
                }

        } else {
                return alert("oyyy Baka!! stopy messing my app")
            }
        }

        operate()
        

    } else if (key.textContent === "+"){
        return input.value += "+"
    }
}))



        function sum(number1, number2) {
            return Number(number1) + Number(number2)
        }

function minus (number1, number2) {
    return number1 - number2
}

function multiply(number1, number2) {
    return number1 * number2
}
function divide(number1, number2){
    return number1 / number2
}

