<template>
    <div class="login">
        <el-form class="login-form">
            <h3 class="title">DongBB</h3>

            <el-alert :title="loginForm.errorMsg" type="error" v-show="loginForm.errorVisible">
            </el-alert>

            <el-form-item >
                <el-input v-model="loginForm.username" type="text"
                          auto-complete="off" placeholder="账号">
                </el-input>
            </el-form-item>
            <el-form-item >
                <el-input v-model="loginForm.password" type="password"
                          auto-complete="off" placeholder="密码">
                </el-input>
            </el-form-item>

            <el-form-item style="width:100%;">
              <el-row :gutter="20">
                <el-col :span="12">
                  <el-button @click="userpwdLogin" size="medium" type="primary" style="width:100%;">
                    <span>登 录</span>
                  </el-button>
                </el-col>
                <el-col :span="12">
                  <el-button @click="dialogVisible = true" size="medium" type="success" style="width:100%;">
                    <span>获取密码</span>
                  </el-button>
                </el-col>
              </el-row>
            </el-form-item>

        </el-form>
        <el-dialog
          title="扫描二维码"
          :visible.sync="dialogVisible"
          width="20%">
          <span>关注公众号，回复'dongbb'，字母哥所有资源均在此首发</span>
          <img src="../assets/img/wx-zimug-ketang.png" style="height: 200px;">
          <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="dialogVisible = false">关闭</el-button>
          </span>
        </el-dialog>
    </div>


</template>

<script>
    import {setJwtToken} from '@/lib/utils'
    import {login} from '@/api/system/sys_user'
    export default {
        name: "login",
        data() {
            return {
                loginForm: {
                    username: "",
                    password: "",
                    errorMsg:"",
                    errorVisible: false
                },
                dialogVisible: false
            };
        },
        methods:{
            userpwdLogin(){
                login(this.loginForm.username,
                    this.loginForm.password
                ).then(res =>{
                    setJwtToken(res.data)
                    this.$router.push("home")
                }).catch(err => {
                    this.loginForm.errorMsg = err.message;
                    this.loginForm.errorVisible = true;
                });
            },
            getPassword(){

            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .login {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        background-image: url("../assets/img/login-bg.jpg");
        background-size: cover;
    }
    .login-form {
        border-radius: 6px;
        background: #ffffff;
        width: 400px;
        padding: 25px 25px 5px 25px;

        .el-input {
            height: 38px;
            input {
                height: 38px;
            }
        }

    }
</style>