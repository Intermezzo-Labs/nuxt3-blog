<template>
  <form class="w-full mt-6">
    <label for="UserEmail" class="sr-only"> Email </label>

    <div
      class="p-2 border border-gray-100 rounded-md focus-within:ring sm:flex sm:items-center sm:gap-4"
    >
      <input
        type="email"
        id="UserEmail"
        placeholder="john@rhcp.com"
        class="w-full border-none focus:border-transparent focus:ring-transparent sm:text-sm"
      />

      <button
        class="w-full px-6 py-3 mt-1 text-sm font-bold tracking-wide text-white uppercase transition-none bg-teal-500 rounded hover:bg-teal-600 sm:mt-0 sm:w-auto sm:flex-shrink-0"
      >
        Sign Up
      </button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        phone: "",
      },
    };
  },
  methods: {
    submitForm() {
      // add discord webhook here
      axios
        .post("/submit-form", this.formData)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
