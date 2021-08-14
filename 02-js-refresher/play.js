// hobbies is just a pointer to a place in memmory,
// therefor we can modify the list as long as we don't modify
// the pointer
const hobbies = ["Sports", "Guitar", "Ski"];
hobbies.push("Programming");
console.log(hobbies);

// Objects and arrays behave this way

const hobbiesCopy = [...hobbies]; 
// The three dots are called the spread operator and it can deep copy objects and arrays

// In this functin the three dots are called the rest operator and it bundles the arguments
// in a single array
const toArray = (...args) => {
	return args;
}

// Object Destructuring
const obj = {
	a: 1,
	b: 2,
	c: 3
}

// We can get just a specific part of an object in a function
// This will pull the value of the key 'a' of the object passed.
const printA = ({ a }) => {
	console.log(a);
}

printA(obj);

// Array destructuring
// It's the same as object destructuring but instead of {} we just use []
// The objects in the array are pulled by position