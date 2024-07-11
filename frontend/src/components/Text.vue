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
            <div class="mb-10 text-center md:mb-16  text-2xl">Laraveller</div>
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
            <router-link
              to="/forgot-password"
              class="
                mb-2
                inline-block
                text-base text-[#adadad]
                hover:text-primary hover:underline
              "
            >
              Forgot Password?
            </router-link>
            <p class="text-base text-[#adadad]">
              Not a member yet?
              <router-link to="/register" class="text-primary hover:underline">
                Sign Up
              </router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
 
</template>

<script>
// import "../public/assets/js/main.js"

// import "../public/assets/css/style.css"
// import "../public/assets/libs/simplebar/simplebar.min.css"
// import "../public/assets/libs/@simonwep/pickr/themes/nano.min.css"
// import "../public/assets/libs/dragula/dragula.min.css"

// import "../public/assets/libs/choices.js/public/assets/scripts/choices.min.js"
// import "../public/assets/libs/filepond/filepond.min.js"
// import "../public/assets/libs/filepond-plugin-image-preview/filepond-plugin-image-preview.min.js"
// import "../public/assets/libs/filepond-plugin-image-exif-orientation/filepond-plugin-image-exif-orientation.min.js"
// import "../public/assets/libs/filepond-plugin-file-validate-size/filepond-plugin-file-validate-size.min.js"
// import "../public/assets/libs/filepond-plugin-file-encode/filepond-plugin-file-encode.min.js"
// import "../public/assets/libs/filepond-plugin-image-edit/filepond-plugin-image-edit.min.js"
// import "../public/assets/libs/filepond-plugin-file-validate-type/filepond-plugin-file-validate-type.min.js"
// import "../public/assets/libs/filepond-plugin-file-validate-type/filepond-plugin-file-validate-type.min.js"
// import "../public/assets/libs/filepond-plugin-image-crop/filepond-plugin-image-crop.min.js"
// import "../public/assets/libs/filepond-plugin-image-resize/filepond-plugin-image-resize.min.js"
// import "../public/assets/libs/filepond-plugin-image-transform/filepond-plugin-image-transform.min.js"

// import "../public/assets/libs/flatpickr/flatpickr.min.js"
// import "../public/assets/libs/dragula/dragula.min.js"

// import "../public/assets/js/switch.js"
// import "../public/assets/libs/preline/preline.js"
// import "../public/assets/libs/@popperjs/core/umd/popper.min.js"
// import "../public/assets/libs/@simonwep/pickr/pickr.es5.min.js"
// import "../public/assets/js/defaultmenu.js"
// import "../public/assets/js/sticky.js"
// import "../public/assets/libs/simplebar/simplebar.min.js"
// import "../public/assets/libs/jsvectormap/js/jsvectormap.min.js"
// import "../public/assets/libs/jsvectormap/maps/world-merc.js"
// import "../public/assets/libs/apexcharts/apexcharts.min.js"
// import "../public/assets/libs/chart.js/chart.min.js"
// import "../public/assets/js/crm-dashboard.js"
// import "../public/assets/js/custom-switcher.js"



// import "../public/assets/js/task-kanban-board.js"
// import "../public/assets/js/custom.js"

</script>
