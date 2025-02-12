const myImage = document.querySelector("img");

// 当你点击图片时，会切换成另一张
// 使用匿名函数 () => 
myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox-icon.png") {
        myImage.setAttribute("src", "images/firefox2.png");
    } else {
        myImage.setAttribute("src", "images/firefox-icon.png");
    }
}

let myButton = document.querySelector("button");
let myHeadimg = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");

    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeadimg.textContent = `Mozilla is cool, ${myName}`;
    }
}

if(!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeadimg.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = function () {
    setUserName();
};