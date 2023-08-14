import { areaQuadrado, perimetroQuadrado, IMC } from "./quadrado.js";
import numeroAleatorio from "./numeroAleatorio.js";
import Circulo from "./Circulo.js";

console.log(areaQuadrado(4));
console.log(perimetroQuadrado(5));
console.log(IMC(62, 1.75));

console.log(numeroAleatorio());

console.log(Circulo.area(5));
console.log(Circulo.circunferencia(5));
console.log(Circulo.circunferencia(150));
console.log(Circulo.aleatorio());
