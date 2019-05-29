<template>
	<div class="container results">
        <div class="columns is-multiline">
            <div class="column is-one-quarter" v-for="t in tracks">
                <pm-track 
                    :track="t" 
                    @selectTrackEvent="setSelectedTrack"
                    :class="{ 'is-active': t.id === selectedTrack }">                            
                </pm-track>
            </div>
        </div>
    </div>
</template>

<script>
    import PmTrack from '@/components/Track.vue'

	export default {
		props: [ 'tracks' ],
		components: {
            'pm-track': PmTrack
        },
		data () {
			return {
                selectedTrack: ''
			}
		},
		methods: {			
            setSelectedTrack(id) {
                this.selectedTrack = id;
            }
		}
	}
</script>

<style lang="css" scoped>
    .is-active {
        border: 3px #23d160 solid;
    }
</style>
