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
<button v-for="dragao in listaDragao" :key="dragao.id" @click="showContent=!showContent"></button>
<div v-if="showContent=!showContent">Texto
  
</div>
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

<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
  position: relative;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;
  color: var(--color-text);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  .item:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
