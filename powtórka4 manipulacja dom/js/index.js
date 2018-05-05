'use strict';
var paragraf = document.getElementById("copy");
var btnCopy = document.getElementById("btn-c");
var btnPaste = document.getElementById("btn-p");
var output = document.getElementById("output");

var txt = "";

btnCopy.addEventListener('click', function() {
    txt = paragraf.innerHTML;
});

btnPaste.addEventListener('click', function(){
    if(txt == "" ) {
        output.innerHTML = "Skopiuj tekst";
    } else {
        output.innerHTML = txt;
    }
    
        
})