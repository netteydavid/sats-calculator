<script>
    let price = getPrice();
    let amount = 0;
    let value = 0;

    const sats_per_btc = 100000000;
    const units = ["sats", "btc"];
    let unit = "sats";

    $: amount_step = (unit == units[1]) ? "0.00000001" : "1";

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

    function convertUnit(){
        if (unit == units[1]){
            amount = amount * sats_per_btc
        }
        else{
            amount = amount / sats_per_btc;
        }
    }

    function calculateValue(){
        if (price == null) return;
        if (amount == null) return;
        price = Number.parseFloat(price.toFixed(2));
        var result;
        if (unit == units[1]){
            result = price * amount;
        }
        else{
            result = (price / sats_per_btc) * amount;
        }
        
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

<h2>Bitcoin Amount</h2>
<input bind:value={amount}
 on:input={calculateValue}
 type="number"
 step={amount_step}
  id="btc_amt_input" />
<select bind:value={unit} on:input={convertUnit}>
    {#each units as u}
        <option value={u}>
        {u.toUpperCase()}
        </option>
    {/each}
</select>
<br />

<h2>Value (USD)</h2>
<input bind:value={value}
 type="number" 
 step=".01" 
 id="value_input" />
