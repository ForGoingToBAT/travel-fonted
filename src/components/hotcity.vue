<template>
	<!--热门城市-->
	<div class="citys">
		<h3 class="text-center">当月热门城市</h3>
		<div class="container">
			<div class="row">
				<div class="text-white col-md-4 block" v-for="(city,index) in citys" v-bind:key="index" >
					<a @click="swapToPage(city.name)"><img :src="city.img"  class="col-md-12" alt="..."></a>
					<div  class="city">
						<span class="card-title">{{city.name}}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		methods:{
			swapToPage:function (message) {
				this.$router.push({path: '/city',query:{ city:message}});
			}
		},
		data(){
			return{
				citys:[
					{
						img:"https://static.runoob.com/images/demo/demo3.jpg",
						name:"北京",
						url:"2121",
					},
					{
						img:"https://static.runoob.com/images/demo/demo3.jpg",
						name:"河南",
						url:"",
					},
					{
						img:"https://static.runoob.com/images/demo/demo3.jpg",
						name:"陕西",
						url:"",
					},
					{
						img:"https://static.runoob.com/images/demo/demo3.jpg",
						name:"北京",
						url:"",
					},
					{
						img:"https://static.runoob.com/images/demo/demo3.jpg",
						name:"河南",
						url:"",
					},
					{
						img:"https://static.runoob.com/images/demo/demo3.jpg",
						name:"陕西",
						url:"",
					}
				]
			}
		}
	}
</script>

<style>
	.block img{
		height: 240px;
		margin-top: 20px;
		display: inline-block;
	}
	.city{
		position: absolute;
		right: 45px;
		bottom: 9px;
		font-size: 25px;
		color: #C0C2C9;
	}
</style>
