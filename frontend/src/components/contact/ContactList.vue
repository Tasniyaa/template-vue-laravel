

<script setup>
  import { ref, onMounted } from "vue";
  import axios from 'axios';

  const contacts = ref([]);

  const getContacts = async () => {
    let url = '/api/contacts';
    try {
      const response = await axios.get(url);
      contacts.value = response.data.contacts;
    } catch (error) {
      console.log(error);
    }
  };

  const deleteContact = async (id) => {
    const confirmed = confirm("Are you sure you want to delete this contact?");
    if (!confirmed) {
      return; // Do nothing if the user cancels the confirmation
    }

    let url = `/api/delete_contact/${id}`;
    try {
      const response = await axios.delete(url);
      if (response.data.code == 200) {
        alert(response.data.message);
        getContacts(); // Refresh the contact list after deletion
      }
    } catch (error) {
      console.log(error);
    }
  };

  onMounted(async () => {
    getContacts();
  });
</script>

<template>
  <div>
    <h1>Contact List</h1>
    <ul>
      <li v-for="contact in contacts" :key="contact.id">
        {{ contact.name }} - {{ contact.email }}
        <button @click="deleteContact(contact.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

