var login = document.querySelector(".login"); 
var usuario = document.login.usuario; 
var senha = document.login.senha; 
senha.addEventListener("blur", function(){
    document.login.usuario.value = senha.value;
});

