<template>
    <form style="padding: 10px">
        <div class="form-group">
            <label for="oldPwd">请输入原来的密码</label>
            <input type="password" class="form-control" id="oldPwd" v-model="oldPwd" aria-describedby="emailHelp">
        </div>
        <div class="form-group">
            <label for="newPwd">请输入新的密码</label>
            <input type="password" class="form-control" id="newPwd" v-model="newPwd">
            <small>{{msg}}</small>
        </div>
        <button type="button" class="btn btn-primary" @click="changePassword()">修改</button>
    </form>
</template>

<script>
    import Service from '../request/Service';
    import Qs from 'qs'
    export default {
        name: "changePwd",
        data(){
            return{
                oldPwd:"",
                newPwd:"",
                msg:"",
            }
        },
        methods:{
            changePassword:function () {
                if(this.oldPwd!==""&&this.newPwd!==""){
                    let user = JSON.parse(sessionStorage.getItem("user"));
                    let userAccount = user.userAccount;
                    let that = this;
                    Service.post("/changePwd",Qs.stringify({
                        userAccount:userAccount,
                        oldPwd: this.oldPwd,
                        newPwd:this.newPwd
                    })).then(response=>{
                        that.oldPwd="";
                        that.newPwd = "";
                        that.msg=response.data.msg;
                        if(response.data.code===200){
                            sessionStorage.setItem("user","")
                            sessionStorage.setItem("isLogin","false")
                            window.location.href="/"
                        }
                    }).catch(function (error) {
                        console.log(error)
                    })
                }

            }
        }
    }
</script>

<style scoped>

</style>