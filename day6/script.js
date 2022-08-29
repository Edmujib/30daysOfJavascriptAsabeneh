//1 .Iterate 0 to 10 using for loop, do the same using while and do while loop
//a. FOR LOOP
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
//b. WHILE LOOP
let i = 1;
while (i <= 10) {
    console.log(i);
    i++
}
//c. DO WHILE LOOP
let p = 0;
do {
    console.log(p)
    p++
} while (i <= 10)

//2. Iterate 10 to 0 using for loop, do the same using while and do while loop
//a. FOR LOOP











//3. Iterate 0 to n using for loop
for (let q = o; q <= o; q++) {
    console.log(q);
}
/* Write a loop that makes the following pattern using console.log():
#
##
###
####
#####
######
#######*/
let hash = ["#", "##", "###", "####", "#####", "######", "#######"]
for (i <= 1; i <= hash.length; i++);
console.log(hash[1, i]);


/*6. Use loop to print the following pattern:
0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100*/
let num = ["0 x 0 = 0", "1 x 1 = 1", "2 x 2 = 4", "3 x 3 = 9", "4 x 4 = 16", "5 x 5 = 25", "6 x 6 = 36", "7 x 7 = 49", "8 x 8 = 64", "9 x 9 = 81", "10 x 10 = 100"]
for (i <= 1; i <= hash.num; i++);
console.log(hash[1, i]);

//6. Using loop print the following pattern
/*i    i^2   i^3
0    0     0
1    1     1
2    4     8
3    9     27
4    16    64
5    25    125
6    36    216
7    49    343
8    64    512
9    81    729
10   100   1000*/

//7. Use for loop to iterate from 0 to 100 and print only even numbers
let z = 2;
let evensum = 0
for (let i = 0; i <= 100; i++);
j % 2 == 0;
evensum = evensum + j;

//8. Use for loop to iterate from 0 to 100 and print only odd numbers
let k = 2;
let oddsum = 0
for (let i = 0; i <= 100; i++);
j % 2 == 1;
oddsum = oddsum + j;

//9. Use for loop to iterate from 0 to 100 and print only prime numbers


//10.Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum = sum + i;
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}`);

//11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let evenSum = 0;
let oddSum = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        evenSum = evenSum + i;
    } else {
        oddSum = oddSum + i;
    }
}
console.log(evenSum);
console.log(oddSum);
console.log(`The sum of all evens from 0 to 100 is ${evenSum}. And the sum of all odds from 0 to 100 is ${oddSum}.`);

//12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
let odd = 0;
let even = 0;
let total = [];
for (let j = 0; y <= 100; y++) {
    if (y % 2 == 1) {
        odd = odd + y;
    } else {
        even = even + y;
    }
}
total.push(even, odd);
console.log(total);

//13. Math.floor(Math.random()*max)
//Develop a small script which generate array of 5 random numbers

let randArr = [];
for (let i = 0; randArr.length <= 4; i++) {
    const rand = Math.floor(Math.random() * 5);
    randArr.push(rand);
}
console.log(randArr);

//14. Develop a small script which generate array of 5 random numbers and the numbers must be unique

let uniqRand = [];
for (let i = 0; uniqRand.length <= 4; i++) {
    const num = Math.floor(Math.random() * 10);
    if (uniqRand.indexOf(num) == -1) {
        uniqRand.push(num);
    }
}

console.log(uniqRand);

//15. Develop a small script which generate a six characters random id: 5j2khz
let characters = "a to z 1 to 9";
id = "";
for (let i = 0; i <= 5; i++) {
    const num = math.floor(math.random() * characters.length);
    id = id + characters.charAt(num);
}
console.log(id);





