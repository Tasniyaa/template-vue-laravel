<script setup>
  import { ref, onMounted } from "vue";
  import { useAuthStore } from "../stores/auth";
  import { initialize } from "../../public/assets/js/custom-switcher.js"
  import "../../public/assets/images/brand-logos/favicon.ico"
  import "../../public/assets/css/style.css"
  import "../../public/assets/libs/simplebar/simplebar.min.css"
  import "../../public/assets/libs/@simonwep/pickr/themes/nano.min.css"
  import "../../public/assets/libs/swiper/swiper-bundle.min.css"
  import "../../public/assets/libs/@popperjs/core/umd/popper.min.js"
  import "../../public/assets/libs/@simonwep/pickr/pickr.es5.min.js"
  import "../../public/assets/libs/swiper/swiper-bundle.min.js"
  //import "../../public/assets/js/landing.js"
  //import { landing } from '../../public/assets/js/landing.js';
  import "../../public/assets/js/switch.js"
  import "../../public/assets/libs/preline/preline.js"
  import "../../public/assets/libs/simplebar/simplebar.min.js"
  //import "../../public/assets/js/sticky.js"
  import axios from 'axios';
  const authStore = useAuthStore();

onMounted(async () => {
  try {
    //initialize()
    await import('../../public/assets/js/defaultmenu.js');
    console.log('default menu loaded successfully');
    await import('../../public/assets/js/landing.js');
    console.log('landing loaded successfully');
    await import('../../public/assets/js/sticky.js');
    console.log('sticky loaded successfully');
    
  } catch (error) {
    console.error('Error loading script:', error);
  }
});

</script>

<template>
<div class="landing-body">
  <div id="hs-overlay-switcher" class="hs-overlay hidden ti-offcanvas ti-offcanvas-right" tabindex="-1">
    <div class="ti-offcanvas-header">
      <h5 class="ti-offcanvas-title">
        Switcher
      </h5>
      <button type="button"
        class="ti-btn flex-shrink-0 p-0 transition-none text-defaulttextcolor dark:text-defaulttextcolor/70 hover:text-gray-700 focus:ring-gray-400 focus:ring-offset-white  dark:hover:text-white/80 dark:focus:ring-white/10 dark:focus:ring-offset-white/10"
        data-hs-overlay="#hs-overlay-switcher">
        <span class="sr-only">Close modal</span>
        <i class="ri-close-circle-line leading-none text-lg"></i>
      </button>
    </div>
    <div class="ti-offcanvas-body" id="switcher-body">
      <div>
        <div>
          <p class="switcher-style-head">Theme Color Mode:</p>
          <div class="grid grid-cols-3 gap-6 switcher-style">
            <div class="flex">
              <input type="radio" name="theme-style" class="ti-form-radio" id="switcher-light-theme" checked>
              <label for="switcher-light-theme"
                class="text-xs text-defaulttextcolor dark:text-defaulttextcolor/70 font-semibold ms-2 ">Light</label>
            </div>
            <div class="flex">
              <input type="radio" name="theme-style" class="ti-form-radio" id="switcher-dark-theme">
              <label for="switcher-dark-theme"
                class="text-xs text-defaulttextcolor dark:text-defaulttextcolor/70 font-semibold ms-2 ">Dark</label>
            </div>
          </div>
        </div>
        <div>
          <p class="switcher-style-head">Directions:</p>
          <div class="grid grid-cols-3 gap-6 switcher-style">
            <div class="flex">
              <input type="radio" name="direction" class="ti-form-radio" id="switcher-ltr" checked>
              <label for="switcher-ltr" class="text-xs font-semibold text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2 ">LTR</label>
            </div>
            <div class="flex">
              <input type="radio" name="direction" class="ti-form-radio" id="switcher-rtl">
              <label for="switcher-rtl" class="text-xs font-semibold text-defaulttextcolor dark:text-defaulttextcolor/70 ms-2 ">RTL</label>
            </div>
          </div>
        </div>
        <div class="theme-colors">
          <p class="switcher-style-head">Theme Primary:</p>
          <div class="flex switcher-style space-x-3 rtl:space-x-reverse">
            <div class="ti-form-radio switch-select">
              <input class="ti-form-radio color-input color-primary-1" type="radio" name="theme-primary"
                id="switcher-primary" checked>
            </div>
            <div class="ti-form-radio switch-select">
              <input class="ti-form-radio color-input color-primary-2" type="radio" name="theme-primary"
                id="switcher-primary1">
            </div>
            <div class="ti-form-radio switch-select">
              <input class="ti-form-radio color-input color-primary-3" type="radio" name="theme-primary"
                id="switcher-primary2">
            </div>
            <div class="ti-form-radio switch-select">
              <input class="ti-form-radio color-input color-primary-4" type="radio" name="theme-primary"
                id="switcher-primary3">
            </div>
            <div class="ti-form-radio switch-select">
              <input class="ti-form-radio color-input color-primary-5" type="radio" name="theme-primary"
                id="switcher-primary4">
            </div>
            <div class="ti-form-radio switch-select ps-0 mt-1 color-primary-light">
              <div class="theme-container-primary"></div>
              <div class="pickr-container-primary"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="ti-offcanvas-footer sm:flex justify-between">
        <a href="javascript:void(0);" id="reset-all" class="w-full ti-btn ti-btn-danger-full m-1">Reset</a>
    </div>
  </div>
  <!-- ========== END Switcher  ========== -->

  <div class="landing-page-wrapper relative">

    <!-- Start::Header -->
    <header class="app-header my-header mx-auto">
        <div class="main-header-container container-fluid">
          <div class="header-content-left">
              <div class="header-element">
                  <div class="horizontal-logo">
                      <a href="index.html" class="header-logo">
                          <img src="../../public/assets/images/brand-logos/toggle-logo.png" alt="logo" class="toggle-logo">
                          <img src="../../public/assets/images/brand-logos/toggle-dark.png" alt="logo" class="toggle-dark">
                      </a>
                  </div>
                  <div class="sm:hidden lg:block mt-2">
                      <a href="index.html" class="header-logo">
                          <img src="../../public/assets/images/brand-logos/toggle-logo.png" alt="logo" class="toggle-logo">
                      </a>
                  </div>
              </div>

              <div class="header-element lg:hidden md:hidden">
                  <a aria-label="anchor" href="javascript:void(0);" class="sidemenu-toggle header-link  lg:hidden md:hidden">
                      <span class="open-toggle lg:hidden md:hidden">
                          <i class="ri-menu-3-line text-xl"></i>
                      </span>
                  </a>
              </div>
          </div>
          <div class="sm:hidden lg:block">
            <ul class="main-menu flex flex-row mt-4">
                <li class="slide">
                    <a class="side-menu__item my-item mx-3 " href="#home">
                        <span class="side-menu__label">Home</span>
                    </a>
                </li>
                <li class="slide">
                    <a href="#about" class="side-menu__item my-item mx-3 ">
                        <span class="side-menu__label">About</span>
                    </a>
                </li>
                <li class="slide">
                    <a href="#team" class="side-menu__item my-item mx-3 ">
                        <span class="side-menu__label">Team</span>
                    </a>
                </li>
                <li class="slide">
                    <a href="#pricing" class="side-menu__item my-item mx-3 ">
                        <span class="side-menu__label">Pricing</span>
                    </a>
                </li>
                <li class="slide">
                    <a href="#faq" class="side-menu__item my-item mx-3 ">
                        <span class="side-menu__label">Faq's</span>
                    </a>
                </li>
                <li class="slide">
                    <a href="#contact" class="side-menu__item my-item mx-3 ">
                        <span class="side-menu__label">Contact</span>
                    </a>
                </li>
            </ul>
          </div>

          <div class="header-content-right">
            <div v-if="authStore.user" class="flex flex-row">
                <div v-if="authStore.user.role == 'super-admin'" class="header-element !items-center me-2">
                  <div class="lg:hidden block">
                      <a href="http://localhost:3000/admi/crm-dashboard" class="ti-btn ti-btn-primary !m-0">
                          dashboard
                      </a>
                  </div>
                </div>
                <div class="header-element !items-center me-2">
                  <div class="lg:hidden block">
                      <button @click="authStore.handleLogout()" class="ti-btn ti-btn-primary !m-0">
                          logout
                      </button>
                  </div>
                </div>

            </div>
              <div v-else class="header-element !items-center flex flex-row">
                  <div class="lg:hidden block me-2">
                      <a href="http://localhost:3000/register" class="ti-btn ti-btn-primary !m-0">
                          Sign Up
                      </a>
                  </div>
                  <div class="lg:hidden block me-2">
                      <a href="http://localhost:3000/login" class="ti-btn ti-btn-primary !m-0">
                          Sign In
                      </a>
                  </div>
              </div>
          </div>
        </div>

    </header>
    <aside class="app-sidebar sticky !topacity-0  lg:hidden md:hidden" id="sidebar" >
      <div class="container-xl xl:!p-0">
        <div class="main-sidebar mx-0">
          <nav class="main-menu-container nav nav-pills flex-column sub-open">
            <div class="landing-logo-container my-auto hidden lg:block">
              <div class="responsive-logo">
                <a class="responsive-logo-light" href="index.html" aria-label="Brand"><img
                    src="../assets/images/brand-logos/desktop-logo.png" alt="logo" class="mx-auto"></a>
                <a class="responsive-logo-dark" href="index.html" aria-label="Brand"><img
                    src="../assets/images/brand-logos/desktop-white.png" alt="logo" class="mx-auto"></a>
              </div>
            </div>
            <div class="slide-left hidden" id="slide-left"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24"> <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path> </svg></div>
            <ul class="main-menu">
                <li class="slide">
                    <a class="side-menu__item" href="#home">
                        <span class="side-menu__label">Home</span>
                    </a>
                </li>
                <li class="slide">
                    <a href="#about" class="side-menu__item">
                        <span class="side-menu__label">About</span>
                    </a>
                </li>
                <li class="slide has-sub">
                    <a href="javascript:void(0);" class="side-menu__item">
                        <span class="side-menu__label me-2">More</span>
                        <i class="fe fe-chevron-right side-menu__angle op-8"></i>
                    </a>
                    <ul class="slide-menu child1">
                        <li class="slide">
                            <a href="#statistics" class="side-menu__item">Statistics</a>
                        </li>
                        <li class="slide">
                            <a href="#our-mission" class="side-menu__item">Our Mission</a>
                        </li>
                        <li class="slide">
                            <a href="#features" class="side-menu__item">Features</a>
                        </li>
                        <li class="slide">
                            <a href="#testimonials" class="side-menu__item">Testimonials</a>
                        </li>
                        <li class="slide has-sub">
                            <a href="javascript:void(0);" class="side-menu__item">Level-2
                                <i class="fe fe-chevron-right side-menu__angle"></i></a>
                            <ul class="slide-menu child2">
                                <li class="slide">
                                    <a href="javascript:void(0);" class="side-menu__item">Level-2-1</a>
                                </li>
                                <li class="slide has-sub">
                                    <a href="javascript:void(0);" class="side-menu__item">Level-2-2
                                        <i class="fe fe-chevron-right side-menu__angle"></i></a>
                                    <ul class="slide-menu child3">
                                        <li class="slide">
                                            <a href="javascript:void(0);" class="side-menu__item">Level-2-2-1</a>
                                        </li>
                                        <li class="slide has-sub">
                                            <a href="javascript:void(0);" class="side-menu__item">Level-2-2-2</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li class="slide">
                    <a href="#team" class="side-menu__item">
                        <span class="side-menu__label">Team</span>
                    </a>
                </li>
                <li class="slide">
                    <a href="#pricing" class="side-menu__item">
                        <span class="side-menu__label">Pricing</span>
                    </a>
                </li>
                <li class="slide">
                    <a href="#faq" class="side-menu__item">
                        <span class="side-menu__label">Faq's</span>
                    </a>
                </li>
                <li class="slide">
                    <a href="#contact" class="side-menu__item">
                        <span class="side-menu__label">Contact</span>
                    </a>
                </li>
            </ul>
            <div class="slide-right hidden" id="slide-right"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24"> <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path> </svg></div>
            <div class="lg:flex hidden space-x-2 rtl:space-x-reverse">
              <a href="sign-up-basic.html" class="ti-btn w-[6.375rem] ti-btn-primary-full m-0 p-2">Sign
                Up</a>
              <a aria-label="anchor" href="javascript:void(0);" class="ti-btn m-0 p-2 px-3 ti-btn-light !font-medium"
                data-hs-overlay="#hs-overlay-switcher"><i class="ri-settings-3-line animate-spin-slow"></i></a>
            </div>
          </nav>
        </div>
      </div>
    </aside>
    <div class="main-content !p-0 landing-main dark:text-defaulttextcolor/70">
        <main>
            <router-view></router-view>
        </main>
        <section class="section py-5 landing-footer  bg-black  !text-white text-[0.813rem] opacity-[0.87]">
            <div class="container py-5 bg-black">
                <div class="grid grid-cols-12 gap-6">
                    <div class="xl:col-span-4 col-span-12">
                        <div class="px-6">
                            <p class="font-semibold mb-4"><a aria-label="anchor" href="index.html"><img src="../assets/images/brand-logos/desktop-dark.png" alt=""></a></p>
                            <p class="mb-2 opacity-[0.6] font-normal">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit et magnam, fuga est mollitia eius, quo illum illo inventore optio aut quas omnis rem. Dolores accusantium aspernatur minus ea incidunt.
                            </p>
                            <p class="mb-0 opacity-[0.6] font-normal">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem ea esse ad</p>
                        </div>
                    </div>
                    <div class="xl:col-span-2 col-span-12">
                        <div class="px-6">
                            <h6 class="font-semibold text-[1rem] mb-4">PAGES</h6>
                            <ul class="list-unstyled opacity-[0.6] font-normal landing-footer-list">
                                <li>
                                    <a href="javascript:void(0);" class="text-white">Email</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" class="text-white">Profile</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" class="text-white">Timeline</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" class="text-white">Projects</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" class="text-white">Contacts</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" class="text-white">Portfolio</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="xl:col-span-2 col-span-12">
                        <div class="px-6">
                            <h6 class="font-semibold text-[1rem] mb-2">INFO</h6>
                            <ul class="list-unstyled opacity-[0.6] font-normal landing-footer-list">
                                <li>
                                    <a href="javascript:void(0);" class="text-white">Our Team</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" class="text-white">Contact US</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" class="text-white">About</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" class="text-white">Services</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" class="text-white">Blog</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" class="text-white">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="xl:col-span-4 col-span-12">
                        <div class="px-6">
                            <h6 class="font-semibold text-[1rem] mb-2">CONTACT</h6>
                            <ul class="list-unstyled font-normal landing-footer-list">
                                <li>
                                    <a href="javascript:void(0);" class="text-white opacity-[0.6]"><i class="ri-home-4-line me-1 align-middle"></i> New York, NY 10012, US</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" class="text-white opacity-[0.6]"><i class="ri-mail-line me-1 align-middle"></i> info@fmail.com</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" class="text-white opacity-[0.6]"><i class="ri-phone-line me-1 align-middle"></i> +(555)-1920 1831</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" class="text-white opacity-[0.6]"><i class="ri-printer-line me-1 align-middle"></i> +(123) 1293 123</a>
                                </li>
                                <li class="mt-4 !mb-0">
                                    <p class="mb-2 font-semibold opacity-[0.8] text-[1rem]">FOLLOW US ON :</p>
                                    <div class="mb-0">
                                        <div class="btn-list">
                                            <button aria-label="button" type="button" class="ti-btn ti-btn-sm !mb-0 ti-btn-primary me-[0.365rem]">
                                                <i class="ri-facebook-line font-bold"></i>
                                            </button>
                                            <button aria-label="button" type="button" class="ti-btn ti-btn-sm !mb-0 ti-btn-secondary me-[0.365rem]">
                                                <i class="ri-twitter-x-line font-bold"></i>
                                            </button>
                                            <button aria-label="button" type="button" class="ti-btn ti-btn-sm !mb-0 ti-btn-warning me-[0.365rem]">
                                                <i class="ri-instagram-line font-bold"></i>
                                            </button>
                                            <button aria-label="button" type="button" class="ti-btn ti-btn-sm !mb-0 ti-btn-success me-[0.365rem]">
                                                <i class="ri-github-line font-bold"></i>
                                            </button>
                                            <button aria-label="button" type="button" class="ti-btn ti-btn-sm !mb-0 ti-btn-danger">
                                                <i class="ri-youtube-line font-bold"></i>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="text-center py-5 my-footer bg-black landing-main-footer opacity-[0.87]">
            <span class="text-[#8c9097] dark:text-white/50 text-[0.9375rem]"> Copyright © <span id="year"></span> <a
                href="javascript:void(0);" class="!text-primary font-semibold"><u>ynex</u></a>.
            Designed with <span class="fa fa-heart text-danger"></span> by <a href="javascript:void(0);" class="!text-primary font-semibold"><u>
            Spruko</u>
            </a> All
            rights
            reserved
            </span>
        </div>
    </div>

  </div>

  <!-- Back To Top -->
  <!--<div class="scrollToTop">
    <span class="arrow"><i class="ri-arrow-up-s-fill  text-[1.25rem]"></i></span>
  </div>-->

    <!--<div v-if="authStore.user">
      user logged in
      <button @click="authStore.handleLogout()"> logout</button>
      <p>{{ authStore.user.role }}</p>
      <div v-if="authStore.user.role == 'super-admin'">
        <a href="http://localhost:3000/admi/crm-dashboard" class="side-menu__item">SuperAdmin</a>
      </div>
    </div>-->
  <div id="responsive-overlay"></div>
</div>
</template>


<style scoped>
.landing-body{
    /*background-color:rgb(119,69,200)*/
  }
.my-bg-purple{
    background-color:rgb(119,69,200)
}
a.my-item{
    color: purple;
}
 .landing-body .landing-section-heading {
  position: relative;
  font-size: 0.813rem;
  font-weight: 600;
}
.landing-body .landing-section-heading::before {
  position: absolute;
  top: -0.625rem;
  inset-inline-end: 0px;
  height: 0.25rem;
  width: 60%;
  border-radius: 3.125rem;
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
  --tw-gradient-from: rgb(var(--success)) var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(var(--success) / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
  --tw-gradient-to: rgb(var(--success) / 0.1) var(--tw-gradient-to-position);
  content: var(--tw-content);
  opacity: 0.5;
}
.bg-ash{
    background-color: #F0F1F7;
}
.my-header{
    margin-left: 0px !important;
}
.my-footer{
    background-color: rgb(31,31,32);
}
html, body {
    height: 100%;
    margin: 0;
}

.main-content {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

main {
    flex-grow: 1;
}
</style>






