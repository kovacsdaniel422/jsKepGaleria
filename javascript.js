window.addEventListener("load", init);
window.addEventListener("click", galeria);


function ID(elem) {
    return document.getElementById(elem);
}

var kepeim = [{
    eleres: "kepek/kep01.jpg",
    cim: "Állatok",
    leírás: "Kecskék",},
    {
    eleres: "kepek/kep02.jpg",
    cim: "Japán fa",
    leírás: "Szép sétány"
    },
    {
    eleres: "kepek/kep03.jpg",
    cim: "Sárga virágok",
    leírás: "Szép mezőföld"
    },
    {
    eleres: "kepek/kep04.jpg",
    cim: "Tájkép",
    leírás: "Fent a magasban!"
    },
    {
    eleres: "kepek/kep05.jpg",
    cim: "Az út mellet",
    leírás: "Szép fehér virágok az út mellet"
    }]

var kepindex = 0;
function galeria(){
    if (kepindex == 0){
        var txt ="<div class='galeria' id='elsokep'><img src='"+kepeim[4].eleres+"' alt='"+kepeim[4].leírás+"' id='kivalasztott' onclick='elsokepClick()'></div><div class='galeria' id='masodikkep'><img src='"+kepeim[kepindex].eleres+"' alt='"+kepeim[kepindex].leírás+"' id='kivalasztott'></div><div class='galeria' id='harmadikkep'><img src='"+kepeim[kepindex+1].eleres+"'' alt='"+kepeim[kepindex+1].leírás+"' id='kivalasztott' onclick='harkepClick()'></div>";
    }else if (kepindex == 4){
    var txt ="<div class='galeria'  id='elsokep'><img src='"+kepeim[kepindex-1].eleres+"' alt='"+kepeim[kepindex-1].leírás+"' id='kivalasztott' onclick='elsokepClick()'></div><div class='galeria' id='masodikkep'><img src='"+kepeim[kepindex].eleres+"' alt='"+kepeim[kepindex].leírás+"' '></div><div class='galeria' id='harmadikkep'><img src='"+kepeim[0].eleres+"'' alt='"+kepeim[0].leírás+"' id='kivalasztott' onclick='harkepClick()'></div>";
    }else{
        var txt ="<div class='galeria' id='elsokep'><img src='"+kepeim[kepindex-1].eleres+"' alt='"+kepeim[kepindex-1].leírás+"' '></div><div class='galeria' id='masodikkep'><img src='"+kepeim[kepindex].eleres+"' alt='"+kepeim[kepindex].leírás+"' id='kivalasztott' onclick='elsokepClick()'></div><div class='galeria' id='harmadikkep'><img src='"+kepeim[kepindex+1].eleres+"'' alt='"+kepeim[kepindex+1].leírás+"' id='kivalasztott' onclick='harkepClick()'></div>";
    }
    ID("inp").innerHTML=txt;
}
function init() {
    ID("balra").addEventListener("click", balra);
    ID("jobbra").addEventListener("click", jobbra);
}
function megjelenit(kepindex) {
    ID("kivalasztott").src = kepeim[kepindex].eleres;
    ID("kivalasztott").alt = kepeim[kepindex].cim;

}
function balra() {
    if(kepindex <= 0){
        kepindex = kepeim.length-1;
    }
    else{
        kepindex -= 1;
    }
    console.log(kepindex);
    megjelenit(kepindex);
}
function jobbra() {
    if(kepindex >= kepeim.length-1){
        kepindex = 0;
    }
    else{
        kepindex += 1;
    }
    console.log(kepindex);
    megjelenit(kepindex)
}

function elsokepClick(){
    let text = document.getElementById("elsokep").innerHTML;
    document.getElementById("valtoz").innerHTML = text;
    console.log(text)
}
function harkepClick(){
    let text = document.getElementById("harmadikkep").innerHTML;
    document.getElementById("valtoz").innerHTML = text;
    console.log(text)
}