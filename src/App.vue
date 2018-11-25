<template>
  <div id="app">
    <v-app dark>
      <NaviBar />
      <router-view />
    </v-app>
    <Footer />
  </div>
</template>

<script>
import NaviBar from '@/components/NaviBar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    NaviBar,
    Footer
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style>
#app {
  font-family: Arial;
  text-align: center;
  color: #2c3e50;
}
</style>
