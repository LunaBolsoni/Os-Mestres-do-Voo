<template>
  <header>
    <ul>
      <li>home1</li>
      <li>home1</li>
      <li><img src="../components/icons/Simbolo.png" alt="Simoblo de Berk"></li>
      <li>home1</li>
      <li>home1</li>
    </ul>
  </header>


  <!-- <footer>
    <div>
      <p>Este projeto foi criado por Juliana, Lucas G., Luna e Vinicius </p>
    </div>
    <div>
      <p>Contato: (00) 00000-0000</p>
      <a href="blank">GitHub</a>
    </div>
  </footer> -->
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

header ul {
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  list-style: none;
}

li {
  margin: auto;
}

li img {
  width: 150px;
}
</style>
