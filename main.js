// Audio & Preloader
var audio = document.getElementById("audioPlayer");
var loader = document.getElementById("preloader");

// Toggle Settings
function settingtoggle() {
    document.getElementById("setting-container").classList.toggle("settingactivate");
    document.getElementById("visualmodetogglebuttoncontainer").classList.toggle("visualmodeshow");
    document.getElementById("soundtogglebuttoncontainer").classList.toggle("soundmodeshow");
}

// Play or Pause Audio
function playpause() {
    if (!document.getElementById("switchforsound").checked) {
        audio.pause();
    } else {
        audio.play();
    }
}

// Toggle Visual Mode
function visualmode() {
    document.body.classList.toggle("light-mode");
    document.querySelectorAll(".needtobeinvert").forEach(function (e) {
        e.classList.toggle("invertapplied");
    });
}

// On Page Load
window.addEventListener("load", function () {
    loader.style.display = "none";
    document.querySelector(".hey").classList.add("popup");
});

// Hamburger Menu
let emptyArea = document.getElementById("emptyarea");
let mobileTogglemenu = document.getElementById("mobiletogglemenu");

function hamburgerMenu() {
    document.body.classList.toggle("stopscrolling");
    document.getElementById("mobiletogglemenu").classList.toggle("show-toggle-menu");
    document.getElementById("burger-bar1").classList.toggle("hamburger-animation1");
    document.getElementById("burger-bar2").classList.toggle("hamburger-animation2");
    document.getElementById("burger-bar3").classList.toggle("hamburger-animation3");
}

function hidemenubyli() {
    document.body.classList.toggle("stopscrolling");
    document.getElementById("mobiletogglemenu").classList.remove("show-toggle-menu");
    document.getElementById("burger-bar1").classList.remove("hamburger-animation1");
    document.getElementById("burger-bar2").classList.remove("hamburger-animation2");
    document.getElementById("burger-bar3").classList.remove("hamburger-animation3");
}

// Highlight Active Section in Navbar
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".navbar .navbar-tabs .navbar-tabs-ul li");
const mobilenavLi = document.querySelectorAll(".mobiletogglemenu .mobile-navbar-tabs-ul li");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        let sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute("id");
        }
    });

    mobilenavLi.forEach(li => {
        li.classList.remove("activeThismobiletab");
        if (li.classList.contains(current)) {
            li.classList.add("activeThismobiletab");
        }
    });

    navLi.forEach(li => {
        li.classList.remove("activeThistab");
        if (li.classList.contains(current)) {
            li.classList.add("activeThistab");
        }
    });
});

// Console Signature
console.log(
    "%c Designed and Developed by Vishesha Sanadhya ",
    "background-image: linear-gradient(90deg,#8000ff,#6bc5f8); color: white; font-weight:900; font-size:1rem; padding:20px;"
);

// Back to Top Button
let mybutton = document.getElementById("backtotopbutton");

function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function scrolltoTopfunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = function () {
    scrollFunction();
};

// Disable Right Click on Images
document.addEventListener("contextmenu", function (e) {
    if (e.target.nodeName === "IMG") {
        e.preventDefault();
    }
}, false);

// Eye Pupil Tracking
let Pupils = document.getElementsByClassName("footer-pupil");
let pupilsArr = Array.from(Pupils);

let pupilStartPoint = -10;
let pupilRangeX = 20;
let pupilRangeY = 15;

let mouseXStartPoint = 0;
let mouseXEndPoint = window.innerWidth;
let currentXPosition = 0;
let fracXValue = 0;

let mouseYEndPoint = window.innerHeight;
let currentYPosition = 0;
let fracYValue = 0;
let mouseXRange = mouseXEndPoint - mouseXStartPoint;

const mouseMove = (e) => {
    currentXPosition = e.clientX - mouseXStartPoint;
    currentYPosition = e.clientY;
    fracXValue = currentXPosition / mouseXRange;
    fracYValue = currentYPosition / mouseYEndPoint;

    let translateX = pupilStartPoint + fracXValue * pupilRangeX;
    let translateY = pupilStartPoint + fracYValue * pupilRangeY;

    pupilsArr.forEach(pupil => {
        pupil.style.transform = `translate(${translateX}px, ${translateY}px)`;
    });
};

const windowResize = () => {
    mouseXEndPoint = window.innerWidth;
    mouseYEndPoint = window.innerHeight;
    mouseXRange = mouseXEndPoint - mouseXStartPoint;
};

window.addEventListener("mousemove", mouseMove);
window.addEventListener("resize", windowResize);
