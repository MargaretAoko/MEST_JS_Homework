/*
 * 1. explain the special meaning of the following special characters
 \0 the null character
 \n new line
 It is used to find a newline character and returns the position where the newline character was found. If no match is found, it returns -1.
 \r carriage return
 It is used to find a carriage return character and returns the position where the carriage return character was found. If no match is found, it returns -1.
 \v vertical tab 
 It's used to find a vertical tab character and returns the position where the vertical tab character was found. If no match is found, it returns -1.
 \t It is used to find a tab character and returns the position where the tab character was found. If no match is found, it returns -1.
 \backspace 
 Creates space in between strings that have that have grammatical punctuations that interfere with quotes for strings in a variable. 
 \f form feed 
 It's used to find a form feed character and returns the position where the form feed character was found. If no match is found, it returns -1.
 */

/*
 *  2.Please combine those two array together as one array by using concate:
 *  var arr1 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday']
 *  var arr2 = ['Thursday', 'Friday', 'Saturday']
 */
var arr1 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday']
var arr2 = ['Thursday', 'Friday', 'Saturday']
arr1.concat(arr2)

/*
 *  3.Please combine those three array together as one array by only using concate() function once:
 *  var arr1 = ['Sunday', 'Monday']
 *  var arr2 = ['Tuesday', 'Wednesday']
 *  var arr3 = ['Thursday', 'Friday', 'Saturday']
 */
var arr1 = ['Sunday', 'Monday']
var arr2 = ['Tuesday', 'Wednesday']
var arr3 = ['Thursday', 'Friday', 'Saturday']
arr1.concat(arr2,arr3)
/*
 * 4. what is the result(output of following code):
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 *    console.log(arr.sort());
 *    console.log(arr);
 */
["Enoch", "Todd", "Yaw", "ashwin", "jerry", "lars", "mike"]

/*
 * 5. what is the result(output of following code):
 *    var arr = [1, 3, 'apple', 'orange', 'black', 'test', 2];
 *    console.log(arr.sort());
 *    console.log(arr);
 */
[1, 2, 3, "apple", "black", "orange", "test"]

/*
 * 6. Please remove mike, jerry, adn Enoch from the following array by using slice
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 */
var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
console.log(arr.slice(2,6))
/*
 * 7. what is the result(output of following code):
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 *    console.log(arr.slice(-3, -1));
 *    console.log(arr);
 */
["Yaw", "Enoch"]

/*
 * 8. what is the result(output of following code):
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 *    console.log(arr.slice(2));
 *    console.log(arr);
 */
["mike", "jerry", "Yaw", "Enoch", "lars"]

/*
 * 9. what is the result(output of following code):
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 *    console.log(arr.slice(-2));
 *    console.log(arr);
 */
["Enoch", "lars"]

/*
 * 10. convert the following function to function expression:
 *   function addTwoNumber (num1, num2) {
 *     return num1 + num2;
 *   }
 * and invoke the function expression to caluate the result of 256 + 532
 */
var num1 = 256;
var num2 = 536;
 function addTwoNumber (num1, num2) {
    return num1 + num2;    
 }
addTwoNUmber();


/*
 * 11. create an immediately invoked function expression
 * store the iife within a variable and call it
 */

(function addTwoNumber (num1, num2) {
    return num1 + num2;    
 }
addTwoNUmber(236,245));

/*
 * 12. you have following objects:
 *     var person1 = {
 *          name: 'ashwin'
 *     };
 *
 *     var person2 = {
 *          name: 'lars'
 *     };
 *
 *    function namer() {
 *          return this.name;
 *    }
 *
 *    use bind function here to make namer() function to call 'ashwin'
 *    and lars
 */
var person1 = {
          name: 'ashwin'
    };

   var person2 = {
         name: 'lars'
    };
    function namer() {
         return this.name;
  }


/*
 * 12. you have following object:
 *     var number = {
 *          x: 22,
 *          y: 33
 *     };
 *
 *    var count = function() {
 *          console.log(this.x + this.y);
 *    }
 *  a. what is the result when we invoke count()? 
 NaN
 *  b. use bind on function expression to make this work.
 */
 var number = {
    x: 22, 
    y: 33}; 
var count = function() {
 console.log(this.x + this.y)}; 
     count.bind(number)();

/*
 * 13. you have following objects:
 *     var person1 = {
 *          firstName: 'ashwin'
 *          lastName: 'Yaw'
 *     };
 *
 *     var person2 = {
 *          firstName: 'lars',
 *          lastName: 'Mike'
 *     };
 *
 *     function hello(greeting) {
 *          console.log(greeting + ' ' + this.firstName + '' + lastName);
 *    }
 *
 *  use call methods on function expression to make this work.
 */
var person1 = {
	firstName: 'ashwin',
	lastName: 'Yaw'
};

var person2 = {
	firstName: 'lars',
	lastName: 'Mike'
};
function hello(greeting) {
	console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
}

hello.call(person1, "Hi");
hello.call(person2, "Hi");

/*
 * 14. We have a following string:
 *     var str = 'Training, mentoring, and investing in world-class tech entrepreneurs in Africa.'
 *
 *     please write a function to change the first letter of every word to upper case.
 */
function titleCase(str) {  
  str = str.toLowerCase().split(' ');

  for(var i = 0; i < str.length; i++){
    str[i] = str[i].split('');
    str[i][0] = str[i][0].toUpperCase(); 
    str[i] = str[i].join('');
  }
  return str.join(' ');
}
titleCase("Training, mentoring, and investing in world-class tech entrepreneurs in Africa.");

Contact GitHub 
