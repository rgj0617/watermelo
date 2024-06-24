<template>
  <div class="cardContainer">
    <div class="card" style="--i: -4">1</div>
    <div class="card" style="--i: -3">2</div>
    <div class="card" style="--i: -2">3</div>
    <div class="card" style="--i: -1">4</div>
    <div class="card" style="--i: 0">5</div>
    <div class="card" style="--i: 1">6</div>
    <div class="card" style="--i: 2">7</div>
    <div class="card" style="--i: 3">8</div>
    <div class="card" style="--i: 4">9</div>
  </div>
</template>

<script setup lang="ts"></script>

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
  .card {
    position: absolute;
    width: 12vw;
    height: 36vh;
    background-color: #5e5cfc;
    border-radius: 10px;
    display: flex;

    justify-content: center;
    align-items: center;
    color: rgba(0, 0, 0, 0);
    font-size: 6vw;
    font-weight: 700;
    border: 10px solid rgba(0, 0, 0, 0.1);
    transition: 0.5s;
    transform-origin: 50% 100%;
    filter: hue-rotate(calc(var(--i) * 60deg));
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
  }
  .card:hover {
    translate: calc(var(--i) * 20px) -50px;
    cursor: pointer;
    z-index: 99;
  }
}
.cardContainer:hover .card {
  transform: rotate(calc(var(--i) * 5deg))
    translate(calc(var(--i) * 120px), -1vh);
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.25);
  color: rgba(0, 0, 0, 0.5);
}
.cardContainer:hover .card:not(:hover) {
  // background-color: rgba(150, 150, 150, 1);
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.5);
}
</style>
