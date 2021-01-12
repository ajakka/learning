const rect = require('./rect');

rect(4, 7, (err, res) => {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log(`Result is ${res.perimeter()}, ${res.area()}`);
    }
})

console.log('Hello');