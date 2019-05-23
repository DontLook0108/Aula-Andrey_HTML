var p = document.querySelector("#texto");
console.log(p);

p.addEventListener("click", function(){
    if (p.style.color = "green") {
        p.style.color = "red";
    } else {
        if (p.style.color = "red")
        p.style.color = "green";
    }
})