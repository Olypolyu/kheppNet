let header = document.getElementById('header');
let header_height = header.getBoundingClientRect().height;

window.onscroll = function() {
    console.log(header_height)
    if (window.scrollY > header_height) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
};

var button1 = document.getElementById("button1");
button1.onclick = function() {
    window.open("https://www.coolmathgames.com");
}

var button2 = document.getElementById("button2");
button2.onclick = function() {
    window.open("https://jisho.org");
}

let request = new XMLHttpRequest;
request.open("GET", "localhost:8080/request/num");
request.setRequestHeader("Content-Type", "text/x-yaml");

request.onreadystatechange = () => {
    console.log(request.res)
    console.log(request.response);
    console.log("yest")
}

request.send();
