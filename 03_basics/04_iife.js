// Immediately Invoked Function Expressions
// Start of app
// immediately invoke insied a scope
// do not get polluted from global scope
// for avoid pollution from global scope

(() => {
    console.log("DB CONNECTED");
})();
// semi colon is mandatory

(() => {
    console.log("DB CONNECTED");
})();


((name) => {
    console.log(`DB CONNECTED: ${name}`);
})('Database 2')
