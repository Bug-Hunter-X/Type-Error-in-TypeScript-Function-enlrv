function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterArray(persons: string[]): string {
  return "Hello, " + persons.join(', ');
}

let user = ["Jane User", "Peter Jones"];

console.log(greeter(user[0])); //Fixed: Accessing the first element of the array
console.log(greeterArray(user)); //Fixed: Using a function that accepts an array