document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("currencyForm").addEventListener("submit", fetchAndCalculateQuote);

    function fetchAndCalculateQuote(event) {
        event.preventDefault();

        const initialCurrency = document.getElementById("initialCurrency").value;
        const finalCurrency = document.getElementById("finalCurrency").value;

        if (!initialCurrency || !finalCurrency) {
            console.error("Both currencies must be selected");
            return;
        }

        const urlApi = `https://economia.awesomeapi.com.br/last/${initialCurrency}-${finalCurrency}`;

        console.log(`url da api: ${urlApi}`);
    }
});
