let saldo = winLose(100, 12)


function winLose(w, l) {
    let result = w - l
    return result
}

    if(saldo < 10) {
    console.log("O Herói tem saldo de " + saldo + " vitórias" + " e está no nível de Ferro")
} else if (saldo > 10 && saldo <= 20) {
    console.log("O Herói tem saldo de " + saldo + " vitórias" + " e está no nível de Bronze")
} else if (saldo > 20 && saldo <= 50) {
    console.log("O Herói tem saldo de " + saldo + " vitórias" + " e está no nível de Prata")
} else if (saldo > 50 && saldo <= 80) {
    console.log("O Herói tem saldo de " + saldo + " vitórias" + " e está no nível de Ouro")
} else if (saldo > 80 && saldo <= 90) {
    console.log("O Herói tem saldo de " + saldo + " vitórias" + " e está no nível de Diamante")
} else if (saldo > 90 && saldo <= 100) {
    console.log("O Herói tem saldo de " + saldo + " vitórias" + " e está no nível de Lendário")
} else if (saldo > 100) {
    console.log("O Herói tem saldo de " + saldo + " vitórias" + " e está no nível de Imortal")
}