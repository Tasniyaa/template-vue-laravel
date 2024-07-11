<script>
  import axios from 'axios';
  export default {
    name: 'EditContact',
    data() {
      return {
        contact: {
          name: '',
          email: '',
          designation: '',
          contact_no: '',
        },
        imagePreviews: [], // Initialize imagePreviews as an empty array
        errors: [],
      };
    },
    created(){
      this.getContactById();
    },
    methods: {
      async getContactById(){
        let url = `api/get_contact/${this.$route.params.id}`;
        await axios.get(url).then(response => {
          console.log(response);
          this.contact = response.data;
        })
      },
      async updateContact() {
        this.errors = [];
        if (!this.contact.name) {
          this.errors.push("Name is required");
        }
        if (!this.contact.email) {
          this.errors.push("Email is required");
        }
        if (!this.contact.designation) {
          this.errors.push("Designation is required");
        }
        if (!this.contact.contact_no) {
          this.errors.push("Contact number is required");
        }
        if(!this.errors.length){
          let formData = new FormData();
          formData.append('name',this.contact.name);
          formData.append('email',this.contact.email);
          formData.append('designation',this.contact.designation);
          formData.append('contact_no',this.contact.contact_no);

          // Append image file if it exists
          if (this.contact.images && this.contact.images.length) {
              formData.append('image', this.contact.images[0]);
          }

          let url = `/api/update_contact/${this.$route.params.id}`;
          await axios.post(url,formData).then((response)=> {
            console.log(response);
            if(response.status == 200){
              this.contact.name = '';
              this.contact.email = '';
              this.contact.designation = '';
              this.contact.contact_no = '';
              this.contact.images = [];
              this.imagePreviews = [];
              alert(response.data.message);
              this.$router.push('/');
            }else{
              console.log('error');
            }
          }).catch(error =>{
            this.errors.push(error.response)
          })
        }
      },
      handleFileUpload(event) {
        const file = event.target.files[0];
        if (file) {
          let reader = new FileReader();
          reader.onload = (e) => {
            this.imagePreviews = [e.target.result];
          };
          reader.readAsDataURL(file);

          this.contact.images = [file]; // Replace the existing file with the new one
        }
      },
      removeImage(index) {
        this.contact.images.splice(index, 1);
        this.imagePreviews.splice(index, 1);
      }
    },
    mounted: function(){
      console.log('edit component form loaaded');
    }
  }
</script>

<template>
  <div class="">
    <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4" role="alert" v-if="errors.length">
      <ul class="list-disc pl-5 mt-2 mb-0">
        <li v-for="(error, index) in errors" :key="index" class="text-red-700">
          {{ error }}
        </li>
      </ul>
    </div>
    <form @submit.prevent="updateContact" class="max-w-sm mx-auto border border-blue-400 p-5 mt-5 rounded">
      <div class="border-b border-blue-300 mb-8">
        <h1 class="text-center mb-4 text-2xl">EDIT CONTACT</h1>
      </div>
      <div class="mb-5">
        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 ">Your Name</label>
        <input v-model="contact.name" type="text" id="name" class="bg-gray-0 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-300 dark:placeholder-gray-400 dark:text- dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your name" required />
      </div>
      <div class="mb-5">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
        <input v-model="contact.email" type="email" id="email" class="bg-gray-0 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-300 dark:placeholder-gray-400 dark:text- dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com"  required/>
      </div>
      <div class="mb-5">
        <label for="designation" class="block mb-2 text-sm font-medium text-gray-900 ">Your Designation</label>
        <input v-model="contact.designation" type="text" id="designation" class="bg-gray-0 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-300 dark:placeholder-gray-400 dark:text- dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your designation" required  />
      </div>
      <div class="mb-5">
        <label for="contact_no" class="block mb-2 text-sm font-medium text-gray-900 ">Your Contact Number</label>
        <input v-model="contact.contact_no" type="text" id="contact_no" class="bg-gray-0 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-300 dark:placeholder-gray-400 dark:text- dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your number" required />
      </div>
      <div class="mb-5">
      <label for="image" class="block mb-2 text-sm font-medium text-gray-900">Upload Image</label>
      <input @change="handleFileUpload" type="file" id="image" class="bg-gray-0 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-300 dark:placeholder-gray-400 dark:text- dark:focus:ring-blue-500 dark:focus:border-blue-500" />
    </div>
    
    <!-- Display existing image if it exists -->
    <div v-if="imagePreviews.length <= 0">
      <div v-if="contact.image" class="mb-5">
        <label class="block mb-2 text-sm font-medium text-gray-900">Current Image</label>
        <img :src="`http://localhost:8000/uploads/contacts/${contact.image}`" alt="Current Image" class="h-40 w-40 object-cover mb-2" />
        <!-- <button @click="removeImage" class="text-red-600 hover:text-red-800">Remove Image</button> -->
      </div>
    </div>
    <!-- Display image preview if a new image is selected -->
    <div v-if="imagePreviews.length > 0" class="mb-5">
      <label class="block mb-2 text-sm font-medium text-gray-900">Image Preview</label>
      <img :src="imagePreviews[0]" alt="Image Preview" class="h-40 w-40 object-cover mb-2" />
      <button @click="removeImage" class="text-red-600 hover:text-red-800">Remove Image</button>
    </div>
      <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
    </form>
  </div>
</template>

<style scoped>

</style>
