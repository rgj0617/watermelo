<template>
  <div class="homeContainer">
    <div class="navigation">
      <navigation></navigation>
    </div>
  </div>
</template>

<script setup lang="ts">
import navigation from "@/components/home/navigation.vue";
</script>

<style scoped lang="scss">
.homeContainer {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0f0f0f;

  .navigation {
    height: 38vh;
    width: 13vw;
  }
}
</style>
