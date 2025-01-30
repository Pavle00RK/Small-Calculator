let prviInput = document.getElementById("PrviInputID");
let drugiInput = document.getElementById("DrugiInputID");
let operacija = document.getElementById("DivIzabraniAritZnakID");
let rezultat = document.getElementById("IspisID");


//stravljanje eListenere na odredjene elemente, koji se pokrecu klikom na njih 
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


// Funkcije za brisanje. 
document.getElementById("PrvaGumica").addEventListener("click", () => { prviInput.value = ""; });
document.getElementById("DrugaGumica").addEventListener("click", () => { drugiInput.value = ""; });
document.getElementById("TrecaGumica").addEventListener("click", () => { rezultat.value = ""; });








//funkcije za obavljanje aritmetickih operacija
function sumiranje(){
    operacija.textContent = "+";
    let prviInput1 = prviInput.value;
    let drugiInput1 = drugiInput.value;
        if (prviInput1.trim() === "" || drugiInput1.trim() === "") {
            rezultat.value = "Unos nije validan";
        }
        else{
            let rez = Number(prviInput1) + Number(drugiInput1); 
            rezultat.value = rez;
        }
}

function oduzimanje(){
    operacija.textContent = "-";
    let prviInput1 = prviInput.value;
    let drugiInput1 = drugiInput.value;
    if (prviInput1.trim() === "" || drugiInput1.trim() === "") {
        rezultat.value = "Unos nije validan";
    }
    else{
        let rez = Number(prviInput1) - Number(drugiInput1) ;
        rezultat.value = rez ;   
    }
}

function mnozenje(){
    operacija.textContent = "x";
    let prviInput1 = prviInput.value;
    let drugiInput1 = drugiInput.value;
    if (prviInput1.trim() === "" || drugiInput1.trim() === "") {
        rezultat.value = "Unos nije validan";
    }
    else{
        let rez = Number(prviInput1) * Number(drugiInput1) ;
        rezultat.value = rez  ;  
    }
}

function deljenje(){
    operacija.textContent = ":";
    let prviInput1 = prviInput.value;
    let drugiInput1 = drugiInput.value;
    if (prviInput1.trim() === "" || drugiInput1.trim() === "") {
        rezultat.value = "Unos nije validan";
    }
    else{
        let rez = Number(prviInput1) / Number(drugiInput1); 
        rezultat.value = rez;    
    }
}