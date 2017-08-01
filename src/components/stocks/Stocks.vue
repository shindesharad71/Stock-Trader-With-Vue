<template>
<div>
    <app-stock v-for="stock in stocks"></app-stock>
</div>
</template>

<script>
import Stock from './Stock.vue';

export default {
  data () {
      return {
          stocks: [
              {id:1, name: 'BMW', price: 100},
              {id:2, name: 'ABC', price: 150},
              {id:3, name: 'XYZ', price: 190}
          ]
      }
    },
    components: {
        'app-stock': Stock
    }
}
</script>
