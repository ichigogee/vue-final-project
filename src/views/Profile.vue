<script setup>
import NavSignout from "../components/NavSignout.vue";
</script>
<template>
    <div class="container"> <NavSignout/></div>
   
   <div>
        <div class="flex items-center justify-center flex-col">
            <h2 class="font-semibold text-5xl text-white uppercase ">Current Goal</h2>
            <input type="text" class="w-[400px] bg-white px-6 mt-8 py-4 rounded shadow-lg" placeholder="Enter your goal here.." />
        </div>
        <div class="flex items-center justify-center w-full h-full font-medium mt-24">
            
            <div class="flex flex-grow items-center justify-center h-full text-gray-600 ">

                <!-- Component Start -->
                <div class="max-w-full p-8 bg-white rounded-lg shadow-lg w-96 h-72">
                    <div class="flex items-center mb-6">
                        <svg class="h-8 w-8 text-indigo-500 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                        </svg>
                        <h4 class="font-semibold ml-3 text-lg">Create Tasks</h4>
                    </div>
                    <button class="flex items-center w-full h-8 px-2 mt-2 text-sm font-medium rounded">
                        <svg class="w-5 h-5 text-gray-400 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        <input class="flex-grow h-8 ml-4 bg-transparent focus:outline-none font-medium" type="text" placeholder="add a new task">
                    </button>
                </div>
                <!-- Component End  -->

            </div>
            <div class="flex flex-grow items-center justify-center h-full">
                <!-- Component Start -->
                <div class="p-8 bg-white rounded-lg shadow-lg w-96 h-72 text-gray-600">
                    <div class="flex items-center mb-6">
                        <h4 class="font-semibold ml-3 text-lg">Set Reward</h4>
                    </div>

                    <p class="pt-1 text-lg font-normal">
                            What motivates you?</p>

                    <button class="flex items-center w-full h-8 px-2 mt-2 text-sm font-medium rounded">
                        <input class="flex-grow h-8 ml-4 bg-white border border-gray-200 rounded focus:outline-none font-medium" type="text" placeholder="   ">
                    </button>

                    <p class="pt-1 text-lg font-normal">
                            How much is your reward?</p>

                    <button class="flex items-center w-full h-8 px-2 mt-2 text-sm font-medium rounded">
                        <input class="flex-grow h-8 ml-4 bg-white border border-gray-200 rounded focus:outline-none font-medium" type="text" placeholder="   ">
                    </button>
                </div>
                <!-- Component End  -->
                
            </div>
        </div>
   </div> 

</template>