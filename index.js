var monthNames = [
  "January", 
  "February", 
  "March",
  "April", 
  "May", 
  "June", 
  "July",
  "August", 
  "September", 
  "October",
  "November", 
  "December"
];

var dateVar = new Date();
var currentMonthName = monthNames[dateVar.getMonth()];
var currentYear = dateVar.getFullYear();

var footerDate = document.getElementById('footer-date');
footerDate.textContent = currentMonthName + ' ' + currentYear;

