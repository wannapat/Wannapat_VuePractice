<template>
  <div>
    <h1>V-On</h1>
    <h2>{{ message }}</h2>
    <button v-on:click="Add">Add</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 0,
    };
  },
  methods: {
    Add() {
      this.message = this.message + 1;
    },
  },
};
</script>