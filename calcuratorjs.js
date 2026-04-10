
// Get the input box element where numbers and results will be displayed
let input= document.getElementById('inputbox');

// Get all button elements from the document
let buttons=document.querySelectorAll('button');

let string="";  // Variable to store the entered expression (like "2+3*5")

let arr=Array.from(buttons); // Convert the NodeList of buttons into an array for easy iteration

// For each button, add a click event listener
arr.forEach(button =>{
     button.addEventListener('click', (e)=>{

            // If "=" button is clicked → evaluate the expression
    if(e.target.innerHTML == '='){
        string=eval(string);  // 'eval()' evaluates the string expression (e.g., "2+3" → 5)
        input.value= string;   // Display the result in the input box
    } 
    else if(e.target.innerHTML =='AC') // If "AC" (All Clear) button is clicked → reset everything

        {
        string="";     // Clear the stored expression
        input.value=string;   // Clear the display
    }
    else if(e.target.innerHTML =='DEL') // If "DEL" (Delete) button is clicked → remove last character

        {
        string=string.substring(0, string.length-1); // Remove the last character from the string
        input.value=string;    // Update the display
    }

    else
    string+=e.target.innerHTML;  // Add the clicked button's text to the expression
    input.value=string;   // Update display

  })

})