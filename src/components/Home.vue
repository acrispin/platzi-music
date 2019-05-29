<template>
    <main>
        <pm-notification v-show="showNotification">
            <p slot="body">No se encontraron resultados</p>
        </pm-notification>
        <pm-loader v-show="isLoading" />
        <section class="section" v-show="!isLoading">
            <pm-search @searchEvent="searchCalled" @showLoadingEvent="showLoadingCalled"></pm-search>
            <div class="container">
                <p><small>{{ searchMessage }}</small></p>
            </div>
            <pm-results :tracks="tracks"></pm-results>
        </section>
    </main>
</template>

<script>
    import PmNotification from '@/components/shared/Notification.vue'
    import PmLoader from '@/components/shared/Loader.vue'
    import PmSearch from '@/components/Search.vue'
    import PmResults from '@/components/Results.vue'
    
    export default {
        name: 'pm-home',
        components: {
            'pm-notification': PmNotification,
            'pm-loader': PmLoader,
            'pm-search': PmSearch,
            'pm-results': PmResults
        },
        data () {
            return {
                isLoading: false,
                showNotification: false,
                tracks: []
            }
        },
        computed: {
            searchMessage() {
                return `Numero de canciones encontradas: ${this.tracks.length}`;
            }
        },
        watch: {
            showNotification() {
                if (this.showNotification) {
                    setTimeout(() => {
                        this.showNotification = false;
                    }, 3000);
                }
            }
        },
        methods: {
            searchCalled(tracks) {
                this.tracks = tracks;
                this.showNotification = tracks.total === 0;
            },
            showLoadingCalled(flag) {
                this.isLoading = flag;
            }
        }
    }
</script>

<style>
    .results {
        margin-top: 50px;
    }
</style>
