<template>
	<div class="container">
		<div class="change col-md-6">
			<span type="button" class="login active" @click="active(1)">登录</span>
			<span type="button" class="register" @click="active(2)">注册</span>
		</div>
		<loginStyle v-if="activeCode == 1 "/>
		<registerPage v-else=""/>
	</div>
</template>

<script> 
import loginStyle from './layouts/LoginStyle.vue'
import registerPage from './components/registerPage.vue'
	export default{
		components: {
		    loginStyle,
			registerPage
		},
		data(){
			return{
				activeCode:1//激活的窗口
			}
		},
		methods:{
			active:function(message){
				if(message === 1){
					$(".login").eq(0).addClass("active");
					$(".register").eq(0).removeClass("active");
					this.activeCode=1;
				}else{
					$(".login").eq(0).removeClass("active");
					$(".register").eq(0).addClass("active");
					this.activeCode=2;//激活码
				}
			}
		}
	}
</script>

<style>
	.change{
		display: flex;
		flex-direction: row;
		margin-left: auto;
		margin-right: auto;
		margin-top: 100px;
		border: 1px solid #C0c0c0;
		border-radius: 10px;
		padding: 20px;
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
		border-bottom: none;
	}
	.login,.register{
		font-size: 20px;
		margin-right: 30px;
		cursor: pointer;
		padding: 5px 10px;
		background-color: transparent;
		border: none;
	}
	.active{
		border: 1px solid red;
		border-radius: 10px;
	}
</style>
