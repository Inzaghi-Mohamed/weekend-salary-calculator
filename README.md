# Salary Calculator


## Description
I created a simple salary Calculator
## Features
 1. Added submit button -To collect the employee's data to be displayed.
 2. Added a delete button to each employee's info.
3. Added an alert functionality to let the employeer know if he exceeds the monthly budget.

## Challenges:

 1. How can i have access to the input values? ✅
 2. How can i collect the input value ? ✅
 3. How to display them inside the table body dynamically? ✅
 Everytime the submit button is clicked? ✅
 4. Where in the DOM do we display them? And How ? ✅
 5. How to use the 'delete' button to delete each row (tr)? ✅
 6. How to dynamically change the "total monthly"? ✅
  How to target each 'annualSalry' cell of the table? ✅
  And displaying the calculated "total monthly" value? ✅
  Also, to change the color of the value if it exceeds certain amount? ✅

  ## SOLUTIONS:
  ## Each solution correspond to each Challenge above 👆🏾
  1. Using document.querySelector method
  2. By adding .value
  3. By using the append method
  4. Using document.querySelector method to target that particular element in the DOM
  5. Added an eventListener to the delete button inside the "submitHandler" function. However, the hardcode ones, i created a different function to handle the click.
  6. Use the classList.add() method to add style. In this case, added CSS class "over-budget' to turn the 
  textContent of paragraph inside the footer red when the totalMonthly budget exceeds $20,000.
  7. Additionally, I targeted each cell of annualSalary using nth Child method. This facilitated my access to the 5th cell of the table. Also, removed the $ and , when adding the salaries using .replace method.



Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
