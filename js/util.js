
export function convertCurrency(value, quote) {
    const result = (value * quote).toFixed(2);
    return result;
}