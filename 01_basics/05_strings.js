const name = "Tejas"
console.log(name + " " + "S");

// String interpolation
console.log(`Name: ${name} S`)

const stringName = new String(name);
console.log(stringName);            // Tejas
console.log(stringName[0]);         // T
console.log(stringName.__proto__);  // {}
console.log(stringName.length);     // 5
console.log(stringName.toUpperCase()); // TEJAS
console.log(stringName.charAt(3));  // a
console.log(stringName.indexOf('a'));   // 3
console.log(stringName.substring(0, 3)); // Tej

const newStr = 'Tejas'.slice(-5, 2) // Te
console.log(newStr); 

const newName = new String("   Test   ")
console.log(newName.trim());                // Test
console.log(newName.replaceAll(" ", "-"));  // ---Test---
console.log(newName.includes('est'));       // true

const games = new String("contra-gta-fifa-ea")
console.log(games.split('-'));       // [ 'contra', 'gta', 'fifa', 'ea' ]
console.log(games.split('-', 2));    // [ 'contra', 'gta' ]








