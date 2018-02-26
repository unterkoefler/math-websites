// is at least one of the radio buttons with the given name checked?
function validate(ename) {
    radios = document.getElementsByName(ename);
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked === true) {
            return true;
        }
    }
    return false;
}

// for every given name, is there at least one radio button with that name that has been checked?
function validateAll(names) {
    if (names.length == 0) {
        return true;
    }
    else {
        return validate(names[0]) && validateAll(names.slice(1));
    }
}


// validates that every question has been answered and 
// if so, returns a page with a random proposition 
function f() {
    if (validateAll(["q1","q2","q3","q4","q5","q6"]) === true) {
        x= Math.ceil(Math.random() * 3);
        newPage = "euclid"+ x +".html";
        window.location = newPage;
    }
    else {
        alert("Please answer every question.");
    }
}
