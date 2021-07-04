const fruits = ["oranges", "grapes", "mangoes", "bananas"];

// Remove 2 elements from index 0
const result = fruits.splice(0, 2);

console.log(fruits); // ['mangoes','bananas']
console.log(result); // ['oranges','grapes']

// The original array is mutated so that the removed
// elements are not seen. It also returns the deleted items as seen with result

// Remove 3 elements from index 2
const vegetables = [
  "broccoli",
  "corn",
  "cucumber",
  "lettuce",
  "pumpkin",
  "tomato",
];

vegetables.splice(2, 3);

console.log(vegetables); // ['broccoli','corn','tomato'];

const fruitsA = ["apples", "avocados", "mangoes", "bananas"];

console.log(fruitsA.slice(2)); // ['apples','avocados']

// original array stays same.

console.log(fruitsA); //['apples','avocados','mangoes','bananas'];
//another example:

const fruitsB = ["apples", "avocados", "mangoes", "bananas"];

// const slicedFruitsB = fruitsB.slice(1, 2); // doesn't work
// console.log(slicedFruitsB); // ['avocados','mangoes']

// Difference between the splice and slice methods
// splice method modifies the original array and also insert the new elements in the place of removed elements.
// slice method returns a copy from the original array but it can’t insert or modify the original array.
