var calendario = require('calendario');
calendario.use('US');
var todayPre = new Date();
var dd = todayPre.getDate();
var mm = todayPre.getMonth()+1; //January is 0!
var yyyy = 2016;
mm = 07;
dd = 04;
var today = yyyy + '-' + mm + '-' + dd
 
console.log(calendario.aboutDay(new Date (today)))