<script>
    let price = getPrice();
    let amount = 0;
    let value = 0;

    function getPrice(){
        fetch("https://api.blockchain.com/v3/exchange/tickers/BTC-USD")
        .then(response => {
            if (!response.ok) return {price_24h: 0};
            return response.json();
        })
        .then(data => {
            price = data.price_24h;
            calculateValue();
        });
    }

    function calculateValue(){
        if (price == null) return;
        if (amount == null) return;
        price = Number.parseFloat(price.toFixed(2));
        var result = price * (amount / 100000000);
        value = Number.parseFloat(result.toFixed(2));
    }
</script>

<h1>Sats Calculator</h1>

<h2>Price (USD)</h2>
<input bind:value={price}
 on:input={calculateValue}
 type="number" 
 step=".01" 
 id="price_input" />
 <button on:click={getPrice}>Reset</button>
<br />

<h2>Bitcoin Amount (sats)</h2>
<input bind:value={amount}
 on:input={calculateValue}
 type="number"
  id="btc_amt_input" />
<br />

<h2>Value (USD)</h2>
<input bind:value={value}
 type="number" 
 step=".01" 
 id="value_input" />
