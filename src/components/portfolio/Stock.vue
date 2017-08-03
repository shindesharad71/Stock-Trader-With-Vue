<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-info">
            <div class="panel-heading">
                <h3 class="panel-title">{{ stock.name }} <small>(Price: {{stock.price}} | Quantity: {{stock.quantity}})</small></h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input type="number" class="form-control" placeholder="Quantity" 
                    v-model="quantity" validate :class="{ danger : insufficientQuantity }">
                </div>
                <div class="pull-right">
                    <button class="btn btn-success" @click="sellStock" :disabled=" insufficientQuantity || quantity <= 0">
                        {{ insufficientQuantity ? 'Not enough' : 'Sell' }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    props: ['stock'],
    data () {
        return {
            quantity: 0
        }
    },
    methods: {
        ...mapActions({
            placeSellOrder: 'sellStock'
        }),
        sellStock() {
            const order = {
                stockId: this.stock.id,
                quantity: this.quantity,
                stockPrice: this.stock.price
            };
            this.placeSellOrder(order);
            this.quantity = 0;
            this.$emit('issell');
        }
    },
    computed: {
        insufficientQuantity() {
            return this.quantity > this.stock.quantity;
        }
    }
}
</script>

<style scoped>
.danger {
    border: 2px solid red;
}
</style>
