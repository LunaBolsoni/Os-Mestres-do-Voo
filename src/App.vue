<script setup>
import { ref, onMounted } from 'vue';
import { RouterView } from 'vue-router';
import { MenuComp } from '@/components';
</script>

<template>
  <RouterView />
  <MenuComp />
</template>

<style scoped>
</style>