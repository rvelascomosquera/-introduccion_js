/**************  Uso de variable Var **************************/

console.log(' **** Uso de variable var ****')
console.log('Operadores logicos')

/* Operadores logicos */

var num1 = 5;
var num2 = 8;

console.log('suma +')
var suma = num1 + num2; 
console.log(suma);

console.log('resta -')
var resta = num1 - num2; 
console.log(resta);

console.log('Multiplicacion *')
var multiplicacion = num1 * num2; 
console.log(multiplicacion);

console.log('División /')
var Division = num1 / num2; 
console.log(Division);

console.log('resto %')
const operadorResto = num1 % num2; 
console.log(operadorResto);

console.log('operador >')
var mayor = num1 > num2; 
console.log(mayor);

console.log('operador <')
var menor = num1 < num2; 
console.log(menor);

console.log('operador <=')
var menorigual = num1 <= num2; 
console.log(menorigual);

console.log('operador >=')
var mayorigual = num1 >= num2; 
console.log(mayorigual);

console.log('igualdad ==')
var igual = num1 == num2; 
console.log(igual);

console.log('comparacion estricta ===')
var igualEstricta = num1 === num2; 
console.log(igualEstricta);

console.log('desigualdad !=')
var desigualdad = num1 != num2; 
console.log(desigualdad);

console.log('desigualdad estricta !==')
var desigualdadEstricta = num1 !== num2; 
console.log(desigualdadEstricta);

console.log('Preincremento ++Variable')
var incrementonum1 = ++num1; 
console.log('el valor incrementado es:', incrementonum1);

console.log('Predecremento --Variable')
var decrementonum2 = --num2; 
console.log('el valor es:', decrementonum2);

console.log('Posincremento Variable++')
console.log('el valor actual de num1 es:', num1);
var Posincrementonum1 = num1++; 
console.log('el valor Posincremento es:', Posincrementonum1);
console.log('el valor final de num1:', num1);

console.log('Posdecremento Variable--')
console.log('el valor actual de num2 es:', num2);
var Posdecrementonum2 = num2--; 
console.log('el valor de  Posdecrementonum2 es:', Posdecrementonum2);
console.log('el valor final de num2:', num2);

/* Tabla de verdad */ 
var valor1 = true;
var valor2 = false;

console.log('conjunción &&')
var conjuncion1 = valor1 && valor1;
var conjuncion2 = valor1 && valor2;
var conjuncion3 = valor2 && valor1; 
var conjuncion4 = valor2 && valor2; 
console.log(' Cuando ambas true', conjuncion1, '\n','cuando true false', conjuncion2,
            '\n','cuando false true', conjuncion3, '\n','cuando false true', conjuncion4);

/* Tabla de verdad */ 
var valor3 = true;
var valor4 = false;

console.log('Disyuncion ||')
var Disyuncion1 = valor3 || valor3;
var Disyuncion2 = valor3 || valor4;
var Disyuncion3 = valor4 || valor3; 
var Disyuncion4 = valor4 || valor4; 
console.log(' Cuando ambas true', Disyuncion1, '\n','cuando true false', Disyuncion2,
            '\n','cuando false true', Disyuncion3, '\n','cuando false true', Disyuncion4);


/**************  Uso de variable const **************************/

console.log(' \n \n \n **** Uso de variable const ****' )
console.log('Operadores logicos')

/* Operadores logicos */

const numero1 = 50;
const numero2 = 5;

console.log('suma +')
const sum = numero1 + numero2; 
console.log(sum);

console.log('resta -')
const rest = numero1 - numero2; 
console.log(rest);

console.log('Multiplicacion *')
const multip = numero1 * numero2; 
console.log(multip);

console.log('División /')
const Div = numero1 / numero2; 
console.log(Div);

console.log('resto %')
const resto = numero1 % numero2; 
console.log(resto);

console.log('operador >')
const mayorque = numero1 > numero2; 
console.log(mayorque);

console.log('operador <')
const menorque = numero1 < numero2; 
console.log(menorque);

console.log('operador <=')
const menorigualque = numero1 <= numero2; 
console.log(menorigualque);

console.log('operador >=')
const mayorigualque = numero1 >= numero2; 
console.log(mayorigualque);

console.log('igualdad ==')
const igualque = numero1 == numero2; 
console.log(igualque);

console.log('comparacion estricta ===')
const comparacionEstricta = numero1 === numero2; 
console.log(comparacionEstricta);

console.log('desigualdad !=')
const desIgualdad = numero1 != numero2; 
console.log(desIgualdad);

console.log('desigualdad estricta !==')
const desIgualdadEstricta = numero1 !== numero2; 
console.log(desIgualdadEstricta);


/* Tabla de verdad */ 
const variable1 = true;
const variable2 = false;

console.log('conjunción &&')
const conjuncionv1 = variable1 && variable1;
const conjuncionv2 = variable1 && variable2;
const conjuncionv3 = variable2 && variable1; 
const conjuncionv4 = variable2 && variable2; 
console.log(' Cuando ambas true', conjuncionv1, '\n','cuando true false', conjuncionv2,
            '\n','cuando false true', conjuncionv3, '\n','cuando  ambas false', conjuncionv4);

/* Tabla de verdad */ 
const variable3 = true;
const variable4 = false;

console.log('Disyuncion ||')
const Disyuncionv1 = variable3 || variable3;
const Disyuncionv2 = variable3 || variable4;
const Disyuncionv3 = variable4 || variable3; 
const Disyuncionv4 = variable4 || variable4; 
console.log(' Cuando ambas true', Disyuncionv1, '\n','cuando true false', Disyuncionv2,
            '\n','cuando false true', Disyuncionv3, '\n','cuando ambas false', Disyuncionv4);


console.log(' **** Uso de variable Let ****')
console.log('Operadores logicos')

/* Operadores logicos */

let dato1 = 15;
let dato2 = 3;

console.log('suma +')
let Rsuma = dato1 + dato2; 
console.log(Rsuma);

console.log('resta -')
let Rresta = dato1 - dato2; 
console.log(Rresta);

console.log('Multiplicacion *')
let Rmultiplicacion = dato1 * dato2; 
console.log(Rmultiplicacion);

console.log('División /')
let Rdivision = dato1 / dato2; 
console.log(Rdivision);

console.log('resto %')
let rResto = dato1 % dato2; 
console.log(rResto);

console.log('operador >')
let Rmayor = dato1 > dato2; 
console.log(Rmayor);

console.log('operador <')
let rmenor = dato1 < dato2; 
console.log(rmenor);

console.log('operador <=')
let rmenorigual = dato1 <= dato2; 
console.log(rmenorigual);

console.log('operador >=')
let rmayorigual = dato1 >= dato2; 
console.log(rmayorigual);

console.log('igualdad ==')
let rigual = dato1 == dato2; 
console.log(rigual);

console.log('comparacion estricta ===')
let rigualEstricta = dato1 === dato2; 
console.log(rigualEstricta);

console.log('desigualdad !=')
let rdesigualdad = dato1 != dato2; 
console.log(rdesigualdad);

console.log('desigualdad estricta !==')
let rdesigualdadEstricta = dato1 !== dato2; 
console.log(rdesigualdadEstricta);

console.log('Preincremento ++Variable')
let rincrementodato1 = ++dato1; 
console.log('el valor incrementado es:', rincrementodato1);

console.log('Predecremento --Variable')
let rdecrementodato2 = --dato2; 
console.log('el valor es:', rdecrementodato2);

console.log('Posincremento Variable++')
console.log('el valor actual de dato1 es:', dato1);
let rPosincrementodato1 = dato1++; 
console.log('el valor Posincremento es:', rPosincrementodato1);
console.log('el valor final de dato1:', dato1);

console.log('Posdecremento Variable--')
console.log('el valor actual de dato2 es:', dato2);
let rPosdecrementodato2 = dato2--; 
console.log('el valor de  Posdecrementodato2 es:', rPosdecrementodato2);
console.log('el valor final de dato2:', dato2);

/* Tabla de verdad */ 
let valordato1 = true;
let valordato2 = false;

console.log('conjunción &&')
let conj1 = valordato1 && valordato1;
let conj2 = valordato1 && valordato2;
let conj3 = valordato2 && valordato1; 
let conj4 = valordato2 && valordato2; 
console.log(' Cuando ambas true', conj1, '\n','cuando true false', conj2,
            '\n','cuando false true', conj3, '\n','cuando false true', conj4);

/* Tabla de verdad */ 
let valordato3 = true;
let valordato4 = false;

console.log('Disyuncion ||')
let Disy1 = valordato3 || valordato3;
let Disy2 = valordato3 || valordato4;
let Disy3 = valordato4 || valordato3; 
let Disy4 = valordato4 || valordato4; 
console.log(' Cuando ambas true', Disy1, '\n','cuando true false', Disy2,
            '\n','cuando false true', Disy3, '\n','cuando false true', Disy4);

