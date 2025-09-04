<template>
  <div>
    111
    <button class="btn"></button>
    <BaseButton variant="secondary" class="text-lg">由文字撑开</BaseButton>
  </div>
</template>

<script setup>
import BaseButton from "@/components/tailwindTest/BaseButton.vue";
</script>

<style scoped>
.btn {
  @apply px-4 py-2 rounded bg-blue-500 text-white w-40 h-20;
}
</style>
