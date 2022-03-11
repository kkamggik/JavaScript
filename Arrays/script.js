const items = [
    { name: "Bike", price: 100 },
    { name: "TV", price: 200 },
    { name: "Album", price: 10 },
    { name: "Book", price: 5 },
    { name: "Phone", price: 500 },
    { name: "Computer", price: 1000 },
    { name: "Keyboard", price: 100 },
]

// filter
const filteredItems = items.filter((item) => {
    return item.price <= 100
})

// map (make a new array)
const itemNames = items.map((item) => {
    return item.name
})

// find
const foundItem = items.find((item) => {
    return item.name === "Book";
})

// forEach (does not return anything)
items.forEach((item) => {
    console.log(item.name)
    console.log(item.price)
})

// some (return true or false)
const hasInexpensiveItems = items.some((item) => {
    return item.price <= 100;
})
console.log(hasInexpensiveItems) // return true

// every (return true or false)
const allInexpensiveItems = items.every((item) => {
    return item.price <= 1000;
})
console.log(allInexpensiveItems) // return true

// reduce
const total = items.reduce((currentTotal, item) => {
    return currentTotal + item.price;
}, 0)

// includes
const numbers = [1, 2, 3, 4, 5]
const includesTwo = items.includes(2);
console.log(includesTwo) // return true