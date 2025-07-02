let numberInput = document.getElementById("num-el")
let errorMessage = document.getElementById("error-message")

function showError() {
    errorMessage.style.display = "block"
}

function hideError() {
    errorMessage.style.display = "none"
}

function length() {
    const inputValue = parseFloat(numberInput.value)
    if (isNaN(inputValue) || numberInput.value.trim() === "") {
        showError()
        return
    }
    
    hideError()
    const feet = inputValue * 3.28084
    const meters = inputValue * 0.3048
    
    document.getElementById("length-el").textContent = 
        `${inputValue} meters = ${feet.toFixed(3)} feet | ${inputValue} feet = ${meters.toFixed(3)} meters`
}

function volume() {
    const inputValue = parseFloat(numberInput.value)
    if (isNaN(inputValue) || numberInput.value.trim() === "") {
        showError()
        return
    }
    
    hideError()
    const gallons = inputValue * 0.264172
    const liters = inputValue * 3.78541
    
    document.getElementById("volume-el").textContent = 
        `${inputValue} liters = ${gallons.toFixed(3)} gallons | ${inputValue} gallons = ${liters.toFixed(3)} liters`
}

function mass() {
    const inputValue = parseFloat(numberInput.value)
    if (isNaN(inputValue) || numberInput.value.trim() === "") {
        showError()
        return
    }
    
    hideError()
    const pounds = inputValue * 2.20462
    const kilograms = inputValue * 0.453592
    
    document.getElementById("mass-el").textContent = 
        `${inputValue} kilograms = ${pounds.toFixed(3)} pounds | ${inputValue} pounds = ${kilograms.toFixed(3)} kilograms`
}

