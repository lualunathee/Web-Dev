// Не будет ошибкой
let message = "hello";
message = 123456;

alert( 1 / 0 ); // Infinity
alert( Infinity ); // Infinity
alert( "не число" / 2 ); // NaN, такое деление является ошибкой

alert( NaN + 1 ); // NaN
alert( 3 * NaN ); // NaN
alert( "не число" / 2 - 1 ); // NaN

console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992

// символ "n" в конце означает, что это BigInt
const bigInt = 1234567890123456789012345678901234567890n;

//STRING
let str = "Привет";
let str2 = 'Одинарные кавычки тоже подойдут';
let phrase = `Обратные кавычки позволяют встраивать переменные ${str}`;

//BOOLEAN
let nameFieldChecked = true; // да, поле отмечено
let ageFieldChecked = false; // нет, поле не отмечено

//NULL
let age1 = null;

//UNDEFINED
let age = 123;

// изменяем значение на undefined
age = undefined;

alert(age); // "undefined"

//TYPEOF
// Обычный синтаксис
typeof 5 // Выведет "number"
// Синтаксис, напоминающий вызов функции (встречается реже)
typeof(5) // Также выведет "number"


typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)

//1
let name = "Ilya";

alert( `hello ${1}` ); // ?

alert( `hello ${"name"}` ); // ?

alert( `hello ${name}` ); // ?

