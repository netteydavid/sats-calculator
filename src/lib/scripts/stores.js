import { derived, writable } from "svelte/store";

export const sats_per_btc = 100000000;
export const symbols = ["USD", "EUR", "GBP"];
export const units = ["sats", "btc"];

export const symbol = writable(symbols[0]);
export const unit = writable(units[0]);
export const price = writable(0);
export const amount = writable(0);

export const calculated = derived([price, amount, unit], ([$price, $amount, $unit]) => {
    if ($price == null) return 0;
    if ($amount == null) return 0;
    
    if ($unit == units[1]){
        return Math.round(100 * $price * $amount) / 100;
    }
    else{
        return Math.round(100 * (($price / sats_per_btc) * $amount)) / 100;
    }
});