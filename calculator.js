// Function to append input to the display
function appendToDisplay(input) {
    let display = document.getElementById('display'); // Ensure the element exists
    if (display) {
        display.value += input;
    } else {
        console.error("Element with id 'display' not found.");
    }
}

// Function to clear the display
function clearDisplay() {
    let display = document.getElementById('display'); // Ensure the element exists
    if (display) {
        display.value = '';
    } else {
        console.error("Element with id 'display' not found.");
    }
}

// Function to calculate the value on the display
function calculateDisplay() {
    let display = document.getElementById('display'); // Ensure the element exists
    if (display) {
        try {
            display.value = eval(display.value); // Using eval to calculate the expression
        } catch (e) {
            console.error(e); // Log the error to the console
            display.value = 'Error'; // Display 'Error' on the screen
        }
    } else {
        console.error("Element with id 'display' not found.");
    }
}
function deleteLastValue() {
    let display = document.getElementById('display'); // Ensure the element exists
    if (display) {
        display.value = display.value.slice(0, -1);
    } else{
        console.error("Element with the id 'display' not found")
    }
}