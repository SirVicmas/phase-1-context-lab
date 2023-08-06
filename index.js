/* Your Code Here */


function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    return {
      firstName,
      familyName,
      title,
      payPerHour,
      timeInEvents: [],
      timeOutEvents: []
    };
  }
  
  function createEmployeeRecords(employeesArray) {
    return employeesArray.map(createEmployeeRecord);
  }
  
  function createTimeInEvent(employee, dateTime) {
    const [date, hour] = dateTime.split(' ');
  
    employee.timeInEvents.push({
      type: 'TimeIn',
      hour: parseInt(hour, 10),
      date
    });
  
    return employee;
  }
  
  function createTimeOutEvent(employee, dateTime) {
    const [date, hour] = dateTime.split(' ');
  
    employee.timeOutEvents.push({
      type: 'TimeOut',
      hour: parseInt(hour, 10),
      date
    });
  
    return employee;
  }
  
  function hoursWorkedOnDate(employee, date) {
    const timeIn = employee.timeInEvents.find(event => event.date === date).hour;
    const timeOut = employee.timeOutEvents.find(event => event.date === date).hour;
  
    return (timeOut - timeIn) / 100; // Convert military time to hours
  }
  
  function wagesEarnedOnDate(employee, date) {
    const hoursWorked = hoursWorkedOnDate(employee, date);
    return hoursWorked * employee.payPerHour;
  }
  
  const allWagesFor = function (employee) {
    const datesWorked = employee.timeInEvents.map(event => event.date);
    const totalWages = datesWorked.reduce((total, date) => total + wagesEarnedOnDate(employee, date), 0);
    return totalWages;
  }
  
  function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(employee => employee.firstName === firstName);
  }
  
  function calculatePayroll(employeesArray) {
    return employeesArray.reduce((totalPayroll, employee) => totalPayroll + allWagesFor(employee), 0);
  }
  

// function createEmployeeRecord() {
    
// }

// createEmployeeRecord(array)

// function createEmployeeRecord(){

// }

// function createTimeInEvent() {}

// function createTimeOutEvent() {}

// function hoursWorkedOnDate() {}

// function wagesEarnedOnDate() {} 



// function calculatePayroll() {}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

// const allWagesFor = function () {
//     const eligibleDates = this.timeInEvents.map(function (e) {
//         return e.date
//     })

//     const payable = eligibleDates.reduce(function (memo, d) {
//         return memo + wagesEarnedOnDate.call(this, d)
//     }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

//     return payable
// }

