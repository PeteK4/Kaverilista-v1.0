// Alusta muuttujat
let nimiLista = [];
let nimiNro = 1
let jnumero = document.getElementById("nro"); jnumero.textContent = nimiNro; // Näytä ensimmäinen järjestysnumero
let lomake = document.getElementById("lomake");
document.getElementsByClassName("kaverilista")[0].style.display = "none"; // Piilota kaverilistalaatikko sivulta
document.getElementsByClassName("naytanappi")[0].style.display = "none"; // Piilota "Uusi lista" -nappi sivulta
document.getElementsByClassName("naytanappi")[1].style.display = "none"; // Piilota "Sulje sivu" sivulta
document.getElementsByClassName("ohje")[0].style.display = "block"; // Näytä ohje sivulla

// Seuraa lomakkeen tapahtumia, lisää nimet listalle
lomake.addEventListener("submit", function(event) {
    event.preventDefault();
    let nimiKentta = document.getElementById("nimi");
    nimiLista.push(nimiKentta.value);
    nimiKentta.value = "";
    
    // Lisää nimen järjestysnumeroa syöttökentässä
    nimiNro++;
    let jnumero = document.getElementById("nro"); jnumero.textContent = nimiNro;

    // Tarkista nimien määrä ja siirry tulostukseen, jos ehto täyttyy
    if (nimiLista.length == 10) {
        tulostaNimet();
    }
});

// Tulostus
function tulostaNimet() {
    lomake.remove(); // Poista <form> lomake
    document.getElementsByClassName("kaverilista")[0].style.display = "block"; // Näytä kaverilistalaatikko
    document.getElementsByClassName("naytanappi")[0].style.display = "block"; // Näytä "Uusi lista" -nappi
    document.getElementsByClassName("naytanappi")[1].style.display = "block"; // Näytä "Sulje sivu" -nappi
    document.getElementsByClassName("ohje")[0].style.display = "none"; // Piilota ohje
    let kaveriLista = document.getElementById("kaverilista");
    for (let i = 0; i < nimiLista.length; i++) {
        let li = document.createElement("li");
        li.textContent = nimiLista[i];
        kaveriLista.appendChild(li);
    }
}

// Alusta sivu uudelleen painettaessa "Uusi lista" -nappia
function uusiSivu() {
    location.reload();
}

// Sulje sivu painettaessa "Sulje sivu" -nappia
function suljeSivu() {
    let sivu = window.open("", "_self");
    sivu.close();
}