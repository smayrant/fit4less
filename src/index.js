require('./styles/index.scss');
require('./styles/header.scss');

import PopperJs from 'popper.js';
import jquery from 'jquery';


jquery(() => {
    console.log('Hello jQuery + bootstrap 4!');
    const btn = document.getElementsByClassName("calculate-btn");
    function calculate() {
        console.log('clicked')
    }

    btn.addEventListener("click", calculate)
});
