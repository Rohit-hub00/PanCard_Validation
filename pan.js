function validate(){
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var type = document.getElementById('pan').value;
    var number = document.getElementById('panNo').value;
    var error = "";

    const lastName = lname.charAt(0);
    const panType = type.charAt(0);

    if(fname == ""){
        error = error+" "+"Please Enter First Name\n";
    }
    if(lname == ""){
        error = error+" "+"Please Enter Last Name\n";
    }
    if(type == ""){
        error = error+" "+"Select your Pan Card Type\n";
    }
    if(number == ""){
        error = error+" "+"Please Enter Pan Number\n";
    }

    const syntax = new RegExp(`[A-Za-z]{3}${panType}${lastName}[0-9]{4}[A-Za-z]{1}$`);

    if(syntax.test(number)){
        alert("Pan Card is valid");
    }
    else if(number != ""){
        alert("Pan Card is not valid");
    }
    else{
        alert(error);
    }
}