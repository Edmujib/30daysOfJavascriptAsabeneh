//LEVEL 1

//1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18
let userAge = prompt("Enter your Age")
let AgeDiff = 18 - userAge;
if (userAge => 18) {
    alert("you are old enough to drive");
} else {
    alert(`wait for ${AgeDiff} year`);
}
//2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input
let yourAge = prompt("Enter your Age");
console.log(yourAge);
let myAge = 30;
AgeDiff = yourAge - myAge;
if (myAge > yourAge) {
    console.log("iam older than you");
} else {
    console.log(`you are ${AgeDiff} year older than me`);
}

//3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
if (a > b) {
    console.log(`a > b`);
} else {
    console.log(`a is lesser than b`);

    a > b ? console.log("a is greater than b")
        : console.log(`A is lesser than b`);
}

//4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let n = 7;
if (n % 2 == 1) {
    console.log(`${n} is odd`);
} else {
    console.log(`${n} is even`);
}

//LEVEL2
//1. Write a code which can give grades to students according to theirs scores:
//80-100, A
//70-89, B
//60-69, C
//50-59, D
//0-49, F
let score = prompt("Enter your score");
if (score > 79 && score < 101) {
    alert("your grade is A");
} else if (score > 69 && score < 80) {

    alert("your grade is B");
} else if (score > 59 && score < 70) {
    alert("your grade is c");
} else if (score > 49 && score < 60) {
    alert("your grade is D")
} else if (score < 0 && score < 49);

//2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//September, October or November, the season is Autumn.
//December, January or February, the season is Winter.
//March, April or May, the season is Spring
//June, July or August, the season is Summer

let month = prompt("Enter month");

switch (month) {
    case "january":
    case "febuary":
    case "december":
        alert("the season is winter");
        break;

    case "september":
    case "october":
    case "november":
        alert("the season is Autumn");
        break;

    case "april":
    case "may":
    case "march":
        alert("the season is spring");
        break;

    case "june":
    case "july":
    case "August":
        alert("the season is summer");
        break;
}
//3. Check if a day is weekend day or a working day. Your script will take day as an input.
//What is the day  today ? Saturday
//Saturday is a weekend.

//What is the day today ? saturDaY
//Saturday is a weekend.

//What is the day today ? Friday
//Friday is a working day.

//What is the day today ? FrIDAy
//Friday is a working day.
let day = prompt("what is")
toLowerCase();
if (day == "saturday", day == "sunday") {
    console.log(`${day} is a weekend!`);
} else console.log(`${day} is a working day`);

//LEVEL3 
//1. Write a program which tells the number of days in a month
let mnth = ("Enter a month");
console.log(mnth)