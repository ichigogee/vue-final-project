<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <nav class="flex items-center justify-between h-32 drop-shadow-lg">
    <div class = "flex gap-2">
      <h1  class="text-white font-bold text-2xl">DAS SURV</h1>
    </div>
    <div class="flex items-center gap-10">

        <RouterLink to="/rewardshop">
        <a class="text-white font-medium text-lg" href="#home">Reward Shop</a>
        </RouterLink>

        <RouterLink to="/home">
        <a class="text-white font-medium text-lg" href="#home">Home</a>
        </RouterLink>

      <RouterLink to="/home">
        <button class="px-4 py-2 rounded-full text-white font-bold text-lg bg-secondary">Logout</button>
      </RouterLink>
    </div>
  </nav>
</template>
