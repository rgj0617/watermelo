<!-- components/BaseButton.vue -->
<template>
  <button :class="[base, variants[variant]]">
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: "primary",
  },
});

const base = "px-4 py-2 rounded font-bold transition";
const variants = {
  primary: "bg-blue-500 text-white hover:bg-blue-600",
  secondary: "bg-gray-200 text-black hover:bg-gray-300",
};
</script>
