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

const choice = prompt(
	`What do you want to know about Milosz? \n Choose between: firstName, lastName, age, job, friends`,
);

// console.log(milosz[choice]);

// Jak spróbujemy dostać się do własności obiektu która nie istnieje, to wtedy dostajemy undefined. Czyli jak spróbujemy dać pusty prompt to wtedy właśnie otrzymamy undefined

if (milosz[choice]) {
	// console.log('Poprawnie');
	console.log(milosz[choice]);
} else {
	console.log('Nie poprawnie');
}

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
