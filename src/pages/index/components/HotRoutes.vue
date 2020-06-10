<template>
	<!--最热门路线-->
	<div class="container">
		<div class="hot-routes"style="margin-top: 20px;margin-bottom: 20px;">
			<a href="#" ><span>最热门路线>></span></a>
		</div>
		<div class="card mb-3" v-for="(route,index) in routes">
		  <div class="row no-gutters">
		    <div class="col-md-2">
		      <img :src="route.img" class="card-img" alt="...">
		    </div>
		    <div class="col-md-10">
		      <div class="card-body">
		        <h5 class="card-title">{{route.title}}</h5>
		        <p class="card-text">{{route.content}}</p>
		        <p class="card-text">
					<small class="text-muted">
						<span>起点----></span>
						<span v-for="(site) in route.sites">{{site}}----></span>
						<span>终点</span>
					</small>
				</p>
		      </div>
		    </div>
		  </div>
		</div>
	</div>
</template>

<script>
	
	export default{
		data(){
			return{
				routes:[
					{
						img:"../../../static/img/demo2.jpg",
						title:"路线的标题",
						content:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
						sites:[
							"上海","西安","北京","西藏"
						]
					},
					{
						img:"../../../static/img/demo2.jpg",
						title:"路线的标题",
						content:"路线的介绍",
						sites:[
							"上海","西安","北京","西藏"
						]
					},
					{
						img:"../../../static/img/demo2.jpg",
						title:"路线的标题",
						content:"路线的介绍",
						sites:[
							"上海","西安","北京","西藏"
						]
					},
					{
						img:"../../../static/img/demo2.jpg",
						title:"路线的标题",
						content:"路线的介绍",
						sites:[
							"上海","西安","北京","西藏"
						]
					}
				]
			}
		}
	}
</script>

<style>
	.card img{
		height: 150px;
	}
	
</style>
