// XML file directory that has currencies code
const currenciesUrl = "../currencies/currencyCode.xml"

fetch(currenciesUrl)
    .then(resp => {
        if (!resp) {
            throw new Error('requests xml error')
        }
        return resp.text();
    })
    .then(xmlString => {

        // Create a new XML Parser
        const parser = new DOMParser();
        // Transform XML Parser to XML file
        const xmlDoc = parser.parseFromString(xmlString, "application/xml");

        // Get all children elements from <currencies>
        const currenciesElement = xmlDoc.getElementsByTagName("currencies")[0];

        if (!currenciesElement) {
            throw new Error("<currencies> element not found")
        }

        const currencies = currenciesElement.children;
        const initialDatalist = createDatalist(currencies);
        const finalDatalist = createDatalist(currencies);

        const initialDatalistElement = document.getElementById("initialDatalist");
        const finalDatalistElement = document.getElementById("finalDatalist");

        initialDatalistElement.appendChild(initialDatalist);
        finalDatalistElement.appendChild(finalDatalist);

        // Make the selects elements global
        window.initialDatalist = initialDatalistElement;
        window.finalDatalist = finalDatalistElement;

    })
    .catch(Error => console.error(Error));

function createDatalist(currencies) {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < currencies.length; i++) {
        const currencyCode = currencies[i].tagName;
        const currencyName = currencies[i].textContent;

        const option = document.createElement("option");
        option.value = currencyCode;
        option.textContent = currencyName;

        fragment.appendChild(option);
    }

    return fragment;
}
