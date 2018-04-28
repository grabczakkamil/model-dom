'use strict';
//var wszystkieZgody = document.getElementById("wszystkie-zgody");
//var AllCheckoboxes = document.querySelectorAll("input[type=checkbox]");
//
//function checkboxState


/*To nie jest według instrukcji*/
//var submitButton = document.getElementById("wyslij");
//
//submitButton.onclick = function(e) {
//    e.preventDefault();
//    
//    validateFormFields();
//}
//
//function validateFormFields() {
//    var nameTextBox = document.getElementById("name");
//    var emailTextBox = document.getElementById("email");
//    
//    if (nameTextBox.value.trim().length<=0) {
//        insertErrorMessage("Nie wpisano imienia!" nameTextBox);
//        
//}
//    if (emailTextBox.value.trim().length<=0) {
//        insertErrorMessage("Nie wpisano emaila!", emailTextBox);
//    }
//    if (!marketingAcceptance)
//}
//
//function insertErrorMessage(errorMessage, inputElement) {
//    var errorMessageElement = document.createElement('p');
//    errorMessageElement.style.color = "red";
//    errorMessageElement.innerHTML = errorMessage;
//    
//    insertAfter(errorMessageElement, inputElement);
//}
//
//function insertAfter(newNode, referenceNode) {
//    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
//}


/*Zgodnie z instrukcją*/
var lastCheckbox = document.getElementById("wszystkie-zgody");
var allCheckboxes = document.querySelectorAll("input[type=checkbox]");

lastCheckbox.onchange = function(e) {
    checkboxState(lastCheckbox.checked);
}

var submitButton = document.getElementById("wyslij");

function checkboxState(lastCheckboxState) {
    allCheckboxes[0].checked = lastCheckboxState;
    allCheckboxes[0].disabled = lastCheckboxState;


    allCheckboxes[1].checked = lastCheckboxState;
    allCheckboxes[1].disabled = lastCheckboxState;
}    
    
submitButton.addEventListener("click", validateForm);

function validateForm(e) {
    var textInputs = document.querySelectorAll('input[type=text]');
    
    for(var i = 0; i < textInputs.length; i++) {
        if(textInputs[i].value.trim().length === 0){
        e.preventDefault();
        var warning = document.createElement('p');
        warning.id = "alert-" + i;
        warning.innerText = "To pole wymagane";
        
        textInputs[i].nextSibling = warning;
        }
        else {
            var nextElement = textInputs[i].nextElementSibling;
            if (nextElement.parentElement.removeChild(nextElement);
        }
    }
}
        if(allCheckboxes[0].checked === false) {
                
            e.preventDefault();
                
        var warning = document.createElement('p');
            warning.id = "alert-checkbox";
            warning.innerText= "To pole jest wymagane";
                
            }
            
    insertAfter(warning, allCheckboxes[0]);
        }
        else {
            var nextElement = 
        }
            