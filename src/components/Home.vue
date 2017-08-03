<template>
<div>
    <h1><i class="fa fa-line-chart" aria-hidden="true"></i> Stock Trader Made With Vue JS 2<br>
    <small><i class="fa fa-user" aria-hidden="true"></i> By Sharad Shinde</small></h1>
    <br>
    <h3>Features</h3>
    <li>You May Save & Load Your Data</li>
    <li>Click on 'End Day' To Begain New Day!</li>
    <hr>
    <br>
    <p>Your Funds: {{ funds | currency }}</p>
</div>
</template>

<script>
export default {
    computed: {
        funds() {
            return this.$store.getters.funds;
        }
    }
}
</script>

