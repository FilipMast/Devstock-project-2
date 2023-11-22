// Zadania ze Zmiennych
// a) Zadeklaruj zmienną typu number i przypisz do niej dowolną liczbę całkowitą.
const num = 10;
// b) Utwórz zmienną typu string przechowującą twoje imię.
const name = "Filip";
// c) Zainicjalizuj zmienną bez wartości, a następnie przypisz do niej dowolny tekst.
let person;
person = "Kowalski";
// d) Stwórz zmienną const i przypisz do niej obiekt z dwoma kluczami: name (string) i age (number).
const peaple = {
  name: "Filip",
  age: 35,
};
// e) Zadeklaruj dwie zmienne: jedną używając let, drugą const i przypisz do nich wartości logiczne.
let first = true;
const second = false;
// f) Stwórz zmienną, która będzie przechowywać sumę dwóch liczb.
const a = 5;
const b = 6;
const c = a + b;
console.log(c);
// g) Utwórz zmienną przechowującą twoje pełne imię i nazwisko jako jedną wartość typu string.
const surname = "Filip Mastrzykowski";
// h) Zainicjalizuj zmienną z liczbą zmiennoprzecinkową.
const num2 = 1.5;

// i) Zadeklaruj zmienną i przypisz do niej wynik działania matematycznego (np. dodawanie).
const d = 2 + 8;
console.log(d);
// j) Stwórz zmienną przechowującą twoje miasto jako ciąg znaków.
let city = Kraków;

// Zadania z Prostych i Złożonych Typów Danych
// a) Utwórz tablicę zawierającą trzy różne typy danych.
const arr = [1, "string", {}];
// b) Stwórz obiekt car z właściwościami make, model i year.
const car = {
  make: "Lexus",
  model: "RC 200T",
  year: 2017,
};
// c) Zadeklaruj tablicę z trzema różnymi wartościami liczbowymi.
const arr2 = [1, 2, 3];
// d) Utwórz obiekt reprezentujący osobę, zawierający klucze name, age i isStudent (boolean).
const person2 = {
  name: "Filip",
  age: 35,
  isStudent: false,
};
// e) Zadeklaruj zmienną przechowującą pusty obiekt, a następnie dodaj do niego klucz color z wartością typu string.
const emptyObj = {};
emptyObj = { color: "red" };
console.log(emptyObj);
// f) Stwórz tablicę obiektów, gdzie każdy obiekt reprezentuje zwierzę z kluczami name (string) i age (number).
const animals = [
  { name: "Tiger", age: 6 },
  { name: "Cat", age: 9 },
  { name: "Elephant", age: 70 },
];
// g) Utwórz zmienną przechowującą tablicę z różnymi wartościami boolean.
const arr3 = [false, true, true, false];
// h) Stwórz obiekt student z kluczami name (string), grades (tablica liczb) i isActive (boolean).
const student = {
  name: "",
  grades: [],
  isActive: true,
};
// i) Zadeklaruj tablicę zawierającą różne typy danych, w tym co najmniej jeden obiekt.
const arr4 = [1, "string", [{}], {}, true];
// j) Utwórz obiekt reprezentujący książkę z kluczami title, author i yearPublished.
const book = {
  title: "Otoczeni przez idiotów",
  author: "Thomas Erikson",
  yearPublished: 2017,
};

// Zadania z Warunków i Operatorów Trójargumentowych
// a) Napisz warunek if, który sprawdzi, czy zmienna typu number jest większa od 10.
if (num > 10) {
  console.log("Zmienna jest większa od 10");
}
// b) Stwórz warunek if, który sprawdzi, czy zmienna tekstowa jest równa "Hello".
const text = "noHello";
if (text == "Hello") {
  console.log("Zmienna jest równa Hello");
} else {
  console.log("Zmienna nie jest równa Hello");
}
// c) Użyj operatora ternarnego do przypisania do zmiennej wartości w zależności od innego warunku logicznego.
const legs = 2;
let numOfLegs = legs == 2 ? true : false;
console.log(numOfLegs);
// d) Napisz warunek, który sprawdzi, czy zmienna age jest większa lub równa 18.
const checkAge = age >= 18 ? true : false;
//lub
if (age >= 18) {
  console.log("Wartość jest wyższa niż: " + age);
} else {
  console.log("Wartość jest niższa niż: " + age);
}
// e) Stwórz warunek if-else, który sprawdzi, czy tablica jest pusta.
const newArr = [];
if (newArr.length == 0) {
  console.log("Tablica jest pusta");
} else {
  console.log("Tablica nie jest pusta");
}
// f) Użyj operatora ternarnego do sprawdzenia, czy zmienna isMember jest prawdziwa, i na tej podstawie przypisz rabat.

// g) Napisz warunek if, który sprawdzi, czy długość ciągu znaków w zmiennej jest większa niż 5.
// h) Stwórz warunek if-else, który sprawdzi, czy liczba jest parzysta lub nieparzysta.
// i) Użyj operatora ternarnego do wyboru między dwoma różnymi wartościami tekstowymi w zależności od warunku.
// j) Napisz warunek if, który sprawdzi, czy obiekt ma określony klucz.
const obj2 = {
  name: "",
  age: 12,
};

if ("name" in obj2) {
  console.log("W objekcie znajduje się klucz name");
} else {
  console.log("W obiekcie brakuje klucza name");
}
