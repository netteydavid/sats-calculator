<script>
    import { onMount,afterUpdate } from 'svelte';
    import Card from './Card.svelte';
    import Currencies from './Currencies.svelte';
    import {price,symbol} from '$lib/scripts/stores.js';

    //Initialize app with the price
    onMount(() => getPrice());

    //Input element of the card
    $: price_input = null;

    //When true, permits format(). Should be false when user is typing.
    let formatted = false;
    //Reformats the input to always have two decimal places
    function format(){
        if (!formatted){
            price_input.value = Number.parseFloat(price_input.value).toFixed(2);
            formatted = true;
        }
    }
    afterUpdate(() => format());

    //Gets the most recent bitcoin price in the currency of the user's choice
    function getPrice() {
        fetch(`https://api.blockchain.com/v3/exchange/tickers/BTC-${$symbol}`)
        .then(response => {
            if (!response.ok) return {last_trade_price: 0};
            return response.json();
        })
        .then(data => {
            $price = data.last_trade_price;
            formatted = false;
        });
    }
</script>

<Card bind:input_value={$price} bind:card_input={price_input}>
    <div slot="header" class="flex flex-row">
        <h2 class="w-3/4 text-4xl md:text-5xl dark:text-white text-navy">Price</h2>
        <button on:click={getPrice} class="dark:text-white text-navy">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
                <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
            </svg>
        </button>
    </div>
    <Currencies slot="unit" />
</Card>