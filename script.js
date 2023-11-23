let nameHero = "Super heroi";
let xp = "9000";

let nivel;

if (xp <= 1.000) {
    nivel = "Ferro";
}

else if (xp > 1000 && xp <= 2000) {
    nivel = "Bronze";
}

else if (xp > 2000 && xp <= 5000) {
    nivel = "Prata";
}

else if (xp > 5000 && xp <= 6000) {
    nivel = "Ouro";
}

else if (xp > 7000 && xp <= 8000) {
    nivel = "Platina";
}

else if (xp > 8000 && xp <= 9000) {
    nivel = "Ascendente";
}

else if (xp > 9000 && xp <= 10000) {
    nivel = "Radiante";
}

else if (xp >= 10001) {
    nivel = "Imortal";
}

let mensagemDeSaida = (`O heroi de nome ${nameHero} esta no nivel ${nivel}`);
console.log(mensagemDeSaida);

