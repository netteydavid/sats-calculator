<script>
    let price = 0;
    let amount = 0;
    let value = 0;

    function calculateValue(event){
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
