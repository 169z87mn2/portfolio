<template>
  <div>
    <Avatar
      :size=169
      src="https://pbs.twimg.com/profile_images/669917261579218945/ol_c952O_400x400.jpg"
      >
    </Avatar>
  </div>
</template>

<script>
import Avatar from 'vue-avatar'

export default {
  components: {
    Avatar
  },
  name: 'MyProfile',
  data () {
    return {
      tile: true
    }
  }
}
</script>

<style>
</style>
