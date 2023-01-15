<template>
  <form class="bg-white p-6 rounded-lg">
    <label for="name" class="block font-medium text-lg mb-2">Name:</label>
    <input 
      type="text" 
      v-model="formData.name" 
      id="name" 
      name="name" 
      class="border border-gray-400 p-2 w-full rounded-lg"
    ><br>

    <label for="email" class="block font-medium text-lg mb-2">Email:</label>
    <input 
      type="email" 
      v-model="formData.email" 
      id="email" 
      name="email" 
      class="border border-gray-400 p-2 w-full rounded-lg"
    ><br>

    <label for="phone" class="block font-medium text-lg mb-2">Phone Number:</label>
    <input 
      type="tel" 
      v-model="formData.phone" 
      id="phone" 
      name="phone" 
      class="border border-gray-400 p-2 w-full rounded-lg"
    ><br>

    <input 
      type="submit" 
      @click.prevent="submitForm" 
      value="Submit"
      class="bg-indigo-500 text-white p-2 rounded-lg hover:bg-indigo-600"
    >
  </form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        phone: ''
      }
    }
  },
  methods: {
    submitForm() {
      // add discord webhook here
      axios.post('/submit-form', this.formData)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
