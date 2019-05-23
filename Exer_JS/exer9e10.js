var lamp = document.querySelector("#lampada");

lamp.addEventListener("mouseover",function(evento){
evento.preventDefault();

    if(lamp.getAttribute('src')=="img/lampada_apg.jpg"){
        lamp.src = "img/lampada_acs.jpg";
    }else{
        lamp.src = "img/lampada_apg.jpg";
    }
});

