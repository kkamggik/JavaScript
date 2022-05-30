// function Person(name,first,second) {
//     this.name = name;
//     this.first = first;
//     this.second = second;
//     this.sum = function(){
//         return this.first+this.second;
//     }
// }
// const kim = new Person('kkamggik',1,2);
// console.log(Person)
// console.log(kim);

// class Person{
//     constructor(name,first,second){
//         this.name = name;
//         this.first = first;
//         this.second = second;
//     }
//     sum(){
//         return this.first + this.second;
//     }
// }
// const kim = new Person('kim',10,20);
// console.log(kim.sum())


// //closure
// var fun = function() {
//     var cnt = 123;
//     var increase = function(){
//         cnt = cnt+1;
//         console.log(cnt)
//     }
//     return increase;
// }
// var newFun = fun();
// newFun();
// newFun();

// var a = 1
// function add(b) {
//     b = b+1
// }
// add(a)
// console.log(a)


// async

// function makeRequest(location) {
//     return new Promise((resolve, reject) => {
//         console.log(`Making Request to ${location}`);
//         if(location==="Google"){
//             resolve('Google says Hi')
//         }else{
//             reject('We can only talk to Google');
//         }
//     })
// }

// function processRequest(response){
//     return new Promise((resolve, reject) => {
//         console.log('Processing Request')
//         resolve(`ExtraInformation + ${response}`);
//     })
// }

// makeRequest('Meta').then(response => {
//     return processRequest(response)
// }).then(information => console.log(information))
// .catch(err => console.log(err))

// async function easy() {
//     try {
//         const response = await makeRequest('Meta');
//         const information = await processRequest(response);
//         console.log(information)
//     } catch(err) {
//         console.log(err)
//     }
// }

// easy();


// // block scope / function scope
// var a = 100;
// function reassign(){
//     a = 200;
// }
// reassign();
// console.log(a)

// let b = 100;
// function reassign2(){
//     b = 200;
// }
// console.log(b)

function Person(name){
    this.name = name;
    this.sayHello = function() {
        console.log('my name: '+this.name);
    }
}
const kim = new Person('kim');
Person.prototype.sayBye = this.name
kim.sayHello();
// console.log(Person.prototype)
console.log(kim.sayBye)
