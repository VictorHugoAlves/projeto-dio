class hero{
    constructor(name, age, classe) {
        this.name = name
        this.age = age
        this.classe = classe
    }

    tipoAtaque() {
        switch(this.classe) {
            case "mago": 
                console.log(`O ${this.classe} ${this.name} atacou usando magia.`)
            break
            case "guerreiro":
                console.log(`O ${this.classe} ${this.name} atacou usando espada.`)
            break
            case "monge":
                console.log(`O ${this.classe} ${this.name} atacou usando artes marciais.`)
            break
            case "ninja":
                console.log(`O ${this.classe} ${this.name} atacou usando shuriken.`)
            break
            default:
                console.log(`A classe ${this.classe} de ${this.name} não existe. Ataque não realizado.`)
        }
    }
}

let jongas = new hero("Jongas", 20, "mago")
let pingus = new hero("Pingus", 20, "guerreiro")
let porta = new hero("Porta", 20, "monge")
let coelho = new hero("Coelho", 20, "ninja")

jongas.tipoAtaque()
pingus.tipoAtaque()
porta.tipoAtaque()
coelho.tipoAtaque()