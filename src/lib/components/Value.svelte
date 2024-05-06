<script>
    import { afterUpdate } from 'svelte';
    import Card from './Card.svelte';
    import {calculated,symbol} from '$lib/scripts/stores.js';

    //Input element of the card
    $: input = null;
    //Reformats the input to always have two decimal places
    function format(){
        input.value = Number.parseFloat(input.value).toFixed(2);
    }
    //Formatting will happen whenever the card updates
    afterUpdate(() => format());

    $: value = $calculated;
</script>

<Card bind:input_value={value} bind:card_input={input} disabled={true}>
    <h2 slot="header" class="text-4xl md:text-5xl text-navy">Value</h2>
    <p slot="unit" class="text-4xl text-navy inline-block">{$symbol}</p>
</Card>