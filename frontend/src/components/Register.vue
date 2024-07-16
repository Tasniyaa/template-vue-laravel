<!--<script setup>
import { ref } from "vue";
import { useAuthStore } from "../stores/auth";

const authStore = useAuthStore();

const form = ref({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
});
</script>
<template>
  <section class="bg-[#F4F7FF] py-20 lg:py-[120px]">
    <div class="container mx-auto">
      <div class="-mx-4 flex flex-wrap">
        <div class="w-full px-4">
          <div
            class="
              relative
              mx-auto
              max-w-[525px]
              overflow-hidden
              rounded-lg
              bg-white
              py-16
              px-10
              text-center
              sm:px-12
              md:px-[60px]
            "
          >
            <div class="mb-10 text-center md:mb-16">Laraveller</div>
            <form @submit.prevent="authStore.handleRegister(form)">
              <div class="mb-6">
                <input
                  type="text"
                  placeholder="Name"
                  v-model="form.name"
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
                <div v-if="authStore.errors.name" class="flex">
                  <span class="text-red-400 text-sm m-2 p-2">{{
                    authStore.errors.name[0]
                  }}</span>
                </div>
              </div>
              <div class="mb-6">
                <input
                  type="email"
                  placeholder="Email"
                  v-model="form.email"
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
                  placeholder="Password"
                  v-model="form.password"
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
              <div class="mb-6">
                <input
                  type="password"
                  placeholder="Password Confirmation"
                  v-model="form.password_confirmation"
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
                  Register
                </button>
              </div>
            </form>
            <p class="text-base text-[#adadad]">
              <router-link to="/login" class="text-primary hover:underline">
                Sign In
              </router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>-->


<script setup>
import { ref } from "vue";
import { useAuthStore } from "../stores/auth";

const authStore = useAuthStore();

const form = ref({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
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
                            <img src="../../public/assets/images/brand-logos/desktop-logo.png" alt="logo" class="desktop-logo">
                            <img src="../../public/assets/images/brand-logos/desktop-dark.png" alt="logo" class="desktop-dark">
                        </a>
                    </div>
                    <div class="box">
                        <div class="box-body !p-[3rem]">
                            <p class="h5 font-semibold mb-2 text-center">Sign Up</p>
                            <p class="mb-4 text-[#8c9097] dark:text-white/50 opacity-[0.7] font-normal text-center">Welcome &amp; Join us by
                                creating a free account !</p>

                            <form @submit.prevent="authStore.handleRegister(form)">
                              <div class="mb-6">
                                <input
                                  type="text"
                                  placeholder="Name"
                                  v-model="form.name"
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
                                <div v-if="authStore.errors.name" class="flex">
                                  <span class="text-red-400 text-sm m-2 p-2">{{
                                    authStore.errors.name[0]
                                  }}</span>
                                </div>
                              </div>
                              <div class="mb-6">
                                <input
                                  type="email"
                                  placeholder="Email"
                                  v-model="form.email"
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
                                  placeholder="Password"
                                  v-model="form.password"
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
                              <div class="mb-6">
                                <input
                                  type="password"
                                  placeholder="Password Confirmation"
                                  v-model="form.password_confirmation"
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
                                  Register
                                </button>
                              </div>
                            </form>
                            <div class="text-center">
                                <p class="text-[0.75rem] text-[#8c9097] dark:text-white/50 mt-4">Already have an account? 
                                  <!--<a href="sign-in-basic.html" class="text-primary">Sign In</a>-->
                                  <router-link to="/login" class="text-primary hover:underline">
                                    Sign In
                                  </router-link>
                                </p>
                            </div>
                            <div class="text-center my-4 authentication-barrier">
                                <span>OR</span>
                            </div>
                            <div class="btn-list text-center">
                                <button aria-label="button" type="button" class="ti-btn ti-btn-icon ti-btn-light me-[0.365rem]">
                                    <i class="ri-facebook-line font-bold text-dark opacity-[0.7]"></i>
                                </button>
                                <button aria-label="button" type="button" class="ti-btn ti-btn-icon ti-btn-light me-[0.365rem]">
                                    <i class="ri-google-line font-bold text-dark opacity-[0.7]"></i>
                                </button>
                                <button aria-label="button" type="button" class="ti-btn ti-btn-icon ti-btn-light">
                                    <i class="ri-twitter-x-line font-bold text-dark opacity-[0.7]"></i>
                                </button>
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