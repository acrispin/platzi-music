<template>
	<div class="container">
		<div class="columns">
			<div class="column is-5 is-offset-4">				
				<pm-track :track="track" />
			</div>
		</div>
	</div>
</template>

<script>
	import trackService from '@/services/track'
	import PmTrack from '@/components/Track.vue'

	export default {
		name: 'pm-track-detail',
		components: {
			'pm-track': PmTrack
		},
		data () {
			return {
				track: {}
			}
		},
		created() {
			const idTrack = this.$route.params.id;
			trackService.getTrackById(idTrack)
				.then(res => {
					this.track = res;
				});
		}
	}
</script>

<style lang="css" scoped>
	.columns {
		margin: 20px;
	}
</style>
