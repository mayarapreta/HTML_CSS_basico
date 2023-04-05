function botao(){
  document.getElementById("agredecimento").innerHTML="<b>Obrigado por clicar!";
    console.log(document.getElementById("agredecimento"));
}
function redirecinar(){
  window.open("http://github.com/mayarapreta");
  window.location.href ="mayarapreta";
}
function troca(elemento){
  //document.getElementById("mousemove").innerHTML="Obrigado  por passar o mause!"
  elemento.innerHTML="Obrigado por passar mouuse!"
}
function volta(elemento){
  //document.getElementById("mousemove").innerHTML="Obrigado  por passar o mause!"
  elemento.innerHTML="Obrigado por passar mouuse!"
}
function load(){
  alert("Página carregada!");
}
function funcaoChange(elemento){
  console.log(elemento.value)
} //coleta valores