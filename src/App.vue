<template>
    <div id="app">
        <pm-header />
        <router-view />
        <pm-footer />
    </div>
</template>

<script>    
    import PmHeader from '@/components/layout/Header.vue'
    import PmFooter from '@/components/layout/Footer.vue'
    
    export default {
        name: 'pm-app',
        components: {
            'pm-header': PmHeader,
            'pm-footer': PmFooter
        }
    }
</script>

<style>
    @import './assets/css/main.css';
</style>
