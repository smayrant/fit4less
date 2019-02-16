require('./styles/index.scss');

import PopperJs from 'popper.js';
import jquery from 'jquery';
import jump from 'jump.js';

// *** Logic for implementing the smooth scroll effect ***
const offerLink = document.querySelector(".offer-link");

offerLink.addEventListener("click", function () {
    jump('#offer-section');
})

const classesLink = document.querySelector(".classes-link");

classesLink.addEventListener("click", function () {
    jump('#classes');
})

const bmiLink = document.querySelector(".bmi-link");

bmiLink.addEventListener("click", function () {
    jump('#bmi');
})

const pricingLink = document.querySelector(".pricing-link");

pricingLink.addEventListener("click", function () {
    jump('#memberships');
})

const trainerLink = document.querySelector(".trainers-link");

trainerLink.addEventListener("click", function () {
    jump('#trainers');
})


// *** Logic for creating a sticky navbar ***
window.onscroll = function () {
    addStickyClassToNavbar();
}

const navbar = document.querySelector(".navbar");

const navbarOffsetPosition = navbar.offsetTop;

function addStickyClassToNavbar() {
    if (window.pageYOffset > navbarOffsetPosition) {
        document.body.style.paddingTop = navbar.offsetHeight + 'px';
        navbar.classList.add("sticky")
    } else {
        document.body.style.paddingTop = 0;
        navbar.classList.remove("sticky")
    }
}

// *** Logic for calculating the user's BMI ***

// ensures only numbers can be entered into the input fields
function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode == 46 || charCode > 31 && (charCode < 48 || charCode > 57)) {
        evt.preventDefault();
        return false;
    }
    return true;
}

const weightInput = document.querySelector(".weight-input");
weightInput.addEventListener("keypress", isNumberKey);

const heightInput = document.querySelector(".height-input");
heightInput.addEventListener("keypress", isNumberKey);

//weight and height input attributes
weightInput.type = "number";
weightInput.min = 0;
weightInput.pattern = "\\d+";
weightInput.required = "required";

heightInput.type = "number";
heightInput.min = 0;
heightInput.pattern = "\\d+";
heightInput.required = "required";

function calculateBMI(e) {
    if (weightInput.value != "" && heightInput.value != "") {
        const height = document.querySelector(".height-input").value;
        const weight = document.querySelector(".weight-input").value;
        const parsedHeight = parseInt(height);
        const parsedWeight = parseInt(weight);
        const multipliedHeight = parsedHeight * parsedHeight;
        const dividedWeight = parsedWeight / multipliedHeight;
        const bmi = dividedWeight * 703;
        document.querySelector(".bmi-output").value = bmi.toFixed(2);
    }
}

const btn = document.querySelector(".calculate-btn");
btn.addEventListener("click", calculateBMI);
