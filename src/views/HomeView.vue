<script setup>
</script>

<template>
  <main>
    <div>
      <h1 class="title">COMO TREINAR SEU DRAGÃO<br><span class="gray-text">CATALOGO DE DRAGÕES</span></h1>
      <p>O universo de <strong> Como Treinar o Seu Dragão </strong>  se passa em um mundo fictício onde <strong>vikings</strong> convivem com <strong>dragões</strong>. Inicialmente vistos como inimigos, os dragões passam a ser aliados após Soluço, um jovem viking, provar que podem viver em harmonia. A história se desenvolve ao longo de filmes, séries e livros, mostrando a evolução dessa convivência, a criação do <strong>vilarejo Berk</strong> como um refúgio para dragões e os desafios enfrentados para proteger esse novo modo de vida. É um universo rico em aventura, crescimento pessoal e amizade entre humanos e criaturas fantásticas.</p>
    </div>
    <div class="button-div">
      <button class="button">Ver Dragões</button>
    </div>
  </main>
</template>

<style scoped>
main{
  padding: 160px 100px;
}
.title{
  font-size: 60px;
  margin-bottom: 40px;
  line-height: 100%;
}
.gray-text{
  color: #8F8F8F;
}
p{
  font-size: 16px;
}
.button{
  font-size: 16px;
  font-weight: bold;
  color: white;
  border-radius: 50px;
  border: none;
  background-color: #5E58FF;
  padding: 15px 60px;
}
.button-div{
  padding-top: 50px;
}

@media (max-width: 600px) {
  main{
  padding: 80px 50px;
  margin-bottom: 100px;
  }
  .title{
  font-size: 48px;
  margin-bottom: 40px;
  line-height: 100%;
  }
  p{
    text-align: justify;
  }
  div.button-div{
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
