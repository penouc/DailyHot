<template>
  <div class="about-container">
    <h1>关于 ResouHub 热搜榜</h1>
    <section class="about-content">
      <h2>我们是谁？</h2>
      <p>
        ResouHub
        热搜榜是一个专注于聚合全网热点信息的平台。我们致力于为用户提供最及时、最全面的热搜资讯。
      </p>

      <h2>我们的特色</h2>
      <ul>
        <li>实时同步：第一时间获取微博热搜榜单更新</li>
        <li>全网热点：汇集多个平台的热门话题</li>
        <li>便捷浏览：简洁的界面设计，轻松获取信息</li>
        <li>分类聚合：多维度展示热点话题</li>
      </ul>

      <h2>联系我们</h2>
      <p>如果您有任何问题或建议，欢迎通过以下方式联系我们：</p>
      <p>邮箱：contact@resouhub.com</p>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  document.title = "关于我们 - ResouHub热搜榜";
});
</script>

<style scoped>
.about-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.about-content {
  line-height: 1.6;
}

h1 {
  font-size: 2em;
  color: #333;
  margin-bottom: 30px;
}

h2 {
  font-size: 1.5em;
  color: #444;
  margin: 25px 0 15px;
}

ul {
  padding-left: 20px;
}

li {
  margin: 10px 0;
}
</style>
