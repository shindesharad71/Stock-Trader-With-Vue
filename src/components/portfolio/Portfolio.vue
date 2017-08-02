<template>
<div>
    <app-data-stock v-for="stock in stocks" :stock="stock"></app-data-stock>
</div>
</template>

<script>
import {mapGetters} from 'vuex';
import Stock from './Stock.vue';

export default {
    computed: {
        ...mapGetters({
        stocks: 'stockPortfolio'
        })
    },
    components: {
        'app-data-stock': Stock
    }
}
</script>
