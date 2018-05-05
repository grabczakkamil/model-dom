'use strict';
var btn = document.getElementById("wyslij");
var output = document.querySelector("#output");

btn.addEventListener('click', function(e){
    e.preventDefault();
    var imie = document.getElementById("imie").value;
    var nazwisko = document.getElementById("nazwisko").value;
    
    output.innerHTML = "<p>imie: " + imie + "</p><p>nazwisko: " + nazwisko + "</p>";
    
});




