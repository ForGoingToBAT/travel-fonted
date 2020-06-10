<template>
  <div>
    <travelHeader/>
	<travelImages/>
	<HotRoutes/>
  </div>
</template>

<script>
import travelHeader from '../../components/travelHeader.vue'
import travelImages from '../../components/travelImages.vue'
import HotRoutes from './components/HotRoutes.vue'
export default {
  name: 'App',
  components: {
      travelHeader,
	  travelImages,
	  HotRoutes
  }
}
</script>

<style>
</style>
