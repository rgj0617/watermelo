<template>
  <div class="cardContainer">
    <div v-for="i in 9" :key="i" class="card" :style="`--i:${i-5}`" @click="goto('aboutUs')">
      <img src="" alt="" class="cardImg">
      <div class="title">
        123
      </div>
      <div class="description">
        4576
      </div>
    </div>
    <!-- <div class="card" style="--i: -4" @click="goto('aboutUs')">1</div>
    <div class="card" style="--i: -3" @click="goto('aboutUs')">2</div>
    <div class="card" style="--i: -2" @click="goto('aboutUs')">3</div>
    <div class="card" style="--i: -1" @click="goto('aboutUs')">4</div>
    <div class="card" style="--i: 0" @click="goto('aboutUs')">5</div>
    <div class="card" style="--i: 1" @click="goto('aboutUs')">6</div>
    <div class="card" style="--i: 2" @click="goto('aboutUs')">7</div>
    <div class="card" style="--i: 3" @click="goto('aboutUs')">8</div>
    <div class="card" style="--i: 4" @click="goto('aboutUs')">9</div> -->
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const goto = (page:String) =>{
  let route = "/" + page;
  router.push(route);
}
</script>

<style scoped lang="scss">
.cardContainer {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0f0f0f;

  // overflow: hidden;
  &:hover .card {
    transform: rotate(calc(var(--i) * 5deg))
      translate(calc(var(--i) * 120px), -1vh);
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.25);
    color: rgba(0, 0, 0, 0.5);
  }
  &:hover .card:not(:hover) {
    // background-color: rgba(150, 150, 150, 1);
    opacity: 0.8;
  }
  .card {
    position: absolute;
    width: 12vw;
    height: 36vh;
    background-color: #5e5cfc;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: rgba(0, 0, 0, 0);
    // font-size: 6vw;
    font-weight: 700;
    border: 10px solid rgba(0, 0, 0, 0.1);
    transition: 0.5s;
    transform-origin: 50% 100%;
    filter: hue-rotate(calc(var(--i) * 60deg));
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
    &:hover {
      translate: calc(var(--i) * 20px) -50px;
      cursor: pointer;
      z-index: 99;
    }
    .cardImg{

    }
    .title{
      font-size: 2vw;
    }
    .description{
      font-size: 0.8vw;
    }
  }
}
</style>
