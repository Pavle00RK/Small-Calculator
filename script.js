let prviInput = document.getElementById("PrviInputID");
let drugiInput = document.getElementById("DrugiInputID");
let operacija = document.getElementById("DivIzabraniAritZnakID");
let rezultat = document.getElementById("IspisID");

document.getElementById("AritZnakP").addEventListener("click", provera)
document.getElementById("AritZnakM").addEventListener("click", provera)
document.getElementById("AritZnakMn").addEventListener("click", provera)
document.getElementById("AritZnakD").addEventListener("click", provera)


//Provera da li je u input uneta neka vrednost, ako jeste tek onda se izvrsava zeljena operacija
function provera(e){
    let klik = e.currentTarget
    if (prviInput.value.trim() === "" || drugiInput.value.trim() === "") {
         rezultat.value = "Unos nije validan!"
    } else {
        if (klik.id === "AritZnakP") {
            sumiranje();
        } else if (klik.id === "AritZnakM") {
            oduzimanje();
        } else if (klik.id === "AritZnakMn") {
            mnozenje();
        } else if (klik.id === "AritZnakD") {
            deljenje();
        }
    }
}

// Funkcije za brisanje. 
document.getElementById("PrvaGumica").addEventListener("click", () => { prviInput.value = ""; });
document.getElementById("DrugaGumica").addEventListener("click", () => { drugiInput.value = ""; });
document.getElementById("TrecaGumica").addEventListener("click", () => { rezultat.value = ""; });


function sumiranje(){
    operacija.textContent = "+";
    let prviInput1 = Number(prviInput.value);
    let drugiInput1 = Number(drugiInput.value);

    if (isNaN(prviInput1) || isNaN(drugiInput1)) {
        console.log("UNOS NIJE VALIDAN");
    }
    else{  
        rezultat.value = prviInput1 + drugiInput1;
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
        let rez = prviInput1 - drugiInput1 
        if (!isNaN(rez)) {
            rezultat.value = rez    
        }
        else{
            rezultat.value = "Unos nije validan!!"
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
        let rez = prviInput1 * drugiInput1 
        if (!isNaN(rez)) {
            rezultat.value = rez    
        }
        else{
            rezultat.value = "Unos nije validan!!"
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
        let rez = prviInput1 / drugiInput1 
        if (!isNaN(rez)) {
            if (!isFinite(rez)) {
                rezultat.value = 0  
            } else {
                rezultat.value = rez
            }    
        }
        else{
            rezultat.value = "Unos nije validan!!"
        }
    }
}