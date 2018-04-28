'use strict';

document.getElementsByTagName("input")[0].onclick = ustawTlo;

function ustawTlo() {
    var pElements = document.body.getElementsByTagName("p");


    var myp1 = pElements[0];
    myp1.style.background = "rgb(255,0,0)";

    var myp2 = pElements[1];
    myp2.style.background = "rgb(255,255,0)";

}