<template>
    <div style="margin-top: 150px;text-align: center;">
      <h2>不想再首页加太多内容，干干净净，你用起来也方便。注意：系统每逢小时整点会自动清理数据！</h2>
    </div>
</template>

<script>
    import {pwdIsDefault} from '@/api/system/sys_user'
    export default {
      name: "FirstPage",
      created:function(){
        pwdIsDefault().then(res => {
          if(res.isok && res.data){//表示正在使用默认密码
            this.$confirm("您仍在使用系统初始化密码，建议您去修改", '提示', {
              confirmButtonText: '现在就去',
              cancelButtonText: '以后再说',
              type: 'warning'
            })
            .then(_ => {
              this.$router.push({name:"personal"})
            });
          }
        })
      }
    }
</script>

<style scoped>

</style>