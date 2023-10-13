let tarifaHora = 0; 
let horaEstacionado = 0 ; 
let cobro = 0; 


tarifaHora = Number(prompt(" Ingrese la tarifa por hora "));
horaEstacionado = Number(prompt(" Ingrese las horas en las que estuvo estacionado"));

cobro = Math.ceil(horaEstacionado) * tarifaHora ; 

alert(`El cobro por las horas estacionado es de ${cobro}`); 

console.log('tarifa por hora : $'+ tarifaHora); 
console.log('horas estacionado: '+ horaEstacionado);
console.log("el cobro por las horas estacionadas es: $" + cobro); 


