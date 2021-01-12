module.exports = (x, y, callback) => {
    setTimeout(() => {
        if (x <= 0 || y <= 0) {
            callback(new Error("Invalid parameters"))
        }
        else {
            callback(null, {
                perimeter: () => x * y,
                area: () => 2 * (x + y)
            })
        }
    }, 1000);
}