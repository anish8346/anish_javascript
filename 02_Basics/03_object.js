// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Anish",
    "full name": "Anish Kumar",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "anish@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "anish@chatgpt.com"
Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User,${this.name}`);    
    
}

console.log(JsUser.greeting()); 
console.log(JsUser.greetingTwo);







