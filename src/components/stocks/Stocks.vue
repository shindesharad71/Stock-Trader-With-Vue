<template>
<div>
    <h1 class="text-center"><i class="fa fa-cubes"></i> Stocks Available</h1><br>
    <app-stock v-for="stock in stocks" :stock="stock"></app-stock><br>
    <p class="text-center" id="info"><i class="fa fa-info-circle"></i> <i>enter number of stocks you want to buy for perticular stock.</i></p>
</div>
</template>

<script>
import Stock from './Stock.vue';

export default {
    components: {
        'app-stock': Stock
    },
    computed: {
        stocks() {
            return this.$store.getters.stocks;
        }
    }
}
</script>