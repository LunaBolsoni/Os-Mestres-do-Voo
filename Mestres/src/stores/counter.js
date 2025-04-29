import { ref } from 'vue'
import { defineStore } from 'pinia'

import AsaEterna from '@/components/AsaEterna.vue';
import BafoEArroto from '@/components/BafoEArroto.vue';
import BestaImplacavel from '@/components/BestaImplacavel.vue';
import CancaoMorte from '@/components/CancaoMorte.vue';
import CortaChuva from '@/components/CortaChuva.vue';
import Estridente from '@/components/Estridente.vue';
import FirewormQueen from '@/components/FirewormQueen.vue';
import Gancho from '@/components/Gancho.vue';
import Meatlug from '@/components/Meatlug.vue';
import PesadeloVoador from '@/components/PesadeloVoador.vue';
import Snafflefang from '@/components/Snafflefang.vue';
import Tempestade from '@/components/Tempestade.vue';
import TerrorMares from '@/components/TerrorMares.vue';
import Tufao from '@/components/Tufao.vue';

export const listaDragao = defineStore('dragoes', () => {
  const dragoes = ref([
    {id: 1, component: AsaEterna },
    {id: 2, component: BafoEArroto },
    {id: 3, component: BestaImplacavel },
    {id: 4, component: CancaoMorte },
    {id: 5, component: CortaChuva },
    {id: 6, component: Estridente },
    {id: 7, component: FirewormQueen },
    {id: 8, component: Gancho },
    {id: 9, component: Meatlug },
    {id: 10, component: PesadeloVoador },
    {id: 11, component: Snafflefang },
    {id: 12, component: Tempestade },
    {id: 13, component: TerrorMares },
    {id: 14, component: Tufao }
  ]);

  return {listaDragao}
})