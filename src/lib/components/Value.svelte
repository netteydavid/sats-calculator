<script>
    import Card from './Card.svelte';
    import {calculated,symbol} from '$lib/scripts/stores.js';

    $: value = $calculated;
</script>

<Card bind:input_value={value} disabled={true}>
    <h2 slot="header" class="text-5xl text-navy">Value</h2>
    <p slot="unit" class="text-4xl text-navy inline-block">{$symbol}</p>
</Card>