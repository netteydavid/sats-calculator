<script>
    import {units, sats_per_btc, unit, amount} from '$lib/scripts/stores.js';

    //Converts amount from sats and BTC
    function convertUnit(){
        if ($unit == units[1]){
            $amount = $amount * sats_per_btc
        }
        else{
            $amount = $amount / sats_per_btc;
        }
    }
</script>

<select bind:value={$unit} on:input={convertUnit} class="text-4xl bg-transparent dark:text-white">
    {#each units as u}
        <option value={u} class="text-4xl dark:text-white dark:bg-navy text-navy">
        {u.toUpperCase()}
        </option>
    {/each}
</select>