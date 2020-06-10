<template>
	<div class="col-md-6 login-style">
		<div class="demo">
			<div v-if="status===1">
				<loginPage></loginPage>
			</div>
			<div v-else="">
				<telephonePage></telephonePage>
			</div>
		</div>
		<div class="footer">
			<button id="account" class="btn btn-primary" @click="changestyle(1)">账户登录</button>
			<button id="telLogin" class="btn btn-primary" @click="changestyle(2)">手机号码登录</button>
		</div>
	</div>
</template>

<script>
	import loginPage from '../components/loginPage.vue'
	import telephonePage from '../components/telephonePage.vue'
	export default{
		components: {
		    loginPage,
			telephonePage
		},
		data(){
			return{
				status:1
			}
		},
		methods:{
			changestyle:function(message){
				if(message===1){
					this.status=1
				}else{
					this.status=2
				}
			}
		}
	}
</script>

<style>
	.footer{
		margin-top: 20px;
	}
	.login-style{
		margin-left: auto;
		margin-right: auto;
		padding-bottom: 20px;
		border: 1px solid #c0c0c0;
		border-radius: 10px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
		border-top: none;
	}
</style>
