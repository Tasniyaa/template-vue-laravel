<template>
    <div class="my-4">
      <div class="mb-4">
        <h3>Tags Mode</h3>
        <Multiselect
          v-model="tagsValue"
          mode="tags"
          :close-on-select="false"
          :searchable="true"
          :create-option="true"
          :options="options"
        />
      </div>

      <div class="mb-4">
        <h3>Single Selection Mode</h3>
        <Multiselect
          v-model="singleValue"
          mode="single"
          :close-on-select="true"
          :searchable="true"
          :create-option="true"
          :options="options"
        />
      </div>
  
      <button @click="handleSubmit" class="mt-4 bg-teal-500 text-white py-2 px-4 rounded">Submit</button>
    </div>
  </template>
  
  <script>
  import Multiselect from '@vueform/multiselect';
  
  export default {
    components: {
      Multiselect,
    },
    data() {
      return {
        tagsValue: [], // Initial value for Tags mode Multiselect
        singleValue: null, // Initial value for Single selection Multiselect
        options: [
          { value: 'batman', label: 'Batman' },
          { value: 'robin', label: 'Robin' },
          { value: 'joker', label: 'Joker' },
        ],
      };
    },
    methods: {
      handleSubmit() {
        alert(`Selected tags: ${this.tagsValue.join(', ')}\nSelected single option: ${this.singleValue}`);
      },
    },
  };
  </script>

<style src="@vueform/multiselect/themes/default.css"></style>