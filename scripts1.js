const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector("#moeda-desejada")
const myCurrencySelec = document.querySelector("#minha-moeda")


function myChageCurrency() {
    const myCurrencyImage = document.querySelector(".icone-seu")
    const myCurrencyImages = document.querySelector(".icone-teu")

    if (myCurrencySelec.value == "meureal") {
        myCurrencyImage.src = "./icones.img/icone real.png"
        myCurrencyImages.src = "./icones.img/icone real.png"
    }
    if (myCurrencySelec.value == "meudolar") {
        myCurrencyImage.src = "./icones.img/Icone Dolar.png"
        myCurrencyImages.src = "./icones.img/Icone Dolar.png"
    }
    if (myCurrencySelec.value == "meueuro") {
        myCurrencyImage.src = "./icones.img/Icone Euro.png"
        myCurrencyImages.src = "./icones.img/Icone Euro.png"
    }
    if (myCurrencySelec.value == "meufranco") {
        myCurrencyImage.src = "./icones.img/Icone Franco.png"
        myCurrencyImages.src = "./icones.img/Icone Franco.png"
    }
    if (myCurrencySelec.value == "meuwon") {
        myCurrencyImage.src = "./icones.img/icone won.png"
        myCurrencyImages.src = "./icones.img/icone won.png"
    }
    if (myCurrencySelec.value == "meuyen") {
        myCurrencyImage.src = "./icones.img/icone yen japonês.png"
        myCurrencyImages.src = "./icones.img/icone yen japonês.png"
    }
    if (myCurrencySelec.value == "meulira") {
        myCurrencyImage.src = "./icones.img/icone-lira-turca-.png"
        myCurrencyImages.src = "./icones.img/icone-lira-turca-.png"
    }
    if (myCurrencySelec.value == "meubitcoin") {
        myCurrencyImage.src = "./icones.img/icone bitcoin.png"
        myCurrencyImages.src = "./icones.img/icone bitcoin.png"
    }
}
myCurrencySelec.addEventListener("change", myChageCurrency)

function changeCurrency() {
    const currencyImage = document.querySelector(".icone-troca")
    const currencyImages = document.querySelector(".icone-trocas")

    if (currencySelect.value == "real") {
        currencyImage.src = "./icones.img/icone real.png"
        currencyImages.src = "./icones.img/icone real.png"
    }
    if (currencySelect.value == "dolar") {
        currencyImage.src = "./icones.img/Icone Dolar.png"
        currencyImages.src = "./icones.img/Icone Dolar.png"
    }
    if (currencySelect.value == "euro") {
        currencyImage.src = "./icones.img/Icone Euro.png"
        currencyImages.src = "./icones.img/Icone Euro.png"
    }
    if (currencySelect.value == "franco") {
        currencyImage.src = "./icones.img/Icone Franco.png"
        currencyImages.src = "./icones.img/Icone Franco.png"
    }
    if (currencySelect.value == "won") {
        currencyImage.src = "./icones.img/icone won.png"
        currencyImages.src = "./icones.img/icone won.png"
    }
    if (currencySelect.value == "yen") {
        currencyImage.src = "./icones.img/icone yen japonês.png"
        currencyImages.src = "./icones.img/icone yen japonês.png"
    }
    if (currencySelect.value == "lira") {
        currencyImage.src = "./icones.img/icone-lira-turca-.png"
        currencyImages.src = "./icones.img/icone-lira-turca-.png"
    }
    if (currencySelect.value == "bitcoin") {
        currencyImage.src = "./icones.img/icone bitcoin.png"
        currencyImages.src = "./icones.img/icone bitcoin.png"
    }
}

currencySelect.addEventListener("change", changeCurrency)

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueConverted = document.querySelector(".currency-value")


    const dolarToday = 5.11
    const eurotoday = 5.12
    const realToday = 1
    const yenToday = 0.032
    const francoToday = 5.6
    const liraToday = 0.16
    const wonToday = 0.0037
    const bitcoinToday = 327160.45


    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }
    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / eurotoday)
    }
    if (currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToday)
    }
    if (currencySelect.value == "yen") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputCurrencyValue / yenToday)
    }
    if (currencySelect.value == "franco") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("fr-CH", {
            style: "currency",
            currency: "CHF"
        }).format(inputCurrencyValue / francoToday)
    }
    if (currencySelect.value == "lira") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("tr-TR", {
            style: "currency",
            currency: "TRY"
        }).format(inputCurrencyValue / liraToday)
    }
    if (currencySelect.value == "won") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ko-KR", {
            style: "currency",
            currency: "KRW"
        }).format(inputCurrencyValue / wonToday)
    }
    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",
            currencyDisplay: "name"
        }).format(inputCurrencyValue / bitcoinToday)
    }



}