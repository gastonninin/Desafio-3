var operacion = prompt('¿Qué operación desea realizar?');
var num1 = prompt('Ingrese un valor');
var num2 = prompt('Ingrese un segundo valor');
var sum = num1 + num2;

if(operacion === 'sum') {
	console.log("El resultado de la suma es " + (num1+num2));
} 

if(operacion === 'res') {
	console.log("El resultado de la resta es " + (num1-num2));
} 

if(operacion === 'mul') {
	console.log("El resultado de la multiplicación es " + (num1*num2));
} 

if(operacion === 'div') {
	console.log("El resultado de la división es " + (num1/num2))
}
	while(num2 === 0)
        alert("Ingrese otro valor distinto de 0");
        var num2 = prompt("Ingrese otro valor");
   
	console.log("El resultado de la división es " + (num1/num2));
}
