<template>
  <v-footer
    dark
    height="auto"
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="teal">
        <strong class="subheading">follow</strong>
        <v-spacer></v-spacer>
        <a class="btn btn-icon btn-twitter" href="https://twitter.com/169z87mn"><i class="fa fa-twitter"></i><span>Twitter</span></a>
        <a class="btn btn-icon btn-github" href="https://github.com/169z87mn"><i class="fa fa-github"></i><span>GitHub</span></a>
      </v-card-title>

      <v-card-actions class="grey darken-3 justify-center">
        &copy;2018 — <strong>169z87mn</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
  })
}
</script>

<style>
@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css);
@import url(https://fonts.googleapis.com/css?family=Roboto:400,300);

html {font-family: 'Roboto', sans-serif;font-size:16px;line-height:1em;height:100%;}
body {
  background: #ffffff;
  background: linear-gradient(135deg, #ffffff 0%,#ffffff 50%,#F2F2F2 50%,#F2F2F2 50%,#F2F2F2 100%);
}

h1 {font-size:1.5em;margin-bottom:55px;}

.btn {
  clear:both;
  white-space:nowrap;
  font-size:.8em;
  display:inline-block;
  border-radius:5px;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.35);
  margin:2px 2px 2px 10px;
  -webkit-transition:all .5s;
  -moz-transition:all .5s;
  transition:all .5s;
  overflow:hidden
}

.btn:hover {
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.45);
}

.btn:focus {
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.4);
}

.btn > span,.btn-icon > i {
  float:left;
  padding: 13px 25px 13px 13px;
  -webkit-transition:all .5s;
  -moz-transition:all .5s;
  transition:all .5s;
  line-height:1em
}

.btn > span {
  padding:14px 18px 16px;
  white-space:nowrap;
  color:#FFF;
  background:#b8b8b8
}

.btn:focus > span {
  background:#9a9a9a
}

.btn-icon > i {
  border-radius:5px 0 0 5px;
  position:relative;
  width:13px;
  text-align:center;
  font-size:1.25em;
  color:#fff;
  background:#212121
}

.btn-icon > i:after {
  content:"";
  border:8px solid;
  border-color:transparent transparent transparent #222;
  position:absolute;
  top:13px;
  right:-15px
}

.btn-icon:hover > i,.btn-icon:focus > i {
  color:#FFF
}

.btn-icon > span {
  border-radius:0 5px 5px 0
}
/*Twitter*/
.btn-twitter:hover > i,.btn-twitter:focus > i {
  color:#55acee
}

.btn-twitter > span {
  background:#55acee
}
/*GitHub*/
.btn-github:hover > i,.btn-github:focus > i {
  color:#ffffff
}

.btn-github > span {
  background:#2b3137
}
</style>
