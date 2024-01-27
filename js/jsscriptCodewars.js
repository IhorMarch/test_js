
// const n = 123456

// function digitalRoot(n) {
//   // Base case: if n is a single-digit number, return n
//   if (n < 10) {
//     return n;
//   }

//   // Convert the number to a string and split it into an array of digits
//   const digits = String(n).split('').map(Number);

//   // Calculate the sum of the digits
//   const sum = digits.reduce((acc, digit) => acc + digit, 0);

//   // Recursively call digitalRoot on the sum
//   return digitalRoot(sum);
// }

// // // Example usage:
// const result = digitalRoot(n);
// console.log(result); // Output: 6

// // const digits = 123456;
// // const string = String(digits)
// // const split = string.split('')
// // const map = split.map(Number);
// // const sum = map.reduce((acc, digit) => acc + digit, 0);
// // console.log(sum);

// -------------------------------------------------------


// function getCount(str) {
//   // Use a regular expression to match vowels (a, e, i, o, u)
//   const vowels = str.match(/[aeiou]/g);

//   // If vowels are found, return the count; otherwise, return 0
//   return vowels ? vowels.length : 0;
// }

// Example usage:


// function getCount(str) {
//  return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
// }

// console.log(getCount("abracadabra"));

// const count = getCount("abracadabra");
// console.log(count); // Output: 3 (because there are three vowels: e, o, o)

// --------------------------------------

// function getMiddle(s)
// {
//    const split = s.split('')
   
//     if (split.length % 2== 0) {
//         return split.splice(split.length/2-1,2).join('');
//     }
//     return split.splice((split.length-(split.length-1)+(split.length-1)/2)-1,1).join('');
// }


// // // // Example usage:
// const result = getMiddle("Tests");
// console.log(result); // Output: 6

// function getMiddle(s) {
//     const length = s.length;
//     const middle = Math.floor(length / 2);

//     if (length % 2 === 0) {
//         return s.substring(middle - 1, middle + 1);
//     } else {
//         return s.charAt(middle);
//     }
// }

// // Examples
// console.log(getMiddle("test"));      // Output: "es"
// console.log(getMiddle("testing"));   // Output: "t"
// console.log(getMiddle("middle"));    // Output: "dd"
// console.log(getMiddle("A"));         // Output: "A"