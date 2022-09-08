let va = document.getElementById("counter")
let saveEl = document.getElementById("saved-el");
let count = 0;
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



 
 