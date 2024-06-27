<template>
  <div class="errorContainer">
    <div class="info">
      <h1>404 Not Found</h1>
      <h3>偶尔的迷失，是提醒你应该休息了</h3>
    </div>
    <flexibleBox style="width: 60vh; height: 60vh"></flexibleBox>
  </div>
</template>

<script setup lang="ts">
import flexibleBox from "@/components/404/flexibleBox.vue";
</script>

<style scoped lang="scss">
.errorContainer {
  // justify-content: center;
  .info {
    margin-top: 12vh;
    text-align: center;
  }
}
</style>