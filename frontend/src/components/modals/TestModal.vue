<template>
  <div class="">
    <div class="mb-3 mx-3">
      <a href="javascript:void(0);" class="hs-dropdown-toggle ti-btn ti-btn-primary-full " @click="openModal">
        Test Modal
      </a>
      <div v-if="isModalOpen" :class="['hs-overlay ti-modal fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300', { 'opacity-0': !isModalOpen, 'opacity-100': isModalOpen }]">
        <div class="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40" @click="closeModal"></div>
        <div :class="['ti-modal-box mt-0 ease-out z-50 transition-transform duration-300', { 'transform scale-95': !isModalOpen, 'transform scale-100': isModalOpen }]">
          <div class="ti-modal-content">
            <div class="ti-modal-header">
              <h6 class="modal-title text-[1rem] font-semibold" id="mail-ComposeLabel">Modal title</h6>
              <button type="button" class="hs-dropdown-toggle !text-[1rem] !font-semibold !text-defaulttextcolor" @click="closeModal">
                <span class="sr-only">Close</span>
                <i class="ri-close-line"></i>
              </button>
            </div>
            <div class="ti-modal-body px-4">
              <form @submit.prevent="submitForm">
                <div class="mb-4">
                  <label for="name" class="form-label">Name</label>
                  <input type="text" v-model="formData.name" class="form-control" id="name" placeholder="Enter your name" required>
                </div>
                <div class="ti-modal-footer">
                  <button type="button" class="hs-dropdown-toggle ti-btn ti-btn-secondary-full align-middle" @click="closeModal">
                    Close
                  </button>
                  <button type="submit" class="ti-btn bg-primary text-white !font-medium">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { ref, nextTick } from 'vue';
import axios from 'axios';

const isModalOpen = ref(false);
const formData = ref({
  name: ''
});

const openModal = async () => {
  isModalOpen.value = true;
  await nextTick(); 
  document.body.classList.add('modal-open');
};

const closeModal = () => {
  isModalOpen.value = false;
  document.body.classList.remove('modal-open');
};

onMounted(() => {

});
</script>
