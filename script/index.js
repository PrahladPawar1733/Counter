let va = document.getElementById("counter")
let saveEl = document.getElementById("saved-el");
let va2 = document.getElementById("counter-2")
let saveEl2 = document.getElementById("saved-el-2");
let count = 0;
let count2 = 0;
function Increament() {
    count++;
    va.innerText = count;
}
function save() {
    if (count == 0) {
        return;
    }
    saveEl.textContent += count + " - ";
    count = 0;
    va.textContent = 0;
    if (saveEl.textContent.length > 35) {
        saveEl.textContent = "";
    }
}
function Increament2() {
    count2++;
    va2.innerText = count2;
}
function save2() {
    if (count2 == 0) {
        return;
    }
    saveEl2.textContent += count2 + " - ";
    count2 = 0;
    va2.textContent = 0;
    if (saveEl2.textContent.length > 35) {
        saveEl2.textContent = "";
    }
}



 
 