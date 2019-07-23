<template>
  <div class="container">
    <div class="header">
      <div>
        <router-link to="/welcome" class="linkhome">首页</router-link>
      </div>
    </div>
    <div class="left">
      <router-link to="/todolist">
        <div class="linkitem">TodoList</div>
      </router-link>

      <router-link to="/welcome">
        <div class="linkitem">welcome</div>
      </router-link>
    </div>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  props: [""],
  data() {
    return {};
  },

  components: {},

  computed: {},

  created() {},

  beforeMount() {},

  mounted() {},

  methods: {},

  watch: {}
};
</script>
<style scoped>
.linkhome {
  text-decoration: none;
  color: white;
  line-height: 60px;
}
.linkitem {
  line-height: 50px;
  text-align: center;
}
.linkitem:hover {
  background-color: #f5f5f5;
}
a {
  text-decoration: none;
  color: #333333;
}
.container {
  width: 80%;
  margin: 0 auto;
}
.header {
  height: 60px;
  background-color: #1f103d;
  padding-left: 20px;
}
.left {
  float: left;
  width: 200px;
  height: 300px;
  background-color: #dcdcdc;
}
.right {
  float: left;
  min-height: 500px;
  width: 70%;
  background-color: #ffffff;
  text-align: left;
}
</style>