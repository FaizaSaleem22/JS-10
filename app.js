// q1
// function today(){
//     var now = new Date
//     document.write(now, "<br>");
// }
// today()

// q2
// function greet(userFirst, userLast){
//     document.write("Welcome", " ", userFirst, " ", userLast,  "<br>")
// }
// var firstName = prompt("Enter your first name")
// var lastName = prompt("Enter your last name")
// greet(firstName,lastName)

// q3
// function sum(a,b){
//     document.write(a,"+",b,"=",a+b,"<br>")
// }
// var num1 = +prompt("Enter your 1st number")
// var num2 = +prompt("Enter your 2nd number")
// sum(num1,num2)

// // q4
// function operation(a,b,c){
//     var result = ""
//     if(b === "+"){
//         result= a+c
//     }
//     else if(b === "-"){
//         result= a-c
//     }
//     else if(b === "*"){
//         result= a*c
//     }
//     else if(b === "/"){
//         result= a/c
//     }else{
//         result = "invalid operator"
//     }
//     document.write(a,b,c,"=" , result, "<br>")
// }
// var num1 = +prompt("Enter your 1st number")
// var operator = prompt("Enter any operator")
// var num2 = +prompt("Enter your 2nd number")
// operation(num1,operator,num2)

// q5
// function square(a){
//     document.write(`Square of ${a} is: ${a*a} <br>`)
// }
// var user = +prompt("Enter a number")
// square(user)

// q6
// function factorial(a) {
//     var calculation = 1
//     for (let i = 1; i <= a; i++){
//         calculation = calculation * i
//     }
//     document.write(a , "! = " , calculation);
// }
// var user = +prompt("Enter a number");
// factorial(user)

// q7
// function counting(a,b){
//     for(i=a; i<=b; i++){
//         document.write(i, "<br>")
//     }
// }
// var num1 = +prompt("Enter start number")
// var num2 = +prompt("Enter end number")
// counting(num1,num2)

// q8
// function hypotenuse(base, perpendicular){
//     function square(a){
//         return a*a
//     }
//     var hyp = square(base)+square(perpendicular)
//     return Math.sqrt(hyp).toFixed(2)
// }
// var num1 = +prompt("enter base")
// var num2 = +prompt("enter perpendicular")
// document.write(hypotenuse(num1,num2))

// q9
// function area(a,b){
//     return a*b
// }
// document.write(area(3,4) , "<br>");
// var width = +prompt("Enter width")
// var height = +prompt("Enter height")
// document.write(area(width,height))

// q10
// function palindrome(word){
//     var reverse = ""
//     for(var i=word.length-1; i>=0; i--){
//         reverse = reverse+word[i]
//     }
//     if( word === reverse){
//         document.write(word ," ", "is a palindrome word")
//     }else{
//         document.write(word ," ", "is not a palindrome word")
//     }
// }
// var user = prompt("Enter a palindrome word")
// palindrome(user)

// q11
// function str(sentence){
//     var arr = sentence.split(" ")
//     for(var i=0; i<arr.length; i++){
//         arr[i] = arr[i].charAt(0).toUpperCase()+arr[i].slice(1)
//     }
    
//     return arr.join(" ")
// }

// var capital = "the quick brown fox"
// console.log(str(capital))

// q12
function str(sentence){
    var arr = sentence.split(" ")
    var longestWord= ""
    for(var i=0; i<arr.length; i++){
        if(arr[i].length>longestWord.length){
            longestWord = arr[i]
        }
    }
    return longestWord
}
var longest = "web development tutorial"
console.log(str(longest));

// q13
function calculateLetter(str, letter){
    var count = 0
    for(var i=0; i<str.length; i++){
        if(str[i] === letter){
            count++
        }
    }
    return count;
}
var string = "jsresources.com"
var findLetter = "o"
console.log(calculateLetter(string, findLetter))

// q14
function calcCircumference(radius){
    var pi = 3.14159
    return 2*pi*radius
}
var r = 9
console.log(("The circumference is" , calcCircumference(r).toFixed(2)));

function calcArea(radius){
    function square(a){
        return a*a
    }
    var pi = 3.14159
    return pi*square(radius)
}
var r = 11
document.write("The area is" ," ", calcArea(r).toFixed(2),"cm <sup>2</sup>");
