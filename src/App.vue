<template>
  <div id="app">
    <v-app dark>
      <NaviBar />
      <my-profile />
    </v-app>
  </div>
</template>

<script>
import NaviBar from '@/components/NaviBar.vue'
import MyProfile from '@/components/MyProfile.vue'

export default {
  name: 'App',
  components: {
    NaviBar,
    MyProfile
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
