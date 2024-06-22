<script>
    export let input_value;
    export let step = ".01";
    export let disabled = false;

    //Exposes input element
    export let card_input;
</script>

<div class="border dark:border-white border-navy rounded-lg px-5 py-8">
    <slot name="header" />
    <input bind:value={input_value}
     bind:this={card_input}
     type="number" 
     step={step}
     class="text-5xl md:text-7xl dark:text-white dark:bg-transparent text-navy w-2/3 md:w-3/4 outline-none focus:border-t-0 focus:border-x-0 focus:border-b-4 focus:border-navy dark:focus:border-white" 
     {disabled} />
    <slot name="unit" />
</div>