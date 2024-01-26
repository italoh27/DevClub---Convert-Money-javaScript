

const botaoconvert = document.querySelector(".botao-converte")
const optionselect = document.querySelector(".select-option")



function ConverterValor() {

    const inputvalor = document.querySelector(".input-valor").value
    const realvalorconverter = document.querySelector(".valor-real")
    const dolarvalorconvertido = document.querySelector(".valor-dolar")

    console.log(optionselect.value)
   

    const valordodolar = 5.2
    const valordoeuro = 6.2
    const valorlibra = 6.7
    const valorbitcoin = 143.000
    const valorreal = null

    if (optionselect.value == "dolar") {

        dolarvalorconvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputvalor / valordodolar)
    }

    if (optionselect.value == "euro") {
        dolarvalorconvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputvalor / valordoeuro)

    }

    if (optionselect.value == "libra") {
        dolarvalorconvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "GBP"
        }).format(inputvalor / valorlibra)

    }

    if (optionselect.value == "bitcoin") {
        dolarvalorconvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputvalor / valorbitcoin)

    }




    realvalorconverter.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(inputvalor)

}


function trocarmoeda() {

    const troqueidemoeda = document.getElementById(selectmoeda)
    const trocadeimg = document.querySelector(".imgtrocar")


    if (optionselect.value == "dolar") {

        selectmoeda.innerHTML = "Dólar americano"
        trocadeimg.src = "./assets/dolar.png"
    }

    if (optionselect.value == "euro") {

        selectmoeda.innerHTML = "Euro"
        trocadeimg.src = "./assets/euro.png"

    }

    if (optionselect.value == "libra") {

        selectmoeda.innerHTML = "Libra"
        trocadeimg.src = "./assets/libra.png"

    }


    if (optionselect.value == "bitcoin") {

        selectmoeda.innerHTML = "Bitcoin"
        trocadeimg.src = "./assets/bitcoin 1.png"

    }

    ConverterValor()

}


optionselect.addEventListener("change", trocarmoeda)
botaoconvert.addEventListener("click", ConverterValor)





