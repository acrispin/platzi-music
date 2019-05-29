<template lang="html">
	<div class="container">
		<div class="columns">
			<div class="column is-5 is-offset-4">
				<div class="notification is-danger">
					<slot name="body">
						Texto Notificacion Default
					</slot>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="css" scoped>
	.notification {
		margin: 10px;
	}
</style>
