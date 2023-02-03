<script setup>
/*import HomePage from "../components/HomePage.vue";*/
import NavHome from "../components/NavHome.vue";
</script>

<template>
    <div class="container">
        <NavHome />
            <body class="bg-gradient-to-b from-primary-200 to-primary-100 h-full p-16 antialiased bg-gray-200 text-gray-900 font-sans">
                <div class="flex items-center h-full w-full">
                <div class="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
                <span class="block w-full text-xl uppercase font-bold mb-4">Login</span>      
                    <form class="mb-4" action="/" method="post">
                    <div class="mb-4 md:w-full">
                        <label for="email" class="block text-xs mb-1">Username or Email</label>
                        <input class="w-full border rounded p-2 outline-none focus:shadow-outline" type="email" name="email" id="email" placeholder="Username or Email">
                    </div>
                    <div class="mb-6 md:w-full">
                        <label for="password" class="block text-xs mb-1">Password</label>
                        <input class="w-full border rounded p-2 outline-none focus:shadow-outline" type="password" name="password" id="password" placeholder="Password">
                    </div>

                    <RouterLink to="/profile">
                        <button class="bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded">Login</button>
                    </RouterLink>
                    

                    </form>
                    <a class="text-blue-700 text-center text-sm" href="/login">Forgot password?</a>
                </div>
            </div>
            </body>
    </div>

</template>

<style>
@import url("https://fonts.gstatic.com");
@import url("https://fonts.googleapis.com/css2?family=Inter&family=Lemon&family=Montserrat:ital@0;1&display=swap");


:root {
  --black: #000000;
  --quill-gray: #d2d2d2;
  --amber: #ffc20d;
  --white: #ffffff;


  --font-size-s: 13px;
  --font-size-m: 14px;
  --font-size-l: 128px;


  --font-family-inter: "Inter", sans-serif;
  --font-family-lemon: "Lemon", cursive;
  --font-family-montserrat: "Montserrat", sans-serif;
}


.inter-normal-quill-gray-14px {
  color: var(--quill-gray);
  font-family: "Inter", sans-serif;
  font-size: var(--font-size-m);
  font-weight: 400;
  font-style: normal;
}


.desktop-login {
  align-items: flex;
  background-color: #f4fdfc;
  border: 1px none;
  display: flex;
  gap: 190px;
  height: auto;
  width: auto;
  padding: 5px 0px 0px 14px;
  margin-left: 0.5rem;
  margin-top: 2rem;
  margin-right: 0.5rem;
  margin-bottom: 2rem;
}
.hidden * {
  pointer-events: none;
  visibility: hidden;
}


.overlap-group1 {
  height: 861px;
  position: relative;
  width: 597px;
}


.group-28 {
  height: 580px;
  left: 34px;
  position: absolute;
  top: 0;
  width: 563px;
}


.ob-forms-log-in {
  align-items: center;
  background-color: #ffc20d;
  border: 1px solid;
  border-color: var(--black);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  height: 51px;
  justify-content: center;
  left: 97px;
  padding: 10px 15px;
  position: absolute;
  top: 536px;
  width: 190px;
}


.name-1 {
  color: var(--black);
  font-family: "Montserrat", sans-serif;
  font-size: var(--font-size-m);
  font-weight: 700;
  letter-spacing: 0;
  line-height: 28px;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
}


.input-fields {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 14px;
  left: 66px;
  min-height: 92px;
  position: absolute;
  top: 408px;
  width: 252px;
}


.desktop-login .ob {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 39px;
  justify-content: center;
  width: 252px;
}


.frame {
  align-items: flex-start;
  align-self: stretch;
  background-color: #ffffff;
  border: 1px solid;
  border-color: var(--black);
  border-radius: 20px;
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow: hidden;
  padding: 5px 0px 4px 20px;
}


.min-height {
  height: 84px;
  min-width: 1px;
}


.name {
  align-self: stretch;
  letter-spacing: 0;
  line-height: 28px;
  margin-top: -1px;
  white-space: nowrap;
}


.ob-formsusername {
  background-color: #ffffff;
}


.overlap-group {
  height: 691px;
  left: -3px;
  position: absolute;
  top: 173px;
  width: 379px;
}


.rectangle-2 {
  background-color: #ffffff;
  border: 2px solid;
  border-radius: 25px;
  height: 551px;
  left: 22px;
  top: 0;
  width: 334px;
}


.desktop-login .rectangle {
  border-color: var(--black);
  position: absolute;
}


.group-30 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 5px;
  left: 200px;
  min-height: 16px;
  position: absolute;
  top: 478px;
  width: 60px;
}


.sign-up {
  color: #ffc20d;
  font-family: "Montserrat", sans-serif;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  min-height: 10px;
  width: 58px;
}


.rectangle-1 {
  background-color: #2ad3a4;
  border: 3px solid;
  border-radius: 50px;
  height: 223px;
  left: 0;
  top: 468px;
  width: 379px;
}


.ellipse-7 {
  height: 33px;
  left: 249px;
  position: absolute;
  top: 20px;
  width: 32px;
}


.new-user {
  color: var(--black);
  font-family: "Montserrat", sans-serif;
  font-size: 13px;
  font-weight: 400;
  left: 124px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 478px;
}


.ellipse-8 {
  height: 130px;
  left: 130px;
  object-fit: cover;
  position: absolute;
  top: 73px;
  width: 130px;
}


.dass-surv {
  color: #ffc20d;
  font-family: "Lemon";
  font-size: 128px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  margin-left: 226px;
  margin-top: 300.5px;
  min-height: 115px;
  text-shadow: 0px 4px 4px #00000040;
  width: 427px;
}

</style>