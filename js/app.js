console.log("Hello World!");
//задать переменные
let name = "Eric Laossaar";
let age = 16;
let survived = true;
let commentary = "";
let drivingLicense = "";
let city = "Tallinn";
//console.log("Character: ", name, ". Age: ", age, ". City: ", city)
console.log(`Character: ${name}. Age: ${age}. City: ${city}.`);

if(survived){
    commentary = "Survived in the car accident.";
} else {
    commentary = "Died in the car accident.";
}
console.log(`Character ${name} ${commentary}`);

if(age < 18) {
  drivingLicense = `${name} is too young to drive a car.`;
} else {
  drivingLicense = `${name} is old enough to drive a car.`;
}

console.log(drivingLicense);

const html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>City: ${city}</li>
        <li>He ${commentary}</li>
        <li>${drivingLicense}</li>
    </ul>    

`;

document.body.innerHTML = html;