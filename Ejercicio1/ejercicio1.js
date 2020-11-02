//Inicio//


//Declarar variables//
let N1;
let N2;
let Suma = 0;

//Leer datos//
/*N1 = Number(prompt('Ingrese el valor para Número 1'));
N2 = Number(prompt('Ingrese el valor para Número2'));*/

//Realizar proceso//

Suma = N1 + N2;

//---------------------------------------------------------------------------------------------------------->//

//Imprimir//
console.log('La suma es:' + Suma);

//Problema 1 "Promedio de notas"//
//Inicio//
//Declarar Variables//

let parcialUno = 3.5;
let parcialDos = 4.0;
let parcialTres = 4.5;
let numNotas = 3;
let totalParciales = (parcialUno + parcialDos + parcialTres)/numNotas;

let exaFinal = 3.8;
let proFinal = 4.2;

let pesoParciales = 0.55;
let pesoexaFinal = 0.30;
let pesoproFinal = 0.15;

//Realizar proceso

let promedNotas = (totalParciales*pesoParciales) + (exaFinal*pesoexaFinal) + (proFinal*pesoproFinal);

//Imprimir
console.log("Promedio de notas en lógica y programación es :" + " " + promedNotas);

document.querySelector(".rNumUno").innerHTML = "Respuesta";

document.querySelector(".rUno").innerHTML = ("Promedio de notas en lógica y programación es :" + " " + promedNotas);

//Final//

//--------------------------------------------------------------------------------------------------------->//

//Problema 2 "Participación inversionistas"//
//Inicio//
//Declarar Variables//

let inverUno = 'Carlos Mario';
let inverDos = 'Hugo Alberto';
let inverTres ='Edison Andrés';
let pesoInver1 = 44414407;
let pesoInver2 = 24226040;
let pesoInver3 = 12113020;

//Realizar proceso

let inverTotal = `${pesoInver1 + pesoInver2 + pesoInver3}`; 
let inverMayor = `${parseInt(pesoInver1/inverTotal*100)}`;
let inverMedio = `${parseInt(pesoInver2/inverTotal*100)}`;
let inverModerado = `${parseInt(pesoInver3/inverTotal*100)}`;

let iM = `La mayor inversión es la hecha por ${inverUno},`;
let iMQ = `$COP ${pesoInver1} pesos es la cantidad de su inversión;`;
let iMQP = `equivalente al ${inverMayor}%.`;

let iMdo = `La inversión media es la hecha por ${inverDos};`;
let iMdoQ = `$COP ${pesoInver2} pesos es la cantidad de su inversión;`;
let iMdoQP = `equivalente al ${inverMedio}%.`;

let iMrdo = `La inversión moderada es la hecha por ${inverTres},`;
let iMrdoQ = `$COP ${pesoInver3} pesos es la cantidad de su inversión;`;
let iMrdoQP = `equivalente al ${inverModerado}%.`;

let textToShowOne = `${iM} <br>
                     ${iMQ} <br>
                     ${iMQP}<br>`; 
let textToShowTwo = `${iMdo} <br> 
                     ${iMdoQ} <br>
                     ${iMdoQP}<br>`;
let textToShowThree = `${iMrdo}<br>
                       ${iMrdoQ}<br>
                       ${iMrdoQP}<br>`;

let textToShow = `${textToShowOne} 
                  <br> 
                  ${textToShowTwo}
                  <br>
                  ${textToShowThree}`;


//Imprimir

document.querySelector(".rNumDos").innerHTML = "Respuesta";

let mainAnswer = document.querySelector('.rDos');
mainAnswer.innerHTML = `${textToShow}`;
//Final//

//------------------------------------------------------------------------------------------------------------>//

//Problema 3 "La Edad de madre e hijos"//
//Inicio//
//Declarar Variables//

let ageJuan = 27;
let ageAlberto = (ageJuan*2)/3;
let ageAna = (ageJuan*4)/4;
let ageMamá = ageJuan + ageAlberto + ageAna;





document.querySelector(".rNumTres").innerHTML = "Respuesta";






















/*Este es el archivo dos creado en git*/
