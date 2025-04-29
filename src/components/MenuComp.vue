<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const actualPath = computed(() => route.path)
</script>

<template>
  <div class="menu">
    <router-link class="icon" :class="{ active: actualPath === '/' }" to="/">
        <img src="/src/components/icons/house.svg" alt="Home" />
    </router-link>

    <router-link class="icon" :class="{ active: actualPath === '/dragoes' }" to="/dragoes"> 
        <img src="/src/components/icons/dragon.svg" alt="Dragons" />
    </router-link>
  </div>
</template>

<style scoped>
.menu {
  position: fixed;
  bottom: 80px;
  left: calc(50% - 100px);
  width: 200px;
  display: flex;
  background-color: #5E58FF;
  border-radius: 25px;
  height: 80px;
  justify-content: center;
  align-items: center;
  gap: 30px;
}

.icon {
  width: 50px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
}

.active {
  background-color: #9692FF;
}
</style>
