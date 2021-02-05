// get elments
const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');

const swap = document.getElementById("swap");
const rateEl = document.getElementById('rate');


// get exchange rate and update dom
function calculate() {
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;
    // console.log(currency_one,currency_two);

    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then(res => res.json())
    .then(data => {
        const rate = data.rates[currency_two];
        rateEl.innerText = `1${currencyEl_one} = ${rate}${currencyEl_two}`
        amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
    })
}

calculate();

// add eventlisteners
currencyEl_one.addEventListener('change',calculate);
amountEl_one.addEventListener('input',calculate);
currencyEl_two.addEventListener('change',calculate);
amountEl_two.addEventListener('input',calculate);