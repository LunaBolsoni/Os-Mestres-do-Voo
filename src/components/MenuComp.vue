<script setup>
</script>

<template>
    <div class="menu">
        <div class="icon active">
            <img src="/src/components/icons/house.svg" alt="">
        </div>
        <div class="icon">
            <img src="/src/components/icons/dragon.svg" alt="">
        </div>
    </div>
</template>

<style scoped>
.menu{
    position: absolute;
    bottom: 80px;
    left: calc(50% - 100px);
    width: 200px;
    display: flex;
    background-color: #5E58FF;
    border-radius: 25px;
    height: 80px;
    justify-content: center;
    align-items: center;
    gap: 30px;
}
.icon{
    width: 50px;
    height: 50px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    cursor: pointer;
}
.active{
    background-color: #9692FF;
}
</style>