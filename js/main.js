/*index*/
var name,age,email;

function subForm() {
    name = document.getElementById("input-1").value;
    age = document.getElementById("input-2").value;
    message = document.getElementById("input-3").value;
    email = document.getElementById("input-4").value;
    var p = /^[A-Za-z0-9-]+$/i;
    var b = p.test(message);
    if(b!=true) {
        alert("Message just input letters or number please");
        alert("The message was not submitted, please input valid message again");
    } else {
        alert("The message was submitted");
        alert('Name: ' + name + '\nAge: ' + age + '\nEmail: ' + email);
    }
}

function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

function pause() {
    document.getElementById("play").style.WebkitAnimationPlayState = "paused";
    document.getElementById("play").style.AnimationPlayState = "paused";
}

function running() {
    document.getElementById("play").style.WebkitAnimationPlayState = "running";
    document.getElementById("play").style.AnimationPlayState = "running";
}

