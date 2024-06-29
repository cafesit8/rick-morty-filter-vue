<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue'

export default {
  name: 'App',
  components: {
    Main,
    Header
  }
}
</script>

<template>
  <div class="p-4">
    <Header />
    <Main />
  </div>
</template>

<style scoped></style>
