let operacao = 1
let quantidade = 5
let estoque = 5

// TODO: Implemente a condição necessária para verificar a operação. Se for 1, adiciona a quantidade ao estoque:
switch(operacao) {
  case 1:
    estoque = estoque + quantidade
    console.log(estoque)
  break
  
  case 2:
    if(estoque < quantidade) {
      console.log("Estoque insuficiente")
    } else console.log(estoque - quantidade)
  break
}