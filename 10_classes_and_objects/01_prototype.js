// Example of true prototypal inheritance style in JavaScript.

// Object creation using the literal object notation {}.
const foo = { name: "foo", one: 1, two: 2 };

// Another object.
const bar = { two: "two", three: 3 };

// Object.setPrototypeOf() is a method introduced in ECMAScript 2015.
// For the sake of simplicity, let us pretend that the following
// line works regardless of the engine used:
Object.setPrototypeOf(bar, foo); // foo is now the prototype of bar.

// If we try to access foo's properties from bar from now on, 
// we'll succeed. 
console.log(bar.one); // Resolves to 1.

// The child object's properties are also accessible.
bar.three; // Resolves to 3.

// Own properties shadow prototype properties.
bar.two; // Resolves to "two".
bar.name; // Unaffected, resolves to "foo".
foo.name; // Resolves to "foo".