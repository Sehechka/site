/* Примитивные */
var str="Bla bla bla",
	number = 1,
	numberSecond = 2.4,
	bool = true,
	undef,
	nuull = null;

/* Объектные */
	var obj = {
		prop: "yo",
		prop: function () {

		}
	},
	regexp = /baba/g,
	func = function(){},
	arr = [1,2,3];

	obj.prop = 'loftblog';
	arr[2] =24;

/* Обёртки */
var num = String('124');
num.prop = 'Строка в числе!!!';
var numObj = new String('124');
numObj.prop = 'Строка в числе!!!';

//console.log(typeof num.toString() );
//console.log(num);

//console.log(typeof numObj.toString() );
//console.log(numObj);

//5+2; //выражение, в результате парсер вернёт 7
var statement; // Инструкция (команда)
statement = 5+2; // выражение
var str = 'fhfj'; // Литерал строки


//ОПЕРЕТОРЫ

//арифмитические (основные)
// 2+3 //5
// 5-4 //1
// 2*2 //4
// 6/2 //3
// 5%2 //1 (модуль, остаток от деления 1)

// (2+3)*5

// = //присваивает

var i=2;
var b=2;
// console.log(i++);
// console.log(--b);

++i // Префексная форма, добавляется 1 и сразу записывается в i
i++ // Посфиксная форма, возвращается значение старой переменной, после этого добавляется 1
++i;// оператор инкримента увеличивает переменную на 1
--i;// оператор дикримента уменьшает переменную на 1

var m=10;
// console.log(m+=2);

// for(var a=1,b=2,c=3; b<3; b++) {

// }                     // Оператор ',' когда в одной инструкции нужно сделать несколько действий


//сравнения
var a=0,
	b=false;
a<b; 
a>b;
a>=b;
a<=b;
//забыть об этих операторах, т.к не различают тип данных
a==b;
a!=b;
// Использовать!
a===b;
a!==b;

//условные
var	age = 24;

// if (age === 18) {
// 	alert('Вы взрослый!!!');
// } else if (age === 21) {
// 	alert('Держите пиво!!!');
// } else if (age === 24) {
// 	alert ('Cтарик');
// } else {
// 	alert('Вам нет 18!')
// }


//тернарный оператор
// var age = 21;
// (age ===18) ? alert('Вы взрослый!!!') :
// 			  (age === 21) ? alert('Держи пиво') :
// 			  (age === 24) ? alert('Cтарик') :
// 			  			   alert('Вам нет 18!')

//логические

// ||  // или
// &&  // и
// !   // не
// var age = 19;
// (age >= 18 && age <= 50) ? alert('Вы взрослый!') : alert ('Малой');


//побитовые

 var numder = 234;

 console.log( numder.toFixed(2) );
