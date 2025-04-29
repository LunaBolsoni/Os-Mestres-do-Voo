<script setup>
import { ref, onMounted } from 'vue';
import { getDragao } from '../services/dragaoServices';

const dragoes = ref(null);
const erro = ref(null);

onMounted(async () => {
  try {
    dragoes.value = await getDragao();
  } catch (error) {
    erro.value = 'Erro ao carregar os dragões.';
    console.error(erro.value, error);
  }
});
</script>

<template>
  <p>{{ dragoes }}</p>
  <div v-for="item in dragoes" :key="item.id">
    <h2>{{ item.id }}</h2>
    <img :src="item.imagem_dragao_card" alt="">
  </div>
</template>

<style scoped>
</style>