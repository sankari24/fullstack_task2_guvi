//form 1
function vfun() {
    var uname = document.forms["myform"]["username"].value;
    var upswd = document.forms["myform"]["password"].value;

    if (uname == null || uname == "") {
        document.getElementById("errorBox").innerHTML = "Please enter the username";
        return false;
    }

    if (upswd == null || upswd == "") {
        document.getElementById("errorBox").innerHTML = "Please enter the password";
        return false;
    }

   // document.getElementById("errorBox").innerHTML = "";


    //alert("Login successfully");
    
    window.location.href="profile.html"
    return false;
}
function vfun1() {
    var uname1 = document.forms["myform2"]["username"].value;
    var email1 = document.forms["myform2"]["email"].value;
    var upswd1 = document.forms["myform2"]["password"].value;
    var upswd2 = document.forms["myform2"]["conformpassword"].value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (uname1 == null || uname1 == "") {
        document.getElementById("errorBox").innerHTML = "Please enter the username";
        return false;
    }

    if (email1 == null || email1 == "") {
        document.getElementById("errorBox").innerHTML = "Please enter the email";
        return false;
    }

    if (!emailRegex.test(email1)) {
        document.getElementById("errorBox").innerHTML = "Please enter a valid email";
        return false;
    }

    if (upswd1 == null || upswd1 == "") {
        document.getElementById("errorBox").innerHTML = "Please enter the password";
        return false;
    }

    if (upswd2 == null || upswd2 == "") {
        document.getElementById("errorBox").innerHTML = "Please confirm the password";
        return false;
    }

    if (upswd1 !== upswd2) {
        document.getElementById("errorBox").innerHTML = "Passwords do not match";
        return false;
    }
    window.location.href="profile.html"
    return false;
}

function logout1()
{
alert("Logged out successfully");
window.location.href="index.html"
return false;
}

function vfun3() {
    var name = document.forms["myform3"]["name"].value;
    var age = document.forms["myform3"]["age"].value;
    var gender = document.forms["myform3"]["gender"].value;
    var dob = document.forms["myform3"]["dob"].value;
    var mobile = document.forms["myform3"]["mobile"].value;

    // Validation rules (you can customize them according to your requirements)
    if (name == "") {
        showError("Name cannot be empty");
        return false;
    }

    if (age == "" || isNaN(age) || age <= 0) {
        showError("Please enter a valid age");
        return false;
    }

    if (gender == "") {
        showError("Gender cannot be empty");
        return false;
    }

    if (dob == "") {
        showError("Date of Birth cannot be empty");
        return false;
    }

    if (mobile == "" || isNaN(mobile) || mobile.length !== 10) {
        showError("Please enter a valid 10-digit mobile number");
        return false;
    }

    // If all validations pass, return true
   // return true;

    document.getElementById("errorBox").innerHTML = "";

    alert("Registration successful");
    return false;

}

function showError(message) {
    var errorBox = document.getElementById("errorBox");
    errorBox.innerHTML = message;
    errorBox.style.display = "block";
}

