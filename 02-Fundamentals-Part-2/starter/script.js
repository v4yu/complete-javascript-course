// Możemy odnosić się do elementów tablicy tylko za pomocą kolejności w tablicy
const miloszArray = ['Jonas', 'Brothers', 2042 - 1024, ['Michael', 'Steven', 'Peter']];

// W przypadku obiektów możemy się odnosić przy pomocy właściwości
// object literal syntax
const milosz = {
	firstName: 'milosz',
	lastName: 'cebula',
	age: 24,
	job: 'junior developer',
	friends: ['Peter', 'Lukasz'],
};

console.log(miloszArray[0]);
console.log(milosz.firstName);

milosz.lastName = 'testing';

console.log(milosz);

// milosz = 'test';

console.log(milosz.lastName);
console.log(milosz['lastName']);

const nameKey = 'Name';

console.log(milosz['first' + nameKey]);
console.log(milosz['last' + nameKey]);

// const choice = prompt(
// 	`What do you want to know about Milosz? \n Choose between: firstName, lastName, age, job, friends`,
// );

// console.log(milosz[choice]);

// Jak spróbujemy dostać się do własności obiektu która nie istnieje, to wtedy dostajemy undefined. Czyli jak spróbujemy dać pusty prompt to wtedy właśnie otrzymamy undefined

// if (milosz[choice]) {
// 	// console.log('Poprawnie');
// 	console.log(milosz[choice]);
// } else {
// 	console.log('Nie poprawnie');
// }

// W taki sposób mozemy dodawać kolejne właściwości do obiektów
milosz.country = 'Poland';
milosz['city'] = 'Tarnowskie gory';

console.log(milosz.country);
console.log(milosz.city);

console.log(milosz);

// Challenge
// "Milosz has 3 friends, and his best friend is called Michael"

console.log(
	`${milosz.firstName} has ${milosz.friends.length} friends, and his best friend is called ${milosz.friends[1]}`,
);

const milosz2 = {
	firstName: 'milosz',
	lastName: 'cebula',
	age: null,
	job: 'junior developer',
	friends: ['Peter', 'Lukasz'],
	hasDriverLicense: true,
	birthYear: 2001,
	// Funkcje w obiekcie to po prostu metody
	// function value
	getSummary: function () {
		return this;
	},
	calcAge: function () {
		return 2025 - this.birthYear;
	},
	calcAge2: function (birthYear) {
		return 2025 - birthYear;
	},
};

console.log(milosz2.getSummary());
console.log(milosz2.calcAge());
console.log(milosz2.calcAge2(2001));

// W obiekcie tylko expression nie deklareacja

let lukaszKoks = true;
console.log(lukaszKoks);

console.log(lukaszKoks2);
var lukaszKoks2 = true;
console.log(lukaszKoks2);

const thirdPerson = {
	firstName: 'Lukasz',
	lastName: 'Koks',
	// age: 30,
	job: 'Senior Developer',
	yearOfBirth: 1995,
	driverLicense: false,

	// calcBirthYear: function () {
	// 	// Tak nie robimy, bo wtedy niezgodne z dry
	// 	return 2025 - thirdPerson.age;
	// },
	calcAge: function (currentYear) {
		this.age = currentYear - this.yearOfBirth;
		// Takie returnowanie to dobra praktyka
		return this.age;
	},

	getSummary: function () {
		this.summary = `${this.firstName} is a ${this.age}-year old ${this.job} and he has ${this.driverLicense ? 'a' : 'no'} driver's license.`;
		return this.summary;
	},
};

console.log(thirdPerson.calcAge(2025));
console.log(thirdPerson.age);
console.log(thirdPerson.age);

console.log(thirdPerson.getSummary());

console.log(thirdPerson);

const counter = (function () {
	let counter = 0;
	return {
		increment: function () {
			counter++;
			return counter;
		},
	};
})();

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());

console.log(thirdPerson.summary);
