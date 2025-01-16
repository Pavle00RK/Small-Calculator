let prviInput = document.getElementById("PrviInputID");
let drugiInput = document.getElementById("DrugiInputID");
let operacija = document.getElementById("DivIzabraniAritZnakID");
let rezultat = document.getElementById("IspisID");



document.getElementById("AritZnakP").addEventListener("click", ()=>{
    sumiranje()
})

document.getElementById("AritZnakM").addEventListener("click", ()=>{
    oduzimanje()
})

document.getElementById("AritZnakMn").addEventListener("click", ()=>{
    mnozenje()
})

document.getElementById("AritZnakD").addEventListener("click", ()=>{
    deljenje()
})

document.getElementById("PrvaGumica").addEventListener("click", ()=>{
    brisanje1()
})
document.getElementById("DrugaGumica").addEventListener("click", ()=>{
    brisanje2()
})
document.getElementById("TrecaGumica").addEventListener("click", ()=>{
    brisanje3()
})
function brisanje1(){
    prviInput.value = ""
}

function brisanje2(){
    drugiInput.value = ""
}

function brisanje3(){
    rezultat.value = ""
}





function sumiranje(){
    operacija.textContent = "+";
    let prviInput1 = Number(prviInput.value);
let drugiInput1 = Number(drugiInput.value);
    if (isNaN(prviInput1) && isNaN(drugiInput1)) {
        console.log("UNOS NIJE VALIDAN");
    }
    else{
        console.log("uneti su brojevi");
        let rez = prviInput1 + drugiInput1 
        if (!isNaN(rez)) {
            rezultat.value = rez    
        }
        else{
            rezultat.value = "Unos nije validan"
        }

    }
}

function oduzimanje(){
    operacija.textContent = "-";
    let prviInput1 = Number(prviInput.value);
let drugiInput1 = Number(drugiInput.value);
    if (isNaN(prviInput1) && isNaN(drugiInput1)) {
        console.log("UNOS NIJE VALIDAN");
    }
    else{
        console.log("uneti su brojevi");
        let rez = prviInput1 - drugiInput1 
        if (!isNaN(rez)) {
            rezultat.value = rez    
        }
        else{
            rezultat.value = "Unos nije validan"
        }
    }
}

function mnozenje(){
    operacija.textContent = "x";
    let prviInput1 = Number(prviInput.value);
let drugiInput1 = Number(drugiInput.value);
    if (isNaN(prviInput1) && isNaN(drugiInput1)) {
        console.log("UNOS NIJE VALIDAN");
    }
    else{
        console.log("uneti su brojevi");
        let rez = prviInput1 * drugiInput1 
        if (!isNaN(rez)) {
            rezultat.value = rez    
        }
        else{
            rezultat.value = "Unos nije validan"
        }
    }
}

function deljenje(){
    operacija.textContent = ":";
    let prviInput1 = Number(prviInput.value);
let drugiInput1 = Number(drugiInput.value);
    if (isNaN(prviInput1) && isNaN(drugiInput1)) {
        console.log("UNOS NIJE VALIDAN");
    }
    else{
        console.log("uneti su brojevi");
        let rez = prviInput1 / drugiInput1 
        if (!isNaN(rez)) {
            rezultat.value = rez    
        }
        else{
            rezultat.value = "Unos nije validan"
        }
    }
}