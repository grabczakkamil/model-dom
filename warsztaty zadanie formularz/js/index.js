'use strict';


var submitButton = document.querySelector("input[type=submit]");

submitButton.onclick = function(e) {
    e.preventDefault();
    var inputs = e.currentTarget.parentElement.getElementsByTagName("input");
    console.log(inputs[0].value);
    console.log(inputs[1].value);
}

//var submitButtons=document.querySelectorAll("input[type=submit]");
//
//submitButtons.forEach(addOnclickToSubmitButtons));
//
//function addOnclickToSubmitButtons (button) {
//    button.onclick = logInputsInSubmitButtonsForm;
//}
//
//function logInputsInSubmitButtonsForm(e) {
//    e.preventDefault;
//    var inputs = e.currentTarget.parentElement.getElementsByTagName("input");
//    
//    for (var i = 0; i<inputs.length; i++) {
//        if(inputs[i].type == "submit")
//    {
//        continue;
//    }
//    
//    console.log(inputs[i]).name + ": " + inputs[i].value);
//    }
//    
//}


