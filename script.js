// 1 Get total orders
const orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 }
];

let totalAmount = 0;
orders.forEach(obj => totalAmount += obj.amount);
console.log(totalAmount);

// 2 Increment by 1
const arrayOfNumbers = [3, 45, 6, 56, 7, 9];
const incrementedNumbers = arrayOfNumbers.map(number => number + 1);
console.log(incrementedNumbers);

// 3 Filter evens
const evenNumbers = arrayOfNumbers.filter(number => number % 2 === 0);
console.log(evenNumbers);

// 4 Filter friends
function filterItems (array, searchQuery) {
    return array.filter(name => name.includes(searchQuery));
}
const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
console.log(filterItems(friends, 'ka')); // ["Rika"];
console.log(filterItems(friends, 'e')); // ["Jenna", "Bleda", "Oliver"];


// 5 Sum up
function sum(array) {
    return array.reduce((accu, current) => accu += current);
}
console.log(sum([1,2,3]));