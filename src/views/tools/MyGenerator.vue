<template>
  <div>
    <el-alert
      title="代码生成器是一个独立的开源项目，开源地址：https://gitee.com/hanxt/dongbb-coder  视频介绍如下"
      type="success">
    </el-alert>
    <iframe src="//player.bilibili.com/player.html?aid=969398370&bvid=BV1Gp4y1i7Ai&cid=232020722&page=1"
            scrolling="no"
            border="0"
            frameborder="no"
            framespacing="0"
            width="95%" height="600"
            allowfullscreen="true">
    </iframe>
  </div>

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