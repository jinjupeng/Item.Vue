<template>
  <iframe :src="`${publicPath}RDBA权限管理系统_1.0.0.html`"
          class="db-document-frame"/>
</template>

<script>
    export default {
      name: "DBDocument",
      data() {
        return {
          publicPath: process.env.BASE_URL
        }
      },
    }
</script>

<style scoped>
  .db-document-frame{
    margin-top: 40px;
    background-color:transparent;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left:0;
  }

</style>