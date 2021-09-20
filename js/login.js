
var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.

function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == "vaib.c2000" && password == "1234"){
        alert ("Login successful! " );
        alert ("Logged in as "+username );
        window.open("student_dashboard.html"); // Redirecting to other page.
        return false;
    }
    else{
        attempt --;// Decrementing by one.
        alert("You have left "+attempt+" attempt;");
        // Disabling fields after 3 attempts.
        if( attempt == 0){
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}



