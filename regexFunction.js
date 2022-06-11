console.log(/^([a-z]+) ([A-Z]+)$/.exec("hello WORLD"));
console.log(/^([a-z]+) ([A-Z]+)$/.test("hello WORLD"));

// first index returned by excute  is the complete matched string