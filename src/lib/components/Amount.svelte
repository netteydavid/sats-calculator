<script>
  import Card from './Card.svelte';
  import Units from './Units.svelte';
  import {amount,units,unit} from '$lib/scripts/stores.js';

  //Handles step based on chosen bitcoin unit
  $: step = (unit == units[1]) ? "0.00000001" : "1";
</script>

<Card bind:input_value={$amount} {step}>
    <h2 slot="header" class="text-4xl md:text-5xl text-navy">Amount</h2>
    <Units slot="unit" />
</Card>