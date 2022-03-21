window.addEventListener("load", init);
window.addEventListener("click", galeria);


function ID(elem) {
    return document.getElementById(elem);
}

var kepeim = [{
    eleres: "kepek/_DSC7025.jpg",
    cim: "Állatok",
    leírás: "Kecskék",},
    {
    eleres: "kepek/_DSC7365.jpg",
    cim: "Japán fa",
    leírás: "Szép sétány"
    },
    {
    eleres: "kepek/_DSC7371_1.jpg",
    cim: "Sárga virágok",
    leírás: "Szép mezőföld"
    },
    {
    eleres: "kepek/_DSC7444.jpg",
    cim: "Tájkép",
    leírás: "Fent a magasban!"
    },
    {
    eleres: "kepek/_DSC7515.jpg",
    cim: "Az út mellet",
    leírás: "Szép fehér virágok az út mellet"
    }]

var kepindex = 0;
function galeria(){
    if (kepindex == 0){
        var txt ="<div class='galeria' id='elsokep'><img src='"+kepeim[4].eleres+"' alt='"+kepeim[4].leírás+"' onclick='kepcsere()'></div><div class='galeria' id='masodikkep'><img src='"+kepeim[kepindex].eleres+"' alt='"+kepeim[kepindex].leírás+"' onclick='kepcsere()'></div><div class='galeria' id='elsokep'><img src='"+kepeim[kepindex+1].eleres+"'' alt='"+kepeim[kepindex+1].leírás+"' onclick='kepcsere()'></div>";
    }else if (kepindex == 4){
    var txt ="<div class='galeria'><img src='"+kepeim[kepindex-1].eleres+"' alt='"+kepeim[kepindex-1].leírás+"' onclick='kepcsere()'></div><div class='galeria'><img src='"+kepeim[kepindex].eleres+"' alt='"+kepeim[kepindex].leírás+"' onclick='kepcsere()'></div><div class='galeria'><img src='"+kepeim[0].eleres+"'' alt='"+kepeim[0].leírás+"' onclick='kepcsere()'></div>";
    }else{
        var txt ="<div class='galeria'><img src='"+kepeim[kepindex-1].eleres+"' alt='"+kepeim[kepindex-1].leírás+"' onclick='kepcsere()'></div><div class='galeria'><img src='"+kepeim[kepindex].eleres+"' alt='"+kepeim[kepindex].leírás+"' onclick='kepcsere()'></div><div class='galeria'><img src='"+kepeim[kepindex+1].eleres+"'' alt='"+kepeim[kepindex+1].leírás+"' onclick='kepcsere()'></div>";
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
function kepcsere(){
    var valami = event.target.src
    console.log(valami)
}