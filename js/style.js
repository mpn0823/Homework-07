"use strict";

// Sets HTML body to to given ratio expressed as W/H
const ratio = 1.61803398875 // golden ratio
function setPageRatio(ratio) {
    let body = document.getElementsByTagName("body").item(0);
    let main = document.getElementsByTagName("main").item(0);
    let width = window.innerWidth;
    let height = window.innerHeight;
    let margin = 0;
    if (width / height > ratio) margin = (width - height * ratio) / 2;
    body.setAttribute("style", "margin: 0px " + margin + "px;");

}
setPageRatio(ratio);
window.addEventListener("resize", () => setPageRatio(ratio));