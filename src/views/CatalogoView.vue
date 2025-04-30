<script setup>
import { onMounted, computed, ref } from 'vue';
import { useDragonsStore } from '../stores/dragonStore';
import PinIcon from '../assets/icons/pin.svg';
import PinnedIcon from '../assets/icons/pinned.svg';

const dragonsStore = useDragonsStore();
const dragoes = computed(() => dragonsStore.dragoes);
const selectedDragon = ref(null);
const pinnedDragons = ref(dragonsStore.pinnedDragons);
const offHover = ref(true);

onMounted(() => {
  dragonsStore.fetchDragoes();
});
</script>

<template>
  <div class="container">
    <div class="cards-area">
      <div v-for="item in dragoes" :key="item.id" class="cards" @click="selectedDragon = item">
        <img :src="item.imagem_dragao_card" alt="">
      </div>
    </div>
    <div v-if="selectedDragon !== null">
      <div class="pin">
        <button v-if="dragonsStore.pinned(selectedDragon)" @click="dragonsStore.unpinDragon(selectedDragon)"><img :src="PinnedIcon" alt="Pinned"></button>
        <button v-else @click="dragonsStore.pinDragon(selectedDragon)"><img :src="PinIcon" alt="Pin"></button>
      </div>
      <div class="dragon">
        <div class="dragon-image">
          <img v-if="offHover" :src="selectedDragon.imagem_dragao" alt="" @mouseover="offHover = false">
          <img v-else :src="selectedDragon.imagem_dragao_card" alt="" @mouseleave="offHover = true">
        </div>
        <div class="dragon-info">
          <h2 :style="{ backgroundColor: selectedDragon.cor, color: selectedDragon.cor_texto }">
            {{ selectedDragon.especie }}
          </h2>
          <p class="classe">CLASSE: <b>{{ selectedDragon.tipo }}</b></p>
          <p class="desc">{{ selectedDragon.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pin button{
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: #d1d1d1;
  border-radius: 100%;
  border: none;
  height: auto;
  cursor: pointer;
  padding: 10px;
}
.pin img{
  width: 20px;
  height: 20px;
}
.dragon-info {
  width: 500px;
}
.classe{
  font-size: 16px;
  padding: 20px 0px;
}
.dragon-info h2{
  width: 100%;
  border-radius: 5px;
  padding: 5px;
  text-align: center;
}
.dragon-image{
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 350px;
  margin-bottom: 20px;
}
.dragon img{
  max-width: 350px;
  height: auto;
  border-radius: 15px;
}
.container{
  padding-top: 100px;
  display: flex;
  justify-content: center;
  gap: 200px;
}
.cards-area{
  display: flex;
  flex-wrap: wrap;
  width: 500px;
  gap: 20px;
  justify-content: center;
  align-content: center;
}
.cards{
  width: 150px;
  height: 150px;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid transparent;
}
.cards:hover{
  border: 2px solid black;
  transition: all 0.3s ease;
}

.cards img{
  width: 100%;
  height: 100%;
}
@media (max-width: 1200px) {
  .container{
    flex-direction: column-reverse;
    align-items: center;
    gap: 50px;
    padding-bottom: 150px;
  }
}
@media (max-width: 600px) {
  .dragon{
    width: 100%;
  }
  .dragon-info {
    width: 100%;
    padding: 0px 20px;
  }
  .dragon-image img{
    width: 100%;
  }
  .pin{
    margin-left: 50px;
  }
  .cards-area{
    width: 100%;
  }
}
</style>