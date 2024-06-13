import { convertCurrency } from "./util";

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("currencyForm").addEventListener("submit", CalculateQuote);

    // Calculate the cambio
    function CalculateQuote(event) {
        event.preventDefault();

        const initialCurrency = document.getElementById("initialCurrency").value;
        const finalCurrency = document.getElementById("finalCurrency").value;

        if (!initialCurrency || !finalCurrency) {
            console.error("Both currencies must be selected");
            return;
        }

        const urlApi = `https://economia.awesomeapi.com.br/last/${initialCurrency}-${finalCurrency}`;

        console.log(`url da api: ${urlApi}`);

        fetch(urlApi)
            .then(resp => {
                if (!resp.ok) {
                    throw new Error("Request failed!");
                }
                console.log(resp)
                return resp.json()
            })
            .then(data => {
                const cod = initialCurrency + finalCurrency;
                const quote = parseFloat(data[cod].bid);

                const currencyValue = document.getElementById("initialCurrencyInput").value;
                document.getElementById("finalCurrencyInput").value = convertCurrency(currencyValue, quote);
                
            })
            .catch(error => {
                console.error(error);
            });
    }
});
