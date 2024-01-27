

const botaoconvert = document.querySelector(".botao-converte")
const optionselect = document.querySelector(".select-option")



const ConverterValor = async ()=> {

    const inputvalor = document.querySelector(".input-valor").value
    const realvalorconverter = document.querySelector(".valor-real")
    const valorconvertido = document.querySelector(".valor")

    console.log(optionselect.value)
   

    const data = await fetch ("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())
   

    const valordodolar = data.USDBRL.high
    const valordoeuro = data.EURBRL.high
    const valorlibra = 6.25
    const valorbitcoin = data.BTCBRL.high
    const valorreal = null


    if (optionselect.value == "dolar") {

        valorconvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputvalor / valordodolar)
    }

    if (optionselect.value == "euro") {
        valorconvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputvalor / valordoeuro)

    }

    if (optionselect.value == "libra") {
        valorconvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "GBP"
        }).format(inputvalor / valorlibra)

    }

    if (optionselect.value == "bitcoin") {
        valorconvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputvalor / valorbitcoin)
        valorconvertido = Math.round(valorconvertido)

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

        selectmoeda.innerHTML = "bitcoin"
        trocadeimg.src = "./assets/bitcoin 1.png"

    }

    ConverterValor()

}


optionselect.addEventListener("change", trocarmoeda)
botaoconvert.addEventListener("click", ConverterValor)

