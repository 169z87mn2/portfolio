<template>
  <div class="box" :style="{'background-image': `url(${require('@/assets/topbg.jpg')})`}">
    <div>
      <p>えりりんかわいい</p>
    </div>
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
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: auto;
  min-height: 94%;
  background-size: cover;
  background-position: center;
}
p {
  font-size: 40px;
  color: white;
  line-height: 2;
}
</style>
