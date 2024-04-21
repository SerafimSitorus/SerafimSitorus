//inputan pertama

let regexInput1 = document.querySelector("#regexInput1");
let validationInput1 = document.querySelector("#input1-validation");

const REGULAR_EXPRESSION_1 = /^(hunter\s*x\s*hunter|hxh)$/i;

regexInput1.addEventListener("input", function() {
    if (REGULAR_EXPRESSION_1.test(regexInput1.value)) {
        validationInput1.textContent = "Valid";
        regexInput1.classList.remove("border-red-500");
    } else {
        validationInput1.textContent = "Masukkan Hunter x hunter";
        regexInput1.classList.add("border-red-500");
    }
});