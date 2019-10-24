// Q1. Write the function printInt(n) taking one parameter n and
//print all natural numbers from 1 to n in console.

function printInt(n) {
  for (var i = 1; i <= n; i++) {
    console.log(i);
  }
}

// Q2. Write the function printIntRev(n) taking one parameter n and
//print all natural numbers in reverse in console (from n to 1).

function printIntRev(n) {
  for (var x = n; x >= 1; x--) {
    console.log(x);
  }
}

// Q3. Write the function checkInput(x) taking one parameter x and
//return the string ‘number’ if x is a number; return the string ‘string’
//if x is a string; and return string ‘boolean’ if x is a boolean.
//Otherwise returns -1.

function checkInput(x) {
  if (
    typeof x === "number" ||
    typeof x === "string" ||
    typeof x === "boolean"
  ) {
    return typeof x;
  } else {
    return -1;
  }
}

// Q4. Write the function simpleEvenAdding(num) taking a number and add
//up all the even numbers from 1 to num, and return it.

function simpleEvenAdding(num) {
  var solution = 0;
  for (var i = 0; i <= num; i += 2) {
    solution += i;
  }
  return solution;
}

// Q5. Write the function letterCapitalize(str) taking a string and capitalize
// the first letter of each word. The given words will be separated by only one space.

function letterCapitalize(str) {
  var words = str.split(" ");
  var solution = "";

  for (var i = 0; i < words.length; i++) {
    var upperWord = words[i].replace(words[i][0], words[i][0].toUpperCase());
    solution += " " + upperWord;
  }
  return solution.slice(1);
}

// Q6. Write the function simpleReverse(str) taking a string
// and return the string in reverse order.

function simpleReverse(str) {
  var strArray = str.split("");
  var revArray = strArray.reverse();
  return revArray.join("");
}

// Q7. Write the function findDiff(arr) taking an array of numbers as parameter
//and return the difference between the maximum number and the minimum number (max - min).

function findDiff(arr) {
  var max = Math.max(...arr);
  var min = Math.min(...arr);
  return max - min;
}

// Q8. Write the function timeConvert(num) taking a number as parameter
// and return the number of hours and minutes the parameter converts to.
//Separate the number of hours and minutes with a colon.

function timeConvert(num) {
  var hour = parseInt(num / 60);
  var minutes = num % 60;
  return hour + " : " + minutes;
}

// Q9. Write the function findStr(str, long) taking two strings as parameters
// and return how many str you can find in long. Assume Str is not empty string.

function findStr(str, long) {
  var splittedArray = long.split(str);
  return splittedArray.length - 1;
}

// Q10. Write the function selfDividingNumbers(left, right) taking two number bound
// as parameters and returns an array of every possible self dividing number between
// them, including the bounds.

function selfDividingNumbers(left, right) {
  var solution = [];
  for (var i = left; i <= right; i++) {
    if (isSelfDividing(i)) {
      solution.push(i);
    }
  }
  return solution;
}
function isSelfDividing(num) {
  var digits = num.toString().split("");
  for (var i = 0; i < digits.length; i++) {
    if (num % digits[i] !== 0) {
      return false;
    }
  }
  return true;
}

// Q11. Write the function moveZeros(nums) taking an array of numbers
// and move all 0’s to the end of it while maintaining the relative
// order of the non-zero elements.

function moveZeros(nums) {
  var counter = 0;
  var solution = [];

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      counter++;
    } else {
      solution.push(nums[i]);
    }
  }
  for (var j = counter; j > 0; j--) {
    solution.push(0);
  }
  return solution;
}

// Q12. Create an average(nums) function that
// calculates the average of an array of numbers.

function average(nums) {
  if (nums.length === 0) {
    return 0;
  }
  var sum = 0;
  for (var i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum / nums.length;
}
console.log(average([]));
