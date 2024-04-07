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
<div class="container flex flex-row divide-x-[5px] divide-dashed divide-navy mx-auto my-14">
    <div class="flex-auto space-y-10 pr-10">
        <div class="border border-navy rounded-lg px-5 py-8">
            <div class="flex flex-row">
                <h2 class="grow text-5xl text-navy">Price</h2>
                <button on:click={getPrice}>Update Price</button>
            </div>
            <input bind:value={price}
             bind:this={price_input}
             on:input={calculateValue}
             type="number" 
             step=".01" 
             id="price_input"
             class="text-7xl text-navy w-3/4 outline-none focus:border-t-0 focus:border-x-0 focus:border-b-4 focus:border-navy" />
            <select bind:value={symbol} class="text-4xl bg-transparent">
                {#each symbols as sym}
                    <option value={sym} class="text-4xl text-navy">
                    {sym}
                    </option>
                {/each}
            </select>
        </div>
        <div class="border border-navy rounded-lg px-5 py-8">
            <h2 class="text-5xl text-navy">Amount</h2>
            <input bind:value={amount}
             on:input={calculateValue}
             type="number"
             step={amount_step}
              id="btc_amt_input"
              class="text-7xl text-navy w-3/4 outline-none focus:border-t-0 focus:border-x-0 focus:border-b-4 focus:border-navy" />
            <select bind:value={unit} on:input={convertUnit} class="text-4xl bg-transparent">
                {#each units as u}
                    <option value={u} class="text-4xl text-navy">
                    {u.toUpperCase()}
                    </option>
                {/each}
            </select>
        </div>
    </div>
    <div class="flex-auto content-center pl-10">
        <div class="border border-navy rounded-lg px-5 py-8">
            <h2 class="text-5xl text-navy">Value</h2>
            <label class="text-4xl text-navy">
                <input bind:value={value}
                type="number" 
                step=".01" 
                id="value_input"
                class="text-7xl text-navy w-3/4 outline-none" readonly/>
                {symbol}
            </label>
        </div>
    </div>
</div>

<div class="flex justify-center items-center my-8">
    <a target="_blank" rel="noreferrer noopener" class="mx-auto bg-orange text-white text-3xl p-4 rounded-lg" href="https://strike.me/mju_btc">
        Support this project
    </a>
</div>

