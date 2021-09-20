let a = document.getElementById(('s1').value);
switch(a){
    case "student":
        window.location = "student_login.html"
        delete(a);
        break;
    
    case "teacher":
        window.location = "teacher_login.html"
        delete(a);
        break;
}

function display(){
    alert("Do you want to register for this course?")
}