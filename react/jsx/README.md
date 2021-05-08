## JSX Section   

### Introduction
```js
const h1 = <h1>Hello world</h1>;
```
JSX is a syntax extension for JavaScript. It was written to be used with React. JSX code looks a lot like HTML.   
JSX code can be treated like normal code, in that it can be assigned to variables, passed to & returned from functions...   

### Examples

```js
// Nested JSX elements
const link = (
  <a href="https://www.example.com">
    <h1>Example Link</h1>
  </a>
);

// Object with multiple JSX attributres
const muti = {
  name: <li>Name</li>,
  password: <li>Password</li>,
  address: <li>Address</li>,
};

// Function returning JSX code
const card = (name) => {
  return <h4>Hello my name is {name}</h4>
};
```

### Attributes    
JSX also allows for attributes just like in HTML    
```js
const h1 = <h1 id="main">Hello world</h1>;
```
In the example above, the attribute ___id___ is as 

























