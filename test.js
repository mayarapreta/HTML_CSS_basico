var nome="mayara";
var idade= 20;
var idade2=17;
var frase = " Vasco melhor time!"
alert("Primeiro JavasScript da " + nome+ "que tem  " + idade + "anos");
console.log(nome);
console.log(idade + idade2);
console.log(frase)
console.log(frase.replace(" O Melhor time", "A Melhor nação"))
console.log(nome.toUpperCase());
console.log(frase.toLowerCase());

var lista = ["Maça","Pera","Laranja"];
console.log(lista);
console.log(lista[1]);
lista.push("Uva");
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join("-"));

var frutas = [{nome: "Maça" , cor:"Vermelha"},
{nome:"Uva" , cor: "rouxa"}]
console.log(frutas);
console.log(frutas[1].nome);

var idade = prompt("Qual é a sua idade ?" );
if (idade > 18 ){
  alert("maior de idade");
  
}else {
  alert("menor de idade");
}

var count = 5;
while (count < 5){
  console.log(count);
  count = count + 1 ;

}

var count;
for (count = 0; count <= 5; count++){
  console.log(count);
}
 var d = new Date();
 alert(d.getMinutes());
 alert(d.getHours());
 alert.apply(d.getDay());

 function soma(n1,n2){
  return n1+n2;
 }
 alert(soma(5,10));

function validaIdade(idade){
  var valida;
  if(idade >18){
    valida = true;
  }else {
    valida = false;
  }
  return valida;
}
 var idade = prompt("Qual é sua idade?");
 console.log(validaIdade(idade));