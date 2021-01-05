/**
 * Buffer module is used to convert objects into buffers
 * More details: https://nodejs.org/dist/latest-v12.x/docs/api/buffer.html
 */

//Transfer a text into a buffer using utf8 encoding
const bufferedText = Buffer.from('I\'m a developer', 'utf8');
const hexText = bufferedText.toString('hex');
const base64Text = bufferedText.toString('base64');

//prints: 49 27 6d 20 61 20 64 65 76 65 6c 6f 70 65 72
console.log('Text in utf8: ' + bufferedText);

//prints: 49276d206120646576656c6f706572
console.log('Text in hex: ' + hexText);

//prints: SSdtIGEgZGV2ZWxvcGVy
console.log('Text in base64: ' + base64Text);

//prints: I'm a developer
console.log('Text decoded: ' + Buffer.from(base64Text, 'base64').toString('utf-8'));