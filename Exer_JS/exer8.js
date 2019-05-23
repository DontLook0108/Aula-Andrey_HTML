var lista = document.querySelector("#lista");
var nomes = lista.querySelectorAll(".nomes");

for(var cont = 0; cont < nomes.length; cont++)
{
    var nomes = nomes[cont];

    var pri = lista.querySelector(".primeiro");
    var seg = lista.querySelector(".segundo");
    var ter = lista.querySelector(".terceiro"); 
    var qua = lista.querySelector(".quarto"); 
    var qui = lista.querySelector(".quinto");

    if(pri.addEventListener("click", function(){
        alert(pri.textContent);
    }));

    if(seg.addEventListener("click", function(){
        alert(seg.textContent);
    })); 

    if(ter.addEventListener("click", function(){
        alert(ter.textContent);
    })); 
    
    if(qua.addEventListener("click", function(){
        alert(qua.textContent);
    })); 
    
    if(qui.addEventListener("click", function(){
        alert(qui.textContent);
    })); 
} 

//var nomes =document.querySelector("li"); 
//nomes.forEach(function(nome){
    //nome.addEventListener("click", function(){
        //alert(this.textContent);
    //});
//});
