<template>
  <div>
    <h1>Home</h1>
    <card class="centercard"></card>
    <card class="centercard"> 2nd Card </card>
    <card class="centercard">
      <card style="width: 250px; margin: 0 auto 0 auto"> test</card>
    </card>
  </div>
</template>

<script>
import card from "./card";

export default {
  components: {
    card,
  },
};
</script>

<style>
.centercard {
  margin: 0 auto 0 auto;
}
</style>