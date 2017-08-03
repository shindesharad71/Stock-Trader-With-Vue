<template>
<div>
    <app-header></app-header>
    <div class="container">
        <div class="row">
            <transition name="slide" mode="out-in">
                <router-view :class="bottom"></router-view>
            </transition>
        </div>
    </div>
    <app-footer></app-footer>
</div>
</template>

<script>
    import Header from './components/Header.vue';
    import Footer from './components/Footer.vue';
    export default {
        components: {
            'app-header': Header,
            'app-footer': Footer
        },
        created () {
            this.$store.dispatch('initStocks');
        }
    }
</script>

<style>

.bottom {
    margin-bottom: 70px;
}

.slide-enter-active {
    animation: slide-in 200ms ease-out forwards;
}

.slide-leave-active {
    animation: slide-out 200ms ease-out forwards;
}

@keyframes slide-in {
    from {
        transform: translateY(-30px);
        opacity: 0
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

@keyframes slide-out {
    from {
        transform: translateY(0);
        opacity: 1;
    }
    to {
        transform: translateY(-30px);
        opacity: 0
    }
}
</style>
