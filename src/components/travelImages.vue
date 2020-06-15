<template>
	<!--轮播图的组件-->
	<div>
		<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" >
			<ol class="carousel-indicators">
				<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
				<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
				<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
			</ol>
			<div class="carousel-inner">
				<div class="carousel-item" v-for="(item,index) in images" :key="index">
					<a :href="item.url"><img :src="item.pic" class="d-block w-100" alt="..."/></a>
				</div>
			</div>
			<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="sr-only">Previous</span>
			</a>
			<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="sr-only">Next</span>
			</a>
		</div>
	</div>
</template>

<script>
	import $ from 'jquery'
	export default{
		mounted:function () {
			$(".carousel-item").eq(0).addClass("active")
		},
		data(){
			return{
				images:[
					{
						pic: 'https://static.runoob.com/images/demo/demo3.jpg',
						url:""
					},
					{
						pic: 'https://static.runoob.com/images/demo/demo3.jpg',
						url:""
					},
					{
						pic: 'https://static.runoob.com/images/demo/demo3.jpg',
						url:""
					}
				]
			}
		}
	}
</script>

<style>
	.container img{
		height: 400px;
	}
	
</style>
