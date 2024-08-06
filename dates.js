// Date()- it will return the date, time, and timezone
const d1=new Date()
console.log(d1.toString())

//we can create our own date and time
const d2=new Date(2002, 7, 25, 15, 15, 30, 56);
//js counts months from 0-11, date(year, month, day, hour, min, sec, ms)
console.log(d2)

//Specifying a month higher than 11, will not result in an error but add the overflow to the next year
const d3=new Date(2002, 15, 25, 15, 15, 30, 56);
console.log(d3.toDateString())

//you supply only one parameter it will be treated as ms
const d4=new Date(2002);
console.log(d4)

//one and two digit year is considered as previous centuary i.e., 19xx
const d5=new Date(2001, 7, 25, 15, 15, 30, 56);
console.log(d5.toString())

//getformats
console.log(d1.getFullYear())
console.log(d1.getHours())
//In JavaScript, the first day of the week (day 0) is Sunday
console.log(d1.getDay())
//this will give day in numbers

//to get day Name
const days=["Sunday", "Monday", "Tuesday", "wednesday","Thursday","Friday","Saturday"]
console.log(days[d1.getDay()])

//getTimeoffset()- returns the difference (in minutes) between local time an UTC time
console.log(d1.getTimezoneOffset())
