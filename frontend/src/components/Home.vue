<script setup>
  import { ref, onMounted } from "vue";
  import { useAuthStore } from "../stores/auth";
  import { initialize } from "../../public/assets/js/custom-switcher.js"
  import axios from 'axios';
  const authStore = useAuthStore();
  const contacts = ref([]);
  const getContacts = async () => {
    // let url = '/api/contacts';
    // try {
    //   const response = await axios.get(url);
    //   contacts.value = response.data.contacts;
    // } catch (error) {
    //   console.log(error);
    // }
  };
  const deleteContact = async(id) => {
    const confirmed = confirm("Are you sure you want to delete this contact?");
    if (!confirmed) {
      return; // Do nothing if the user cancels the confirmation
    }
    let url = `/api/delete_contact/${id}`;
    // await axios.delete(url).then(response => {
    //   if(response.data.code == 200){
    //     alert(response.data.message);
    //     getContacts();
    //   }
    // }).catch(error =>{
    //   console.log(error)
    // });
  }
  onMounted(async () => {
    // await authStore.getUser();
    getContacts();
    // initialize()
  });


</script>







<template>
  <div class="">
    <div v-if="authStore.user">
        user logged in
    </div>
    <div v-else>
    </div>
  </div>
</template>