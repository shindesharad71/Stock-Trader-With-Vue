<template>
<div>
    <div class="container">
        <footer class="col-md-offset-4 col-md-4">
            <div class="alert" :class="setAlert" id="footer">
                <h5 class="text-center"><i class="fa fa-info-circle" aria-hidden="true"></i> You Have <strong>{{ calculateStatus | currency }} - {{status}}</strong></h5>
            </div>
        </footer>
    </div>
</div>  
</template>

<script>
export default {
    data () {
        return {
            status: '',
            setAlert: 'alert-info'
        }
    },
    computed: {
        calculateStatus() {
            var netBalance = this.$store.getters.funds - 10000;
            if(netBalance < 0)
            {
                this.status = 'Loss';
                this.setAlert =  'alert-danger';
                return Math.abs(netBalance);
            }
            else if(netBalance >= 0)
            {
                this.status = 'Profit';
                this.setAlert =  'alert-success';
                return netBalance;
            }
        }
    }
}
</script>


<style scoped>
#footer {
    margin-top: 70px;
}
</style>

