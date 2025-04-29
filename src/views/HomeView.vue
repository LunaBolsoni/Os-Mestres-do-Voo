<template>
  <div class="linha">
    <div v-for="(square, index) in squares" :key="index" class="quadrado">
      <img :src="square.image" alt="Imagem do Dragão" class="imagem" />
    </div>
  </div>
</template>

<script>
import imagem1 from "@/dragoes/Meatlug.png";
import imagem2 from "@/dragoes/bafo-e-arroto.jpg";
import imagem3 from "@/dragoes/cancao-da-morte.webp";
import imagem4 from "@/dragoes/besta-implacavel.webp";
import imagem5 from "@/dragoes/corta-chuva.webp";
import imagem6 from "@/dragoes/estridente.webp";
import imagem7 from "@/dragoes/Fireworm_queen.png";
import imagem8 from "@/dragoes/Gancho-.png";
import imagem9 from "@/dragoes/tufao.webp";
import imagem10 from "@/dragoes/Pesadelo_voador.png";
import imagem11 from "@/dragoes/Terror_dos_Mares.png";
import imagem12 from "@/dragoes/tempestade.webp";

export default {
  name: "LinhaDeQuadrados",
  data() {
    return {
      squares: [
        { image: imagem1 },
        { image: imagem2 },
        { image: imagem3 },
        { image: imagem4 },
        { image: imagem5 },
        { image: imagem6 },
        { image: imagem7 },
        { image: imagem8 },
        { image: imagem9 },
        { image: imagem10 },
        { image: imagem11 },
        { image: imagem12 },
      ],
    };
  },
};
</script>

<style scoped>
.linha {
  width: 628px;
  height: 630px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
  margin: 100px;
}

.quadrado {
  width: 150px;
  height: 150px;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  border: 2px solid #000000;
}

.imagem {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
