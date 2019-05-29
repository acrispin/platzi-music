<template>
	<div class="card" v-if="track && track.album">
		<div class="card-image">
			<figure class="image is-1by1">
				<img :src="track.album.images[0].url" alt="">
			</figure>
		</div>
		<div class="card-content">
			<div class="media">
				<div class="media-left">
					<figure class="image is-48x48">
						<img :src="track.album.images[0].url" alt="">
					</figure>
				</div>
				<div class="media-content">
					<p class="title is-6"><strong>{{ track.name }}</strong></p>
					<p class="subtitle is-6">{{ track.artists[0].name }}</p>
				</div>
			</div>
			<div class="content">
				<small>{{ track.duration_ms }}</small>
				<nav class="level">
					<div class="level-left">
						<a href="javascript:void(0)" class="level-item">
							<span class="icon is-small" @click="selectTrack">▶️</span>
						</a>
                        <a href="javascript:void(0)" class="level-item">
                            <span class="icon is-small" @click="goToTrack(track.id)">🌎</span>
                        </a>
					</div>
				</nav>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		// las propiedades son inmutables, estas son pasadas desde el padre
		props: {
			track: { type: Object, required: true}
		},
		methods: {
			selectTrack() {
				// emitimos un evento al padre para que ejecute una funcion, selectTrackEvent evento que el padre debe escuchar con v-on
				this.$emit('selectTrackEvent', this.track.id);

                // se invoca al plugin $bus instalado que tiene una instancia de Vue alterna a la actual, cualquiere componente o 
                // instancia de Vue que este escuchando el evento 'play-track' podra recibir el objeto 'track' enviado como parametro
                this.$bus.$emit('play-track', this.track);
			},
            goToTrack(id) {
                this.$router.push({ name: 'track', params: { id } });
            }
		}
	}
</script>
