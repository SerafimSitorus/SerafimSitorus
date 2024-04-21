//inputan pertama

let regexInput1 = document.querySelector("#regexInput1");
let validationInput1 = document.querySelector("#input1-validation");
let inputLabel1 = document.querySelector('#animeh-input1')

const REGULAR_EXPRESSION_1 = /^(hunter\s*x\s*hunter|hxh)$/i;

regexInput1.addEventListener("input", function() {
    if (regexInput1.value === "") {
        validationInput1.innerHTML = "Validation message"
        validationInput1.classList.add("text-slate-400");
        validationInput1.classList.remove("text-red-500");
        validationInput1.classList.remove("text-green-500");
        regexInput1.classList.remove("focus:border-red-500");
        inputLabel1.classList.remove("peer-focus:text-red-500");
        regexInput1.classList.remove("focus:border-green-500");
        inputLabel1.classList.remove("peer-focus:text-green-500");
        regexInput1.classList.add("focus:border-blue-500");
        inputLabel1.classList.add("peer-focus:text-blue-500");
    } else if(REGULAR_EXPRESSION_1.test(regexInput1.value)){
        validationInput1.classList.remove("text-slate-400");
        validationInput1.classList.add("text-green-500");
        regexInput1.classList.add("focus:border-green-500");
        regexInput1.classList.remove("focus:border-blue-500");
        inputLabel1.classList.add("peer-focus:text-green-500");
        inputLabel1.classList.remove("peer-focus:text-blue-500");

        validationInput1.classList.remove("text-red-500");        
        regexInput1.classList.remove("focus:border-red-500");
        inputLabel1.classList.remove("peer-focus:text-red-500");
        validationInput1.innerHTML = "Valid boskuh";

    }else {
        validationInput1.classList.remove("text-slate-400");
        validationInput1.classList.add("text-red-500");
        regexInput1.classList.add("focus:border-red-500");
        regexInput1.classList.remove("focus:border-blue-500");
        inputLabel1.classList.add("peer-focus:text-red-500");
        inputLabel1.classList.remove("peer-focus:text-blue-500");

        inputLabel1.classList.remove("peer-focus:text-green-500");
        regexInput1.classList.remove("focus:border-green-500");
        validationInput1.classList.remove("text-green-500");
        validationInput1.innerHTML = "Tuliskan Hunter x Hunter";
    }
});

// Inputan kedua

let regexInput2 = document.querySelector("#regexInput2");
let validationInput2 = document.querySelector("#input2-validation");
let inputLabel2 = document.querySelector('#NIM-input2')

const REGULAR_EXPRESSION_2 = /^(?:\+62\d{12}|08\d{10})$/;

regexInput2.addEventListener("input", function() {
    if (regexInput2.value === "") {
        validationInput2.innerHTML = "Validation message"
        validationInput2.classList.add("text-slate-400");
        validationInput2.classList.remove("text-red-500");
        validationInput2.classList.remove("text-green-500");
        regexInput2.classList.remove("focus:border-red-500");
        inputLabel2.classList.remove("peer-focus:text-red-500");
        regexInput2.classList.remove("focus:border-green-500");
        inputLabel2.classList.remove("peer-focus:text-green-500");
        regexInput2.classList.add("focus:border-blue-500");
        inputLabel2.classList.add("peer-focus:text-blue-500");
    } else if(REGULAR_EXPRESSION_2.test(regexInput2.value)){
        validationInput2.classList.remove("text-slate-400");
        validationInput2.classList.add("text-green-500");
        regexInput2.classList.add("focus:border-green-500");
        regexInput2.classList.remove("focus:border-blue-500");
        inputLabel2.classList.add("peer-focus:text-green-500");
        inputLabel2.classList.remove("peer-focus:text-blue-500");

        validationInput2.classList.remove("text-red-500");        
        regexInput2.classList.remove("focus:border-red-500");
        inputLabel2.classList.remove("peer-focus:text-red-500");
        validationInput2.innerHTML = "Valid";

    }else {
        validationInput2.classList.remove("text-slate-400");
        validationInput2.classList.add("text-red-500");
        regexInput2.classList.add("focus:border-red-500");
        regexInput2.classList.remove("focus:border-blue-500");
        inputLabel2.classList.add("peer-focus:text-red-500");
        inputLabel2.classList.remove("peer-focus:text-blue-500");

        inputLabel2.classList.remove("peer-focus:text-green-500");
        regexInput2.classList.remove("focus:border-green-500");
        validationInput2.classList.remove("text-green-500");
        validationInput2.innerHTML = "Masukkan nomor yang valid";
    }
});

// Inputan ketiga

let regexInput3 = document.querySelector("#regexInput3");
let validationInput3 = document.querySelector("#input3-validation");
let inputLabel3 = document.querySelector('#pos-input3')

const REGULAR_EXPRESSION_3 = /^\d{5}$/;

regexInput3.addEventListener("input", function() {
    if (regexInput3.value === "") {
        validationInput3.innerHTML = "Validation message"
        validationInput3.classList.add("text-slate-400");
        validationInput3.classList.remove("text-red-500");
        validationInput3.classList.remove("text-green-500");
        regexInput3.classList.remove("focus:border-red-500");
        inputLabel3.classList.remove("peer-focus:text-red-500");
        regexInput3.classList.remove("focus:border-green-500");
        inputLabel3.classList.remove("peer-focus:text-green-500");
        regexInput3.classList.add("focus:border-blue-500");
        inputLabel3.classList.add("peer-focus:text-blue-500");
    } else if(REGULAR_EXPRESSION_3.test(regexInput3.value)){
        validationInput3.classList.remove("text-slate-400");
        validationInput3.classList.add("text-green-500");
        regexInput3.classList.add("focus:border-green-500");
        regexInput3.classList.remove("focus:border-blue-500");
        inputLabel3.classList.add("peer-focus:text-green-500");
        inputLabel3.classList.remove("peer-focus:text-blue-500");

        validationInput3.classList.remove("text-red-500");        
        regexInput3.classList.remove("focus:border-red-500");
        inputLabel3.classList.remove("peer-focus:text-red-500");
        validationInput3.innerHTML = "Valid";

    }else {
        validationInput3.classList.remove("text-slate-400");
        validationInput3.classList.add("text-red-500");
        regexInput3.classList.add("focus:border-red-500");
        regexInput3.classList.remove("focus:border-blue-500");
        inputLabel3.classList.add("peer-focus:text-red-500");
        inputLabel3.classList.remove("peer-focus:text-blue-500");

        inputLabel3.classList.remove("peer-focus:text-green-500");
        regexInput3.classList.remove("focus:border-green-500");
        validationInput3.classList.remove("text-green-500");
        validationInput3.innerHTML = "Masukkan nomor yang valid";
    }
});

//Input keempat

let regexInput4 = document.querySelector("#regexInput4");
let validationInput4 = document.querySelector("#input4-validation");
let inputLabel4 = document.querySelector('#nickname-input4')

const REGULAR_EXPRESSION_4 = /^[^\s]{6,}$/;

regexInput4.addEventListener("input", function() {
    if (regexInput4.value === "") {
        validationInput4.innerHTML = "Validation message"
        validationInput4.classList.add("text-slate-400");
        validationInput4.classList.remove("text-red-500");
        validationInput4.classList.remove("text-green-500");
        regexInput4.classList.remove("focus:border-red-500");
        inputLabel4.classList.remove("peer-focus:text-red-500");
        regexInput4.classList.remove("focus:border-green-500");
        inputLabel4.classList.remove("peer-focus:text-green-500");
        regexInput4.classList.add("focus:border-blue-500");
        inputLabel4.classList.add("peer-focus:text-blue-500");
    } else if(REGULAR_EXPRESSION_4.test(regexInput4.value)){
        validationInput4.classList.remove("text-slate-400");
        validationInput4.classList.add("text-green-500");
        regexInput4.classList.add("focus:border-green-500");
        regexInput4.classList.remove("focus:border-blue-500");
        inputLabel4.classList.add("peer-focus:text-green-500");
        inputLabel4.classList.remove("peer-focus:text-blue-500");

        validationInput4.classList.remove("text-red-500");        
        regexInput4.classList.remove("focus:border-red-500");
        inputLabel4.classList.remove("peer-focus:text-red-500");
        validationInput4.innerHTML = "Valid";

    }else {
        validationInput4.classList.remove("text-slate-400");
        validationInput4.classList.add("text-red-500");
        regexInput4.classList.add("focus:border-red-500");
        regexInput4.classList.remove("focus:border-blue-500");
        inputLabel4.classList.add("peer-focus:text-red-500");
        inputLabel4.classList.remove("peer-focus:text-blue-500");

        inputLabel4.classList.remove("peer-focus:text-green-500");
        regexInput4.classList.remove("focus:border-green-500");
        validationInput4.classList.remove("text-green-500");
        validationInput4.innerHTML = "Tidak boleh ada spasi dan minimal 6 karakter";
    }
});

//Input kelima

let regexInput5 = document.querySelector("#regexInput5");
let validationInput5 = document.querySelector("#input5-validation");
let inputLabel5 = document.querySelector('#agama-input5')

const REGULAR_EXPRESSION_5 = /^(Islam|Kristen|Katolik|Hindu|Buddha|Konghucu)$/i;

regexInput5.addEventListener("input", function() {
    if (regexInput5.value === "") {
        validationInput5.innerHTML = "Validation message"
        validationInput5.classList.add("text-slate-400");
        validationInput5.classList.remove("text-red-500");
        validationInput5.classList.remove("text-green-500");
        regexInput5.classList.remove("focus:border-red-500");
        inputLabel5.classList.remove("peer-focus:text-red-500");
        regexInput5.classList.remove("focus:border-green-500");
        inputLabel5.classList.remove("peer-focus:text-green-500");
        regexInput5.classList.add("focus:border-blue-500");
        inputLabel5.classList.add("peer-focus:text-blue-500");
    } else if(REGULAR_EXPRESSION_5.test(regexInput5.value)){
        validationInput5.classList.remove("text-slate-400");
        validationInput5.classList.add("text-green-500");
        regexInput5.classList.add("focus:border-green-500");
        regexInput5.classList.remove("focus:border-blue-500");
        inputLabel5.classList.add("peer-focus:text-green-500");
        inputLabel5.classList.remove("peer-focus:text-blue-500");

        validationInput5.classList.remove("text-red-500");        
        regexInput5.classList.remove("focus:border-red-500");
        inputLabel5.classList.remove("peer-focus:text-red-500");
        validationInput5.innerHTML = "Salam toleransi";

    }else {
        validationInput5.classList.remove("text-slate-400");
        validationInput5.classList.add("text-red-500");
        regexInput5.classList.add("focus:border-red-500");
        regexInput5.classList.remove("focus:border-blue-500");
        inputLabel5.classList.add("peer-focus:text-red-500");
        inputLabel5.classList.remove("peer-focus:text-blue-500");

        inputLabel5.classList.remove("peer-focus:text-green-500");
        regexInput5.classList.remove("focus:border-green-500");
        validationInput5.classList.remove("text-green-500");
        validationInput5.innerHTML = "Agamamu tidak resmi di Indonesia. Mending keluar dari sini NKRI Harga Mati";
    }
});