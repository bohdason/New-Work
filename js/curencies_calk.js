(async function () {

    const currencyEl_one = document.getElementById('currency-one');
    const amountEl_one = document.getElementById('amount-one');
    const currencyEl_two = document.getElementById('currency-two');
    const amountEl_two = document.getElementById('amount-two');

    const rateEl = document.getElementById('rate');

    async function caclulate() {
        const currency_one = currencyEl_one.value;
        const currency_two = currencyEl_two.value;
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`);
         const currencies = await response.json();
    
        const rate = currencies.rates[currency_two];
        rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
        amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
    
    currencyEl_one.addEventListener('change', caclulate);
    amountEl_one.addEventListener('input', caclulate);
    currencyEl_two.addEventListener('change', caclulate);
    amountEl_two.addEventListener('input', caclulate);
    }

    caclulate();
})();