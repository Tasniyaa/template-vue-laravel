<script setup>
  import { ref } from "vue";
  import { useAuthStore } from "../stores/auth";
  import "../../public/assets/libs/swiper/swiper-bundle.min.js";
  import "../../public/assets/js/show-password.js"

  import "../../public/assets/css/style.css"
  import "../../public/assets/libs/simplebar/simplebar.min.css";
  import "../../public/assets/libs/@simonwep/pickr/themes/nano.min.css";
  import "../../public/assets/libs/swiper/swiper-bundle.min.css";

  const authStore = useAuthStore();
  const form = ref({
    email: "",
    password: "",
  });
</script>

<template>
  <div class="">
    <div class="container">
      <div class="flex justify-center authentication authentication-basic items-center h-full text-defaultsize text-defaulttextcolor">
        <div class="grid grid-cols-12">
          <div class="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-3 sm:col-span-2"></div>
          <div class="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-8 col-span-12">
            <div class="my-[2.5rem] flex justify-center">
              <a href="index.html">
                  <img src="../assets/images/brand-logos/desktop-logo.png" alt="logo" class="desktop-logo">
                  <img src="../assets/images/brand-logos/desktop-dark.png" alt="logo" class="desktop-dark">
              </a>
            </div>
            <div class="box">
              <div class="box-body !p-[3rem]">
                <p class="h5 font-semibold mb-2 text-center">Sign In</p>
                <p class="mb-4 text-[#8c9097] dark:text-white/50 opacity-[0.7] font-normal text-center">Welcome back !</p>
                <div class="mb-4">
                  <h6 class="font-semibold mb-2 text-center">Login Info</h6>
                  <p class="mb-2 text-[#5488e2] dark:text-white/50 opacity-[0.7] font-normal text-center">Email: admin@gmail.com</p>
                  <p class="mb-4 text-[#5488e2] dark:text-white/50 opacity-[0.7] font-normal text-center">password: 12345678</p>
                </div>
                <form @submit.prevent="authStore.handleLogin(form)">
                  <div class="mb-6">
                    <input
                      type="email"
                      v-model="form.email"
                      placeholder="Email"
                      class="
                        bordder-[#E9EDF4]
                        w-full
                        rounded-md
                        border
                        bg-[#FCFDFE]
                        py-3
                        px-5
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus:border-primary
                        focus-visible:shadow-none
                      "
                    />
                    <div v-if="authStore.errors.email" class="flex">
                      <span class="text-red-400 text-sm m-2 p-2">{{
                        authStore.errors.email[0]
                      }}</span>
                    </div>
                  </div>
                  <div class="mb-6">
                    <input
                      type="password"
                      v-model="form.password"
                      placeholder="Password"
                      class="
                        bordder-[#E9EDF4]
                        w-full
                        rounded-md
                        border
                        bg-[#FCFDFE]
                        py-3
                        px-5
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus:border-primary
                        focus-visible:shadow-none
                      "
                    />
                    <div v-if="authStore.errors.password" class="flex">
                      <span class="text-red-400 text-sm m-2 p-2">{{
                        authStore.errors.password[0]
                      }}</span>
                    </div>
                  </div>
                  <div class="mb-10">
                    <button
                      type="submit"
                      class="
                        w-full
                        px-4
                        py-3
                        bg-indigo-500
                        hover:bg-indigo-700
                        rounded-md
                        text-white
                      "
                    >
                      Login
                    </button>
                  </div>
                </form>
                <div class="text-center">
                    <p class="text-[0.75rem] text-[#8c9097] dark:text-white/50 mt-4">Dont have an account? 
                      <router-link to="/register" class="text-primary hover:underline">
                        Sign Up
                      </router-link>
                    </p>
                </div>
              </div>
            </div>
          </div>
          <div class="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-3 sm:col-span-2"></div>
        </div>
      </div>
    </div>
   </div>
</template>