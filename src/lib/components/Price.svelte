<script>
    import { onMount } from 'svelte';
    import Card from './Card.svelte';
    import Currencies from './Currencies.svelte';
    import refresh from '$lib/assets/refresh-cw.svg';
    import {price,symbol} from '$lib/scripts/stores.js';

    onMount(() => getPrice());

    function getPrice() {
        fetch(`https://api.blockchain.com/v3/exchange/tickers/BTC-${$symbol}`)
        .then(response => {
            if (!response.ok) return {last_trade_price: 0};
            return response.json();
        })
        .then(data => {
            $price = data.last_trade_price;
        });
    }
</script>

<Card bind:input_value={$price}>
    <div slot="header" class="flex flex-row">
        <h2 class="w-3/4 text-5xl text-navy">Price</h2>
        <button on:click={getPrice}>
            <img src={refresh} alt="Refresh Price" />
        </button>
    </div>
    <Currencies slot="unit" />
</Card>