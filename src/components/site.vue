<template>
	<div>
		<travelImages></travelImages>
		<sites/>
		<hotCity></hotCity>
	</div>
</template>

<script>
	import travelImages from './travelImages.vue'
	import sites from './sites.vue'
	import hotCity from './hotcity.vue'
	export default {
		components: {
			travelImages,
			sites,
			hotCity
		}
	}
</script>

<style>
</style>
