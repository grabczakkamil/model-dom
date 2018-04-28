'use strict';
//document.getElementsByTagName("input")[0].onclick = function(e) {e.preventDefault();
//                            
//var fname = document.getElementById("imie");
//                                                                }

var submitButton = document.querySelector("input[type=submit]");

submitButton.onclick = function(e) {
    e.preventDefault();
    var inputs = e.currentTarget.parentElement.getElementsByTagName("input");
    console.log(inputs[0].value);
    console.log(inputs[1].value);
}
