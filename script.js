/* Menu Hamburguer */

var hamburguer = document.querySelector(".hamburguer")

hamburguer.addEventListener("click", () => {
    document.querySelector(".container").classList.toggle("show-menu")
})

/* Orçamento */

const atores = document.querySelector("#qtd")
const foco = document.querySelector("#exp")
const curador = document.querySelector("#curador-0")
const curadorNao = document.querySelector("#curador-1")
const prazo = document.querySelector("#prazo")

atores.addEventListener("change", atualizarPreco)
foco.addEventListener("change", atualizarPreco)
curador.addEventListener("change", atualizarPreco)
curadorNao.addEventListener("change", atualizarPreco)
prazo.addEventListener("change", () => {
    const entrega = prazo.value
    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${entrega} semana(s)`
    atualizarPreco()
})

function atualizarPreco() {
    const qtd = atores.value
    //console.log(qtd);
    const exp = foco.checked
    const curadoria = curador.checked
    const curadoriaNao = curadorNao.checked
    const entrega = prazo.value

    let preco = qtd*100

    if(exp) preco *= 1.1
    if(curadoria) preco += 500
    // if(curadoriaNao) preco += 0
    
    let taxaUrgencia = 1 + entrega*0.1;
    preco *= 1 + taxaUrgencia;

    document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2)}`
}