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

const mark = {
	fullName: 'Mark Miller',
	mass: 78,
	height: 1.69,
	calcBmi: function () {
		this.bmi = this.mass / this.height ** 2;
		return this.bmi;
	},
};

const john = {
	fullName: 'John Smith',
	mass: 92,
	height: 1.95,
	calcBmi: function () {
		this.bmi = this.mass / this.height ** 2;
		return this.bmi;
	},
};

if (mark.calcBmi() > john.calcBmi()) {
	console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);
} else {
	console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`);
}

// Loops

console.log('Lifting weights repetition 1');
console.log('Lifting weights repetition 2');
console.log('Lifting weights repetition 3');
console.log('Lifting weights repetition 4');
console.log('Lifting weights repetition 5');

for (let rep = 1; rep <= 10; rep++) {
	console.log(`Lifting weights repetition ${rep}`);
}

let namesArray = ['Milosz', 'Lukasz', 'Koks', 'Peter', 'Steven'];
for (let i = 0; i < namesArray.length; i++) {
	console.log(`The value of the element number ${i} is ${namesArray[i]}`);
}

let emptyArray = [];

for (let i = 0; i < namesArray.length; i++) {
	emptyArray.push(typeof namesArray[i]);
}

console.log(emptyArray);

const yearsArray = [1991, 2007, 1969, 2020];
const agesArray = [];

for (let i = 0; i < yearsArray.length; i++) {
	agesArray.push(2026 - yearsArray[i]);
}

console.log(agesArray);

const numbersArray = [1, 2, 3, 4, 5, 'random string', true, null, undefined, {}, []];

for (let i = 0; i < numbersArray.length; i++) {
	if (typeof numbersArray[i] === 'object') {
		console.log(`Element number ${i} is an object, skipping...`);
		break;
	} else if (typeof numbersArray[i] !== 'number') {
		console.log(`Element number ${i} is not a number, it's a ${typeof numbersArray[i]}`);
		continue;
	}
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
	console.log(`You rolled a ${dice}`);
	dice = Math.trunc(Math.random() * 6) + 1;
	if (dice === 6) {
		console.log('Loop is about to end...');
	}
}

const calcTip = function (bill) {
	return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

/* Write your code below. Good luck! 🙂 */

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];

const totals = [];

for (let i = 0; i < bills.length; i++) {
	tips.push(calcTip(bills[i]));
}

for (let i = 0; i < bills.length; i++) {
	totals.push(bills[i] + tips[i]);
}

console.log(tips);
console.log(totals);

function calcAverage(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum / arr.length;
} 

console.log(calcAverage(totals));
