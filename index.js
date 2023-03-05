function clearErrors(){
    errors = document.getElementsByClassName('formError');
    for(let item of errors){
        item.innerHTML = "";
    }
}

function setError(id,error){
    element = document.getElementById(id);
    element.getElementsByClassName('formError')[0].innerHTML = error;
}


function validateForm(){

    var returnValue = true;
    clearErrors();

    //perform validation
    //name validation
    var name = document.forms["survey-form"]["name"].value;
    if(name.length==0){
        setError("nameDiv","*Name Can't Be Empty");
        returnValue= false;
    }
    //age Validation
    var age = document.forms["survey-form"]["age"].value;
    if(age<0){
        setError("ageDiv","*Age Can't Be Nagetive");
        returnValue= false;
    }
    // number Validation
    var number = document.forms["survey-form"]["number"].value;
    if(number<0){
        setError("numberDiv","*Number Can't Be Nagetive");
        returnValue= false;
    }
    if(number.length!=10){
        setError("numberDiv","*Enter A Valid 10 digit Number");
        returnValue= false;
    }

    return returnValue;
}
