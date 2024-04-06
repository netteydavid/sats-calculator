<script>
    import {onMount} from 'svelte';

    const sats_per_btc = 100000000;
    const units = ["sats", "btc"];
    let unit = units[0];
    const symbols = ["USD", "EUR", "GBP"];
    let symbol = symbols[0];

    let price_input;
    let price = 0;
    let amount = 0;
    let value = 0;

    $: amount_step = (unit == units[1]) ? "0.00000001" : "1";

    onMount (() => getPrice());

    //Gets latest BTC price
    function getPrice(){
        fetch(`https://api.blockchain.com/v3/exchange/tickers/BTC-${symbol}`)
        .then(response => {
            if (!response.ok) return {last_trade_price: 0};
            return response.json();
        })
        .then(data => {
            price = data.last_trade_price;
            calculateValue();
        });
    }

    //Converts amount from sats and BTC
    function convertUnit(){
        if (unit == units[1]){
            amount = amount * sats_per_btc
        }
        else{
            amount = amount / sats_per_btc;
        }
    }

    //Calculates value and formats price and value
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

<h1 class="text-center font-nunito font-[600] text-7xl text-navy">
    Sats Calculator
</h1>
<div class="container flex flex-row divide-x divide-dashed mx-auto my-14">
    <div class="flex-auto space-y-10 pr-10">
        <div class="border border-navy rounded-lg px-5 py-8">
            <div class="flex flex-row">
                <h2 class="grow">Price</h2>
                <button on:click={getPrice}>Update Price</button>
            </div>
            <input bind:value={price}
             bind:this={price_input}
             on:input={calculateValue}
             type="number" 
             step=".01" 
             id="price_input" />
            <select bind:value={symbol}>
                {#each symbols as sym}
                    <option value={sym}>
                    {sym}
                    </option>
                {/each}
            </select>
        </div>
        <div class="border border-navy rounded-lg px-5 py-8">
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
        </div>
    </div>
    <div class="flex-auto content-center pl-10">
        <div class="border border-navy rounded-lg px-5 py-8">
            <h2>Value</h2>
            <label>
                <input bind:value={value}
                type="number" 
                step=".01" 
                id="value_input" readonly/>
                {symbol}
            </label>
        </div>
    </div>
</div>

<div class="container mx-auto items-center my-8">
    <a class="block text-center" href="https://strike.me/mju_btc">
        Support this project
    </a>
</div>

