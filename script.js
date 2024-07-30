// Test
console.log("Js is connected !")

//  Challenge:
// 1. How can i have access to the input values? ✅
// 2. How can i collect the input value ? ✅
// 3. How to display them inside the table body dynamically? ✅
// Everytime the submit button is clicked? ✅
// 4. Where in the DOM do we display them? And How ? ✅
// 5. How to use the 'delete' button to delete each row (tr)? ✅
// 6. How to dynamically change the "total monthly"? ✅
//  How to target each 'annualSalry' cell of the table? ✅
//  And displaying the calculated "total monthly" value? ✅
//  Also, to change the color of the value if it exceeds certain amount? ✅


// SOLUTIONS

    // Create the 'submitHandler' function
function submitHandler(event){
    event.preventDefault();  //Prevent form submission

    const firstName = document.querySelector('#first-NameInput').value;
console.log(firstName);

const lastName = document.querySelector('#last-NameInput').value;
const employeeId = document.querySelector('#iD-Input').value;
const employeeTitle = document.querySelector('#title-Input').value;
const annualSalary = document.querySelector('#annualSalary').value;

if (!firstName || !lastName || !employeeId || !employeeTitle || !annualSalary) {
    alert('Please fill all input fields');
    return;  // This stops the function if any field is empty
}

    // Access where to display the employees info:
    const employeesDisplay = document.querySelector('#employeeDisplay');
    // console.log(employeesDisplay);

    // Create 'newRow' which is new 'tr'
    let newRow = document.createElement('tr');
    newRow.innerHTML += `
          <td>${firstName}</td>
          <td>${lastName}</td>
          <td>${employeeId}</td>
          <td>${employeeTitle}</td>
          <td>$${annualSalary}</td>
          <td><button class="delete-btn" >Delete</button></td>
    
    
    `
    // We have to append "newRow" to "employeeDisplay" section of the DOM
    employeesDisplay.append(newRow);


    // Add event listener to the new delete button
    // Learned: I can query parentElement not only "document"
    const newDeleteBtn = newRow.querySelector('.delete-btn');
    newDeleteBtn.addEventListener('click', function() {
        newRow.remove();
        updateTotalMonthly();  // To update monthly amount 
    });

    // // In case of empty field submission
    // if(firstName || lastName || employeeId || employeeId || annualSalary === ''){
    //     alert('Fill the input fields');
    //     newRow.innerHTML = '';
    // } 
    // else if (!firstName || !lastName || !employeeId || !employeeId || !annualSalary === ''){
    //    submitHandler();
    // }
// Reset input fields
document.querySelector('#first-NameInput').value = '';
document.querySelector('#last-NameInput').value = '';
document.querySelector('#iD-Input').value = '';
document.querySelector('#title-Input').value = '';
document.querySelector('#annualSalary').value = '';

// It updates the monthly total
updateTotalMonthly()

   

}

        // Access the 'submit btn"
    const submitBtn = document.querySelector('.submit-btn')
    console.log(submitBtn);
    

   // Add eventListener to the "submit button"
   // Call for the "submitHandler" function as a callback
    //  Whenever the button event is triggered

    submitBtn.addEventListener('click', submitHandler);

    // addEventListener to the 'hardcode' delete button:
    const deleteBtn = document.querySelector('.delete-btn');
    deleteBtn.addEventListener('click',
    function deleteHandler(e){
        button = e.target;
        console.log(button);
        deletedRow = button.parentElement.parentElement;
        console.log(deletedRow);
        deletedRow.remove();
        updateTotalMonthly();  // To update monthly amount 
    })
    
    // Create "UpdateTotalMonthly" function

    function updateTotalMonthly() {
        // Step 1: Get all salary cells from the table
        const salaryCells = document.querySelectorAll('#employeeDisplay tr td:nth-child(5)');
        
        // Step 2: Convert salary cells to an array and extract salary values
        const salaries = [];
        for (let cell of salaryCells) {
            // Remove '$' and ',' from the salary text
            let salaryText = cell.textContent.replace('$', '').replace(',', '');
            // Convert the text to a number
            let salary = Number(salaryText);
            // Add the salary to our array
            salaries.push(salary);
        }
    
        // Step 3: Calculate the total annual salary
        let totalAnnual = 0;
        for (let salary of salaries) {
            totalAnnual += salary;
        }
    
        // Step 4: Calculate the total monthly salary
        const totalMonthly = totalAnnual / 12;
    
        // Step 5: Update the footer text with the new total
        const footerP = document.querySelector('footer p');
        // toFixed(2) rounds the number to 2 decimal places
        footerP.textContent = `Total Monthly: $${totalMonthly.toFixed(2)}`;
    
        // Step 6: Change the color based on the total
        if (totalMonthly > 20000) {
            footerP.classList.add('over-budget')
        } else {
            footerP.classList.remove('over-budget')
        }
    }
    
    

