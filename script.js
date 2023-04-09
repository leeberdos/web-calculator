function displayResult() {
    //figure out type of math
    let symbolsElement = document.getElementById('mathSymbols')

    //extract the type of math symbol
    let symbolSelected = symbolsElement.options[symbolsElement.selectedIndex].value

    //get the result element
    let getResultElement = document.getElementById("result")

    //get the selected mathSymbols result
    let mathResult = getResult(symbolSelected)

    //display the results
    getResultElement.textContent = mathResult

}

function getResult(mathSymbols) {
    switch (mathSymbols) {

        case "plus":
            return parseInt(numberOne.value) + parseInt(numberTwo.value)

        case "minus":
            return numberOne.value - numberTwo.value

        case "multiply":
            return numberOne.value * numberTwo.value
        
        case "divide":
            return numberOne.value / numberTwo.value

        default:
            return " "

    }

}