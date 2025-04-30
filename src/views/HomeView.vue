<script setup>
import { ref, computed } from 'vue';
import { useDragonsStore } from '../stores/dragonStore';

const dragonsStore = useDragonsStore();
const pinnedDragons = ref(dragonsStore.pinnedDragons);
const windowWidth = ref(window.innerWidth);
</script>

<template>
  <main>
    <div>
      <h1 class="title">COMO TREINAR SEU DRAGÃO<br><span class="gray-text">CATALOGO DE DRAGÕES</span></h1>
      <p>O universo de <strong> Como Treinar o Seu Dragão </strong> se passa em um mundo fictício onde
        <strong>vikings</strong> convivem com <strong>dragões</strong>. Inicialmente vistos como inimigos, os dragões
        passam a ser aliados após Soluço, um jovem viking, provar que podem viver em harmonia. A história se desenvolve
        ao longo de filmes, séries e livros, mostrando a evolução dessa convivência, a criação do <strong>vilarejo
          Berk</strong> como um refúgio para dragões e os desafios enfrentados para proteger esse novo modo de vida. É
        um universo rico em aventura, crescimento pessoal e amizade entre humanos e criaturas fantásticas.</p>
    </div>
    <div class="button-div">
      <router-link to="/dragoes" class="button">Ver Dragões</router-link>
    </div>
    <div class="pinned-area" v-if="pinnedDragons.length > 0">
      <div v-for="(item, index) in pinnedDragons" :key="item.id" class="pinned-card"
        :style="{ backgroundColor: item.cor, left: (index * 150) + 'px' }">
        <img :src="item.imagem_dragao" alt="">
      </div>
    </div>
  </main>
</template>

<style scoped>
.pinned-area {
  display: flex;
  position: relative;
  height: 200px;
  margin: 100px 0px;
}
.pinned-area::before{
  content: 'Dragões Fixados';
  position: absolute;
  top: -40px;
  font-weight: bold;
  font-size: 24px;
}

.pinned-card img {
  max-height: 200px;
}

.pinned-card {
  position: absolute;
  width: 250px;
  height: 200px;
  border-radius: 20px;
}

main {
  padding: 160px 100px;
}

.title {
  font-size: 60px;
  margin-bottom: 40px;
  line-height: 100%;
}

.gray-text {
  color: #8F8F8F;
}

p {
  font-size: 16px;
}

.button {
  font-size: 16px;
  font-weight: bold;
  color: white;
  border-radius: 50px;
  border: none;
  background-color: #5E58FF;
  height: 60px;
  width: 250px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: .3s ease;
}
.button:hover{
  transform: translateX(5px);
}
.button-div {
  padding-top: 50px;
  display: flex;
  height: auto;
  justify-content: space-between;
  ;
}

@media (max-width: 600px) {
  main {
    padding: 80px 50px;
    margin-bottom: 100px;
  }

  .title {
    font-size: 48px;
    margin-bottom: 40px;
    line-height: 100%;
  }

  p {
    text-align: justify;
  }

  div.button-div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
