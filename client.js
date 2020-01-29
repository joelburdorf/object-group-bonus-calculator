const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log(employees);




// Loop over the employees array and do the following:

// use each employee object as the input to the function described below.
// console.log the results of each iteration.
// Function Logic


// The name property should contain the employee's name.
// The bonusPercentage property should contain the bonus percentage the employee is to receive. See section below for calculation instructions.
// The totalCompensation property should be the adjusted annual compensation (base annual + bonus)
// The totalBonus should be the employee's total bonus rounded to the nearest dollar.

// Individual Bonus calculation
// Those who have a rating of a 2 or below should not receive a bonus.
// Those who have a rating of a 3 should receive a base bonus of 4% of their base annual income.
// Those who have a rating of a 4 should receive a base bonus of 6% of their base annual income.
// Those who have a rating of a 5 should receive a base bonus of 10% of their base annual income.

// If their employee number is 4 digits long, this means they have been with the company for longer than 15 years, and should receive an additional 5%.

// However, if their annual income is greater than $65,000, they should have their bonus adjusted down 1%.
// No bonus can be above 13% or below 0% total.
// NOTE: You may abstract out this bonus calculation into a second function if you like, but this is not mandatory.


for (let i=0; i<employees.length; i++){
  bonusCalculator(employees[i]);
}

// Write a declared function that takes in one Employee object (as an argument to the function), and returns a new object with the following properties:

function bonusCalculator (employee){
  //console.log('this is employee', employee);
    let newObject = {
      name: employee.name,
      bonusPercentage: 0,
      totalCompensation: 0,
      totalBonus: 0
    }
    // this block of code assigns bonus percentage to the new object
    if (employee.reviewRating <= 2){
      newObject.bonusPercentage = 0
    } else if (employee.reviewRating == 3){
      newObject.bonusPercentage = .04
    } else if (employee.reviewRating == 4){
      newObject.bonusPercentage = .06
    } else if (employee.reviewRating == 5){
      newObject.bonusPercentage = .1
  }
  if (employee.employeeNumber.length == 4 && employee.reviewRating > 2){
    newObject.bonusPercentage += .05;
    //console.log(employee.employeeNumber.length);
  }
  if (employee.annualSalary > 65000){
    newObject.bonusPercentage -= .01;
  }
  if (newObject.bonusPercentage > .13) {
    newObject.bonusPercentage = .13;
  } else if (newObject.bonusPercentage < 0) {
    newObject.bonusPercentage = 0;
  }
    newObject.totalBonus = Number(employee.annualSalary) * newObject.bonusPercentage;
    newObject.totalCompensation = Number(employee.annualSalary) + newObject.totalCompensation;
  console.log(newObject)
}
  
  //bonusCalculator();