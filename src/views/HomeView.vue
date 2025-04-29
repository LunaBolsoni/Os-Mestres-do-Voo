<script setup>
import { computed, ref } from 'vue';
import { listaDragao } from '@/stores/counter';

const showContent = ref(false);
  const buttonText = computed(() =>
    showContent.value ? 'Esconder' : 'Mostrar',
  );

// import AsaEterna from '../components/AsaEterna.vue'
// import BafoEArroto from '@/components/BafoEArroto.vue';
// import BestaImplacavel from '@/components/BestaImplacavel.vue';
// import CancaoMorte from '@/components/CancaoMorte.vue';
// import CortaChuva from '@/components/CortaChuva.vue';
// import Estridente from '@/components/Estridente.vue';
// import FirewormQueen from '@/components/FirewormQueen.vue';
// import Gancho from '@/components/Gancho.vue';
// import PesadeloVoador from '@/components/PesadeloVoador.vue';
// import Snafflefang from '@/components/Snafflefang.vue';
// import Tempestade from '@/components/Tempestade.vue';
// import TerrorMares from '@/components/TerrorMares.vue';
// import Tufao from '@/components/Tufao.vue';
</script>

<template>
<button v-for="dragao in listaDragao" :key="dragao.id" @click="showContent=!showContent"><div v-if="showContent=!showContent">{{ dragao.component }}</div></button>
  <main>
    
    <!-- <AsaEterna  /> 
    <BafoEArroto />
    <BestaImplacavel />
    <CancaoMorte />
    <CortaChuva />
    <Estridente />
    <FirewormQueen />
    <Gancho />
    <PesadeloVoador />
    <Snafflefang />
    <Tempestade />
    <TerrorMares />
    <Tufao /> -->
  </main>
</template>
