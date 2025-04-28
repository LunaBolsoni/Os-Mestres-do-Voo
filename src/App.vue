<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/dragoes">Dragões</router-link>
    </nav>
  </div>
</template>

<style scoped>
</style>
