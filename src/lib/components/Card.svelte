<script>
    export let input_value;
    export let autoformat = true;
    export let step = ".01";
    export let disabled = false;

    let card_input;

    //Automatically formats the field
    function format(){
        if (autoformat) card_input.value = Number.parseFloat(card_input.value).toFixed(2);
    }
</script>

<div class="border border-navy rounded-lg px-5 py-8">
    <slot name="header" />
    <input bind:value={input_value}
     bind:this={card_input}
     on:change={format}
     type="number" 
     step={step}
     class="text-7xl text-navy w-3/4 outline-none focus:border-t-0 focus:border-x-0 focus:border-b-4 focus:border-navy" 
     {disabled} />
    <slot name="unit" />
</div>