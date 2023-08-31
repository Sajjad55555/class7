"use strict";
//Assignment for the week:
/*1- Develop a program that calculates and prints the sum of the first n even numbers using
a for loop.*/
var sum = 0;
for (let b = 0; b <= 10; b++) {
    if (b % 2 == 0) {
        sum = sum + b;
    }
}
console.log(sum);
/*2- Implement a program that uses a for loop to iterate through an array of numbers and
 print only the even numbers.*/
var a = [1, 2, 3, 4, 5, 6, 7, 8];
var result = [];
for (let c = 0; c < a.length; c++) {
    let d = a[c];
    if (d % 2 == 0) {
        result.push(d);
    }
}
console.log(result);
/*3- Implement a program that uses a loop to iterate through an array of numbers and remove
 all the even numbers from them and just leave the odd ones*/
var arry = [1, 2, 3, 4, 5, 6, 7, 8];
for (let v = 0; v < arry.length; v++) {
    let g = arry[v];
    if (g % 2 == 0) {
        arry.splice(v, 1);
    }
}
console.log(arry);
/*4- Write a program that defines a function to calculate the area of a circle.
 The function should take the radius as input and return the calculated area.
 area=pi*radius*radius*/
// pi = 3.14
function areaOfCircul(input) {
    let pi = 3.14;
    let area = pi * input * input;
    console.log(area);
}
areaOfCircul(15);
/*5- Develop a program that reads a list of grades and uses the splice method to
 remove failing grades (below 50) from the array.*/
var arry = [11, 22, 33, 44, 55, 66, 77, 88];
for (let v = 0; v < arry.length; v++) {
    let g = arry[v];
    if (g % 2 == 0) {
        arry.splice(v, 1);
    }
}
console.log(arry);
//6- Write a program that uses a function to find the largest element in an array of numbers.
function findLargeNmbr(num) {
    var max = 0;
    for (let i = 0; i < num.length; i++) {
        let g = num[i];
        if (g > max) {
            max = g;
        }
    }
    console.log(max);
}
findLargeNmbr([12, 34, 55, 66, 634, 77, 88]);
/* 7- Develop a program that reads a list of grades and uses the splice
method to remove failing grades (below 50) from the array.*/
var arrayGrades = [40, 32, 45, 30, 50, 69, 78, 64, 83];
var removeGrade = [];
for (let i = 0; i < arrayGrades.length; i++) {
    if (arrayGrades[i] < 50) {
        arrayGrades.splice(i, 1);
        i--;
    }
    removeGrade.push(arrayGrades[i]);
}
console.log(`The Remaining Grades after removing:${removeGrade}`);
