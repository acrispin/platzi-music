<template>
	<nav class="navbar">
        <div class="container">
            <input class="input is-large" 
                type="text" 
                placeholder="Buscar musica" 
                v-model="searchQuery">
            <a class="button is-info is-large" @click="search">Buscar</a>
            <a class="button is-danger is-large">&times;</a>                    
        </div>
    </nav>
</template>

<script>
	import trackService from '@/services/track'

	export default {
		data () {
			return {
				searchQuery: ''
			}
		},
        methods: {
            search() {
                if (!this.searchQuery) { return }

                this.$emit('showLoadingEvent', true);
                trackService.search(this.searchQuery)
                    .then( res => {
                        this.$emit('searchEvent', res.tracks.items);
                        this.$emit('showLoadingEvent', false);
                    })
            }
        }
	}
</script>
