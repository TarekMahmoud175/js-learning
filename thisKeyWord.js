// let obj1 = {
//   name: "tarek",
//   address: "obj1 address",
//   getName: function () {
//     console.log(this.name);
//   },
//   getAddress: function () {
//     console.log(this.address);
//   },
// };

// obj1.getAddress(); // returns obj1 address

// var getAddress = obj1.getAddress; // assigning function defention to a variable

// getAddress(); // undefined as there is no address in window

/*********************************************************************************************** */
// var address = "global address";

// let obj1 = {
//   name: "tarek",
//   address: "obj1 address",
//   getName: function () {
//     console.log(this.name);
//   },
//   getAddress: function () {
//     console.log(this.address);
//   },
// };

// obj1.getAddress(); // returns obj1 address

// var getAddress = obj1.getAddress; // assigning function defention to a variable

// getAddress(); // returns the global address of the window as "this" keyword now is pointing to the window

/*********************************************************************************************** */

// var address = "global address";

// let obj1 = {
//   name: "tarek",
//   address: "obj1 address",
//   getName: function () {
//     console.log(this.name);
//   },
//   getAddress: function () {
//     console.log(this.address);
//   },
// };

// obj1.getAddress(); // returns obj1 address

// var getAddress = obj1.getAddress; // assigning function defention to a variable

// getAddress(); // returns the global address of the window as "this" keyword now is pointing to the window

// let obj2 = {
//   name: "tarook",
//   address: "obj2 address",
//   getAddress,
// };

// obj2.getAddress(); // return obj2 address

/*********************************************************************************************** */
// console.log(this)

/*********************************************************************************************** */

// var address = "global address";

// let obj1 = {
//   name: "tarek",
//   address: "obj1 address",
//   getName: function () {
//     console.log(this.name);
//   },
//   getAddress: function () {
//     console.log(this.address);
//   },
// };

// // obj1.getAddress(); // returns obj1 address

// var getAddress = obj1.getAddress; // assigning function defention to a variable

// // getAddress(); // returns the global address of the window as "this" keyword now is pointing to the window

// let obj2 = {
//   name: "tarook",
//   address: "obj2 address",
//   getAddress,
// };

// // obj2.getAddress(); // return obj2 address

// let obj3 = {
//   name: "obj3",
//   address: "obj3 address",
// };

// getAddress.call(obj3);
// getAddress.apply(obj3);
// let bound = getAddress.bind(obj3);
// bound();

// obj1.getAddress.call(obj3);
// obj1.getAddress.apply(obj3);
// let bound_otherway = obj1.getAddress.bind(obj3);
// bound_otherway();
