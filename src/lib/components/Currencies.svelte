<script>
    import {symbols, symbol} from '$lib/scripts/stores.js';
</script>

<select bind:value={$symbol} class="text-4xl bg-transparent">
    {#each symbols as sym}
        <option value={sym} class="text-4xl text-navy">
        {sym}
        </option>
    {/each}
</select>