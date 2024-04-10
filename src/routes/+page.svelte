<script>
    import Amount from '../lib/components/Amount.svelte';
    import Price from '../lib/components/Price.svelte';
    import Value from '../lib/components/Value.svelte';
</script>

<h1 class="text-center font-nunito font-[600] text-7xl text-navy mt-10">
    Sats Calculator
</h1>
<div class="container flex flex-row divide-x-[5px] divide-dashed divide-navy mx-auto my-14">
    <div class="flex-auto space-y-10 pr-10">
        <Price />
        <Amount />
    </div>
    <div class="flex-auto content-center pl-10">
        <Value />
    </div>
</div>

<div class="flex justify-center items-center my-8">
    <a target="_blank" rel="noreferrer noopener" class="mx-auto bg-orange text-white text-3xl p-4 rounded-lg" href="https://strike.me/mju_btc">
        Support this project
    </a>
</div>

