<template>
  <div class="hello">
    <button v-on:click="toggle">toggle</button>
    <h2 v-show="showText">{{ msg }}</h2>
    <div v-show="showText" id="v-for list">
      <ul>
        <div v-for="item in list" :key="item.id">{{ item }}</div>
      </ul>
      <ul id="v-for object">
        <div v-for="(item, key, index) in object" :key="index">
          {{ key }}: {{ item }}
        </div>
      </ul>
    </div>

    <div id="v-if">
      <span v-if="bol">v-if true</span>
    </div>

    <div v-show="true" id="v-model test">
      <p style="white-space: pre-line;">Message is:{{ vmodelmsg }}</p>
      <br>
      <textarea v-model="vmodelmsg"></textarea>
    </div>
    <div v-bind:class="clsobj" >class bind</div>

    <div v-bind:class="login">
      <div>
      <template v-if="mailtype">
        <label>mail</label>
        <input placeholder="Email">
      </template>
      <template v-else>
        <label>id</label>
        <input placeholder="@ID">
      </template>
      <button v-on:click="loginType">login type change</button>
      </div>
    </div>
    <select  v-model="selected">
      <option disable value="">Please select</option>
      <option v-for="(option, index) in options" :key="index"
              v-bind:value="option.value"
      >
      {{ option.text }}
      </option>
    </select>
    <span>Selected: {{ selected }}</span>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      testshow: false,
      msg: 'Welcome to Your Vue.js App',
      showText: false,
      list: ['aaa', 'iii', 'uuu'],
      object: {
        firstname: 'oono',
        lastname: 'ooom',
        age: 26
      },
      bol: false,
      vmodelmsg: 'aaaa',
      clsobj: {
        active: true,
        'binddd': true
      },
      mailtype: true,
      login: {
        login: true
      },
      selected: '',
      options: [
        {text: 'one', value: 'A'},
        {text: 'Two', value: 'B'},
        {text: 'Three', value: 'C'}
      ]
    }
  },
  methods: {
    toggle: function () {
      this.showText = !this.showText
    },
    loginType: function () {
      this.mailtype = !this.mailtype
    }
  }
}
</script>

<style>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
