document.addEventListener("DOMContentLoaded", () => {
    const fromCurrencySelect = document.getElementById("fromCurrency");
    const toCurrencySelect = document.getElementById("toCurrency");
    const amountInput = document.getElementById("amount");
    const convertButton = document.getElementById("convert");
    const resultDiv = document.getElementById("result");
  
    
    fetch("https://api.apilayer.com/exchangerates_data/supported_codes", {
      headers: {
        "apikey": "YOUR_API_KEY_HERE" 
      }
    })
      .then((response) => response.json())
      .then((data) => {
        const currencies = data.supported_codes;
        currencies.forEach((currency) => {
          const option1 = document.createElement("option");
          option1.value = currency;
          option1.text = currency;
          const option2 = document.createElement("option");
          option2.value = currency;
          option2.text = currency;
          fromCurrencySelect.appendChild(option1);
          toCurrencySelect.appendChild(option2);
        });
      })
      .catch((error) => console.error(error));
  
  
    convertButton.addEventListener("click", () => {
      const fromCurrency = fromCurrencySelect.value;
      const toCurrency = toCurrencySelect.value;
      const amount = amountInput.value;
  
      fetch(`https://api.apilayer.com/exchangerates_data/pair_conversion?from=${fromCurrency}&to=${toCurrency}&amount=${amount}`, {
        headers: {
          "apikey": "YOUR_API_KEY_HERE" 
        }
      })
        .then((response) => response.json())
        .then((data) => {
          const exchangeRate = data.result;
          const convertedAmount = (amount * exchangeRate).toFixed(2);
          resultDiv.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
        })
        .catch((error) => {
          console.error(error);
          resultDiv.textContent = "Error with getting exchange rate.";
        });
    });
  });
  