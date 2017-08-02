<template>
    <nav class="navbar navbar-light red">
        <div class="container-fluid">
          <div class="navbar-header">
            <router-link to="/" class="navbar-brand">Stock Trader</router-link>
          </div>
          <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
                <router-link to="/portfolio" active-class="active" tag="li"><a>Portfolio</a></router-link>
                <router-link to="/stocks" active-class="active" tag="li"><a>Stocks</a></router-link>                
            </ul>
            <strong id="funds" class="navbar-text navbar-right">Funds: {{funds | currency }}</strong>
            <ul class="nav navbar-nav navbar-right">
              <li><a href="#" @click="endDay">End Day</a></li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Save & Load <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li><a href="#">Save Data</a></li>
                  <li><a href="#">Load Data</a></li>
                </ul>
              </li>
            </ul>
          </div><!--/.nav-collapse -->
        </div><!--/.container-fluid -->
      </nav>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	computed: {
		funds() {
			return this.$store.getters.funds;
		}
	},
	methods: {
		...mapActions([
			'randomizeStocks'
		]),
		endDay() {
			return this.randomizeStocks();
		}
	}
}
</script>


<style scoped>
.navbar a{
    color: #fff;
}

.navbar a:hover, .navbar a:active{
    color: #000;
}

.navbar-brand:hover {
	color: #fff;
	font-weight: bold;
}

#funds {
	color: #fff;
}
</style>
