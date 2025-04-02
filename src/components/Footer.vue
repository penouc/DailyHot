<template>
  <footer>
    <div class="copyright">
      <span>Copyright © 2024 ResouHub</span>
      <n-divider vertical />
      <router-link to="/about" class="about-link">关于我们</router-link>
    </div>
  </footer>
</template>

<script setup>
import packageJson from "@/../package.json";

const icp = ref(import.meta.env.VITE_ICP ? import.meta.env.VITE_ICP : null);

// 链接跳转
const jumpLink = (url) => {
  window.open(url);
};
</script>

<style lang="scss" scoped>
footer {
  height: 100px;
  padding: 0 5vw;
  max-width: 1800px;
  margin: 20px auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .copyright {
    margin-bottom: 4px;
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-color3);
    font-size: 14px;
  }

  .about-link {
    color: var(--text-color3);
    text-decoration: none;
    transition: color 0.3s;
    font-size: 14px;

    &:hover {
      color: var(--primary-color);
    }
  }

  .icp {
    font-size: 13px;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: var(--primary-color);
    }
  }
}
</style>
