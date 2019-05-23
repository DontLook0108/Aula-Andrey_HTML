var botao = document.form.botao;
botao.addEventListener("click", function(){
    event.preventDefault();

    var saud = document.querySelector(".form");
    saud.style.color = "green";
    var nome = document.form.nome;
    var sobrenome = document.form.sobrenome;

    saud.textContent = "Parabens "+nome.value+" "+sobrenome.value;
    
});