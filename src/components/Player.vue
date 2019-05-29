<template lang="html">
	<div class="content" v-if="track.album">
		<p>
			<img :src="track.album.images[0].url" alt="">
		</p>
		<p>
			<strong>{{ track.name }}</strong>
			<small>[{{ track.duration_ms}}]</small>
		</p>
		<p>
			<audio :src="track.preview_url" controls></audio>
		</p>
	</div>
</template>

<script>
	export default {
		name: 'pm-player',
		data () {
			return {
				track: {}
			}
		},
		created() {
			// Se escucho al evento 'play-track' con $on, esto emitido con el $bus
			this.$bus.$on('play-track', (track) => {
				this.track = track;
			});
		}
	}
</script>

<style lang="css" scoped>
	img {
		width: 124px;
		border-radius: 50%;
	}
</style>
