<template>
<div>
    <h1><i class="fa fa-line-chart" aria-hidden="true"></i> Stock Trader Made With Vue JS 2<br>
    <small><i class="fa fa-user" aria-hidden="true"></i> By Sharad Shinde</small></h1>
    <a href="https://github.com/shindesharad71/Stock-Trader-With-Vue" target="_blank"><i class="fa fa-github" aria-hidden="true"></i> GitHub Repo</a>
    <br>
    <div class="row">
        <div class="col-md-6">
            <h3>Features</h3>
            <li>You May Save & Load Your Data</li>
            <li>Click on 'End Day' To Begain New Day!</li>
            <li>Live Profit or Loss Status</li>
            <li>Stock Price Changes Everyday! Which Makes More Fun!</li><br>
            <router-link to="/stocks" class="btn btn-primary btn-lg" tag="button"><i class="fa fa-bolt" aria-hidden="true"></i> Start Trading!</router-link>
        </div>
        <div class="col-md-6">
            <img src="https://camo.githubusercontent.com/224f79940611c6c12fb649128eca1cae31086d23/68747470733a2f2f7261776769742e636f6d2f7675656a732f617765736f6d652d7675652f6d61737465722f6c6f676f2e706e67"
            class="img-responsive" width="300px" height="300px">
        </div>
    </div>
    <hr>
    <br>
    <p><i class="fa fa-money" aria-hidden="true"></i> Your Funds: {{ funds | currency }}</p>
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

