/*
let myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

document.querySelector("h1").addEventListener("click", function() {//匿名函数
    alert("别戳我，我怕疼！");
})

document.querySelector("html").addEventListener("click", () => {//箭头函数
    alert("别戳我，我怕疼！");
})
*/

/*document.querySelector("h1").textContent = "Hello";*/
//document.querySelector("h1").textContent = "Hello";

let myImage = document.querySelector("img");
myImage.onclick = function() {
    let mySrc = myImage.getAttribute("src");
    if(mySrc === "images/Jeff-Dean_2022011401-696x465.jpeg") {
        myImage.setAttribute("src", "images/800-211201144638-51.jpg");
    }else{
        myImage.setAttribute("src", "images/Jeff-Dean_2022011401-696x465.jpeg")
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("请输入你的名字。");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Mozilla 酷毙了，" + myName;
}

if(!localStorage.getItem("name")) {
    setUserName();
}else{
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla 酷毙了，" + storedName;
}

myButton.onclick = function() {
    setUserName();
}