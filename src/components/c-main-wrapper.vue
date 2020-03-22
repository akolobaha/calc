<template>
	<div class="c-main-wrapper">
		<v-container class="fill-height">
			<v-row align="center" justify="center"></v-row>
				<v-row>
					<router-view></router-view>
				</v-row>
				
		</v-container>
		
	</div>
</template>

<script>
export default {
	name: 'c-main-wrapper'
}
</script>

<style>

</style>