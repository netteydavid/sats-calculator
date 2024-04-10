<script>
  import Card from './Card.svelte';
  import Units from './Units.svelte';
  import {amount,units,unit} from '$lib/scripts/stores.js';

  $: step = (unit == units[1]) ? "0.00000001" : "1";
</script>

<Card bind:input_value={$amount} autoformat={false} {step}>
    <h2 slot="header" class="text-5xl text-navy">Amount</h2>
    <Units slot="unit" />
</Card>