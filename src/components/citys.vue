<template>
	<div>
		<h3 class="city-header" v-html="city"></h3>
		<span style="display: block;margin-top: 10px;margin-bottom: 10px;">你所在的城市共有3条路线</span>
		<div class="card mb-3" v-for="(route,index) in routes" v-bind:key="index">
			<routeWay :data="route"></routeWay>
		</div>
	</div>
</template>

<script>

	import routeWay from './routeWay.vue'
	export default {
		mounted:function(){
			this.city = this.$route.query.city
			//请求拿取数据
		},
		components: {
			routeWay
		},
		data(){
			return{
				city:"",
				routes:[
					{
						img:require("../static/img/demo2.jpg"),
						title:"路线的标题",
						content:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
						sites:[
							{
								id:1,
								name:"兵马俑"
							},
							{
								id:2,
								name:"华清池"
							},
							{
								id:3,
								name:"大唐芙蓉园"
							},
							{
								id:4,
								name:"大雁塔"
							}
						]
					},
					{
						img:require("../static/img/demo2.jpg"),
						title:"路线的标题",
						content:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
						sites:[
							{
								id:1,
								name:"兵马俑"
							},
							{
								id:2,
								name:"华清池"
							},
							{
								id:3,
								name:"大唐芙蓉园"
							},
							{
								id:4,
								name:"大雁塔"
							}
						]
					},
					{
						img:require("../static/img/demo2.jpg"),
						title:"路线的标题",
						content:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
						sites:[
							{
								id:1,
								name:"兵马俑"
							},
							{
								id:2,
								name:"华清池"
							},
							{
								id:3,
								name:"大唐芙蓉园"
							},
							{
								id:4,
								name:"大雁塔"
							}
						]
					}
				],
			}
		}
	}
</script>

<style>
	.city-header{
		margin-top: 20px;
	}
</style>
