var img_array = [
    "img/lampada_apg.jpg", 
    "img/lampada_acs.jpg"
];

addEventListener("click",function trocar(){
    if (cont == img_array.length) {
        document.getElementById("lampada").src ="img/lampada_apg.jpg";
    }
    document.getElementById("lampada").src="img/lampada_acs.jpg";
})


