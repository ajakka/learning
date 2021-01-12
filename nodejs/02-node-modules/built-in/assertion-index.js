/**
 * Assert module is used to compare objects and point diffrences
 * More details: https://nodejs.org/dist/latest-v12.x/docs/api/assert.html
 */
const assert = require('assert').strict;

function startWithAssertion() {
    equalNames('Abd-errAhiM', 'abderrahim');
    equalNames('abderrahim', 'abderrahim');
}
startWithAssertion();

function equalNames(name1, name2) {
    try {
        assert.deepStrictEqual(name1, name2, 'not equal names');
        console.log('equal names')
        return true;
    } catch (error) {
        console.log('not equal names')
        return false;
    }
}