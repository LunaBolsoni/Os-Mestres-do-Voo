<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
  <div>
    <div class="menu">
    <nav class="menu-itens">
      <router-link to="/"><img src="@/assets/icons/casa2.png" alt="Home" class="icone-casa" /></router-link>
      <router-link to="/dragoes"><img src="@/assets/icons/Vector.png" alt="Dragoes" class="icone-dragao"></router-link>
    </nav>
  </div>
</div>
</template>

<style scoped>
.menu{
  display:flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom:60px;
  left: 850px;

  background-color:#5E58FF;
  border-radius: 25px;
  width: 200px;
  padding: 20px;
}
.icone-casa{
  width: 40px;
  height: auto;
  margin-right: 20px;
}
.icone-dragao{
  width: 40px;
  height: auto;
  margin-left: 20px;
}

</style>
