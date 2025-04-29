
<script setup>
</script>

<template>
  <div>
    <img src="../assets/dragoes/bafo-e-arroto.jpg" alt="Imagem" id="Imagem"></div>
  <div>
    <h2>Asa-Ete</h2>
      <div><img src="../assets/dragoes/bafo-e-arroto.jpg" alt="Imagem" id="Imagem"></div>
    <p>O Asa-Eterna reside em um lado da montanha escondido por árvores e rochas. É a camuflagem perfeita para este Dragão, que prefere passar o tempo dormindo! </p>
  </div>
</template>

<style scoped>

#Imagem {
  width: 1em;
}

h2 {
  background-color: #087a1b;
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
