<script setup>
</script>

<template>
  <header>
    <p>'home1'</p>
    <p>'home2'</p>
    <p>'home3'</p>
    <p>'home4'</p>
    <p>'home5'</p>

  </header>
  <div><img src="../assets/imagens/download.jpeg" alt="" id="Imagem"></div>
  <div>
    <h2>Fúria da Noite</h2>
    <p>O Fúria da Noite é um dragão raro, veloz, inteligente e poderoso. Com aparência negra e asas grandes, é leal,
      curioso e profundamente ligado a Soluço.</p>
  </div>
</template>

<style scoped>
header {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}

#Imagem {
  width: em;
}

h2 {
  background-color: #9d371d;
  width: 7.5em;
  padding: 10px;
  color: white;
  border-radius: 5px;
  text-align: center;
  font-size: 25px;
}

p {
  padding: 15px 0;
  font-size: 19px;
}
</style>
