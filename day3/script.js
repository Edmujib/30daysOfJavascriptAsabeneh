//1 Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
const firstName = "idrees";
console.log(typeof firstName);

const lastName = "abdulmujeeb";
console.log(typeof lastName);

const country = "dubai";
console.log(typeof country);

const city = "ilorin";
console.log(typeof city);

const age = 17;
console.log(typeof age);

const isMarried = false;
console.log(typeof isMarried);

const year = 2022;
console.log(typeof year);

//2
console.log(typeof "10" === 10);

//3 Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') === 10);

//4Boolean value is either true or false.
//Write three JavaScript statement which provide truthy value.
console.log(4 > 3);
console.log(4 == 4);
console.log(6 === 6);

//Write three JavaScript statement which provide falsy value.
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 != '4');

//5 Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');

const gon = "jargon".length;
const pyth = "python".length;
console.log(gon != pyth);

//6 Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));



console.log(!'python'.includes('on') && !'dragon'.includes('on'));//false

//7

var date = new Date();
console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getTime());

//LEVEL 2






