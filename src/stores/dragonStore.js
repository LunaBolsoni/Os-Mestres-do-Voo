// stores/dragons.js
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { getDragao } from '../services/dragaoServices';

export const useDragonsStore = defineStore('dragons', () => {
  const dragoes = ref(null);
  const pinnedDragons = ref([]);

  async function fetchDragoes() {
    try {
      dragoes.value = await getDragao();
      console.log('Dragões carregados:', dragoes.value);
    } catch (error) {
      erro.value = 'Erro ao carregar os dragões.';
      console.error(erro.value, error);
    }
  }

  function pinDragon(dragon) {
    if (!pinnedDragons.value.some(pinned => pinned.id === dragon.id)) {
      pinnedDragons.value.push(dragon);
    }
  }

    function unpinDragon(dragon) {
        const index = pinnedDragons.value.findIndex(pinned => pinned.id === dragon.id);
        pinnedDragons.value.splice(index, 1);
    }

  function pinned(dragon){
    return pinnedDragons.value.some(pinned => pinned.id === dragon.id);
  };

  return {
    dragoes,
    pinnedDragons,
    fetchDragoes,
    pinDragon,
    unpinDragon,
    pinned,
  };
});