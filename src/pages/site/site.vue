<template>
	<div>
		<travelHeader/>
		<travelImages></travelImages>
		<sites/>
	</div>
</template>

<script>
	import travelHeader from '../../components/travelHeader.vue'
	import travelImages from '../../components/travelImages.vue'
	import sites from './components/sites.vue'
	export default {
	  components: {
		  travelHeader,
		  travelImages,
		  sites
	  }
	}
</script>

<style>
</style>
