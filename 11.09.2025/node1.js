const readline = require('node:readline');

let z2;
const z3 = [1, 2, 3, 4];

function czyParzysta(z2){

if (z2 % 2 == 0){
	console.log('parzysta');
}
else{
	console.log('nieparzysta');
}
};

console.log('suma elementów tablicy: ' + suma(z3));
console.log('iloczyn elementów tablicy: ' + mnozenie(z3));


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('podaj liczbe: ', liczba => {
  console.log(czyParzysta(liczba));
  rl.close();
});

function suma(tablica){
	let wynik = 0;
	for (elem of tablica){
		wynik = wynik + elem;
	};
	return wynik;
};

function mnozenie(tablica){
	let wynik = 1;
	for (elem of tablica){
		wynik = wynik * elem;
	};
	return wynik;
};