/* 
var digitThree = 0; // This is variable CSSStyleDeclaration; we tell code
//   there's digitThree variable which it type 'var' and equals 0  //

console.log('HELLO');

alert('ANNOYING AD')

var digitThree = 0;


// NUMBERS //
let digitThree = 3;
let digitOne = 1;
let digitMany = 340568973;


// STRINGS //
let textVariable = 'text';


//BOOLEAN//
let boolVariable = true;
let boolVariable = false;



console.log('digitThree + textVariable')



document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('logo').innerHTML = 'NEW LOGO'; 




    digitThree = 3;

    console.log('Digit Three Bottom');
    console.log(DigitThree);

    function newFunc () {
        let digitThree = 5;
    }


});



console.log('Digit Three OUTSIDE:');
console.log(DigitThree);



let a = 10;
let b = 5;
let z = 3;


let sum = (a + b) - z * 10;
let remainder = a % b;


console.log(sum);
console.log(remainder);





let length = 10;
let width = 5;

let area = length * width;
let perimeter = (length + width) * 2;

console.log("length", length);
console.log("width", width);
console.log("area", area);
console.log("perimeter", perimeter);





// COMPARISON //

let one = 1;
let two = 2;


console.log(one < two)
console.log(one > two)
console.log(one <= two) // less or equal
console.log(one >= two) // more or equal
console.log(one == two) // asking if it's equal just comparing
console.log(one === two) // strict comparison, means tha types should be equal, 
//say when comparins string with numbers

 




// CONDITIONS //



 if (score >= 75) {
    console.log('score is more or equal to 75')
};  



let score = 75;


// if/else

if (score >= 90) {
    console.log('score is more than 90')
}

else if (score == 75) {
    console.log('score equal 75')
}


else if (score <= 75 ) {
    console.log('score is less thank 75')
}



if (score) {
    console.log('score exists')
}



let i = 1;

for (i; i <= 5; i++) {
console.log('Iteration number', i)
}


let i = 1;
while (i <= 5)


function add(a, b) {
    return a = b;
}


*/







/* // HOMEWORK //


// Celcius to Fahrenheit //


let celsius = 25;

let fahrenheit = (celsius * 9/5) + 32;
console.log(celcius, 'C is', fahrenheit, 'F is');
*/




function greet() {
    console.log('Hello World!')
}

greet()

/* THIS MAKES IT WAIT FOR DOM TO LOAD */

document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM loaded');



/* DRY DOnot Repeat Yourself */


    let logo = document.getElementById('logo');


    logo.addEventListener('mouseover', function() {
        console.log('mouseover');
        logo.style.color = "blue";
        });


     logo.addEventListener('mouseout', function() {
        console.log('mouseout');
        logo.style.color = "black";
        });
    

    logo.addEventListener('click', function() {
        console.log('click');
        logo.style.backgroundColor = "grey";

        logo.innerHTML = "NEW TEXT";
        logo.style.color = "white";
        document.getElementById('logo');
        });



document.getElementById('contactform').addEventListener('submit', function(event){



    console.log(event);
    event.preventDefault();

    let emailinput = document.getElementById('emailinput');
    let errormessage = document.getElementById('errormessage');


    if (emailinput.value === '') {
        errormessage.textContent = 'Please do not leave empty'
        errormessage.style.color = "red";

    }

    else {
        errormessage.textContent = 'Email entered'
        errormessage.style.color = "green";

    };

})



/*
$(document).ready(function(){
     console.log('JQueary Loaded');
     $('#contactform').css('border', 'red solid 5px')

})

*/









 








    
    














})