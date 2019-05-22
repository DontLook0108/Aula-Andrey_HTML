var form = document.querySelector(".form");  
console.log(form);
var erro = document.form.erro;
var nome = document.form.nome;
var sobrenome = document.form.sobrenome;
var botao = document.form.botao;
 
botao.addEventListener("click", function validarFormulario(form){
    if(nome.length < 3 || nome.value == "" || nome.value == null)
    erro.textContent += "Nome invalido"; 
    if(sobrenome.length < 3 || sobrenome == "" || sobrenome == null) 
   erro.textContent += "Sobrenome invalido"; 
    else {
        
    }
})