<script>
    import {symbols, symbol} from '$lib/scripts/stores.js';
</script>

<select bind:value={$symbol} class="text-4xl dark:text-white bg-transparent">
    {#each symbols as sym}
        <option value={sym} class="text-4xl dark:text-white dark:bg-navy text-navy">
        {sym}
        </option>
    {/each}
</select>