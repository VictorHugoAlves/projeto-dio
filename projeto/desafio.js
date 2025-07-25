let nomeHeroi = "Jongas, o Desenvolvedor"
let xpHeroi = 10001
let rankF = "Ferro"
let rankB = "Bronze"
let rankP = "Prata"
let rankO = "Ouro"
let rankPl = "Platina"
let rankA = "Ascendente"
let rankI = "Imortal"
let rankR = "Radiante"

if(xpHeroi < 1000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + rankF)
} else if (xpHeroi > 1000 && xpHeroi <= 2000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + rankB)
} else if (xpHeroi > 2000 && xpHeroi <= 5000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + rankP)
} else if (xpHeroi > 5000 && xpHeroi <= 7000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + rankO)
} else if (xpHeroi > 7000 && xpHeroi <= 8000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + rankPl)
} else if (xpHeroi > 8000 && xpHeroi <= 9000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + rankA)
} else if (xpHeroi > 9000 && xpHeroi <= 10000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + rankI)
} else if (xpHeroi > 10000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + rankR)
}