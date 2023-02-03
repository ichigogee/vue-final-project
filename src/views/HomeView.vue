<script setup>
/*import HomePage from "../components/HomePage.vue";*/
import Navbar from "../components/Navbar.vue";
</script>

<template>

  <div class="container">
      <Navbar />
          <section id="home" class="grid place-items-center pt-10 px-10">
            <div class="flex items-end justify-between ">
              <div class ="text-6xl font-bold text-white w-1/2 pb-10">
                  <div class="flex items-center gap-3">
                    <h2>You deserve it!!</h2>
                  </div>
                  <p class="pt-5 text-lg font-normal">
                    A motivated you, is a powerful you. Reward yourself.</p>
              </div>
                <div class="w-2/3">
                  <img src="@/assets/images/handmobile.png" alt="">
                </div>
            </div>
        </section>
  </div>

    <!---<HomePage />--->

</template>
