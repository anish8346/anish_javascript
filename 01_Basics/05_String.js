const name = "Anish"
const repoCount = 50

// console.log(name + repocount + "Value");

//console.log(`Hello My name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Anish-hc-com')

//console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.charAt(2));
//console.log(gameName.indexOf('i'));

const newString = gameName.substring(0,4)
//console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "    Anish Kumar " 
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(URL.replace('%20', '-'));
console.log(url.includes('sundar'))
console.log(gameName.split('-'));











