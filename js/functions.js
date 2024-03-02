// 1. Напишите функцию, которая принимает на вход массив чисел и возвращает сумму всех положительных элементов массива.

// function positiveSum(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > 0) {
//       sum += array[i];
//     }
//   }
//   return sum;
// }

// const numArray = [1, -2, 3, -4, 5];
// const result = positiveSum(numArray);
// console.log(result);

// 2. Создайте функцию, которая принимает на вход двумерный массив и возвращает новый массив, содержащий только уникальные элементы из всех подмассивов

// function uniqueElementsFrom2DArray(twoDArray) {
//   const uniqueArray = [];

//   for (const subArray of twoDArray) {
//     for (const element of subArray) {
//       if (!uniqueArray.includes(element)) {
//         uniqueArray.push(element);
//       }
//     }
//   }
//   return uniqueArray;
// }

// const twoDArray = [
//   [1, 2, 3],
//   [3, 4, 5],
//   [5, 6, 7],
// ];

// const uniqueElements = uniqueElementsFrom2DArray(twoDArray);

// console.log(uniqueElements);

// 3. Реализуйте функцию, которая принимает на вход число и возвращает массив всех делителей этого числа.

// function getDivisors(num) {
//   const divisor = [];
//   for (let i = 1; i <= num; i++) {
//     if (num % i === 0) {
//       divisor.push(i);
//     }
//   }

//   return divisor;
// }

// const number = 12;
// const divisors = getDivisors(number);
// console.log(divisors);

// 4. Создайте функцию, которая принимает на вход массив и возвращает новый массив, в котором элементы исходного массива умножены на их индекс.

// function multiplyElements(currentArray) {
//   const newArray = [];
//   for (let i = 0; i < currentArray.length; i++) {
//     newArray.push(currentArray * i);
//   }
//   return newArray;
// }

// const currentArray = [1, 2, 3, 4, 5];
// const result = multiplyElements(currentArray);

// console.log(result);

// 5. Напишите функцию, которая принимает на вход массив чисел и возвращает количество отрицательных элементов в массиве.

// function negativeCount(array) {
//   let count = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] < 0) {
//       count++;
//     }
//   }
//   return count;
// }

// const numArray = [1, -2, 3, -4, 5];
// const result = negativeCount(numArray);

// console.log(result);

// 6. Реализуйте функцию для нахождения максимального элемента в каждом подмассиве двумерного массива.

// function maxElementInSubArray(twoDArray) {
//   const result = [];
//   for (let i = 0; i < twoDArray.length; i++) {
//     const subArray = twoDArray[i];
//     let maxElement = subArray[0];
//     for (let a = 1; a < subArray.length; a++) {
//       if (subArray[a] > maxElement) {
//         maxElement = subArray[a];
//       }
//     }
//     result.push(maxElement);
//   }
//   return result;
// }

// const twoDArray = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// const maxElements = maxElementInSubArray(twoDArray);

// console.log(maxElements);

// 7. Создайте функцию, которая принимает на вход строку и возвращает новую строку, в которой все гласные буквы заменены на звездочки.

// function replaceVowelsWithStars(str) {
//   const vowels = ["a", "e", "i", "o", "u"];
//   let newStr = "";

//   for (let char of str) {
//     if (vowels.includes(char.toLowerCase())) {
//       newStr += "*";
//     } else {
//       newStr += char;
//     }
//   }
//   return newStr;
// }

// const originalString = "Example String";

// const result = replaceVowelsWithStars(originalString);

// console.log(result);

// 8. Реализуйте функцию, которая принимает на вход два массива и возвращает новый массив, содержащий только уникальные элементы из обоих исходных массивов.
// function mergeUniqueArrays(array1, array2) {
//   const uniqueArray = [];
//   const mergedArray = array1.concat(array2);
//   for (let element of mergedArray) {
//     if (!uniqueArray.includes(element)) {
//       uniqueArray.push(element);
//     }
//   }

//   return uniqueArray;
// }
// const array1 = [1, 2, 3, 4];
// const array2 = [3, 4, 5, 6];
// const result = mergeUniqueArrays(array1, array2);

// console.log(result);

// 9.  Напишите функцию для проверки, является ли число простым.

// function isPrime(num) {
//   if (num <= 1) {
//     return false;
//   }
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// const checkNum = 13;
// const resultOfCheck = isPrime(checkNum);
// console.log(resultOfCheck);
