<template>
  <a-layout>
    <a-layout-header>
      <!-- <router-link to="/home" class="linkhome" >首页</router-link> -->
      <span class="linkhome" @click="showConfirm">首页</span>
      <span class="linkuser" @click="linkToUser">Hello {{ name }}</span>
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <a-menu mode="inline" :defaultSelectedKeys="['todolist']" @click="changeItem">
          <a-menu-item key="todolist">
            <a-icon type="calendar" />
            <span>To Do List</span>
          </a-menu-item>
          <a-menu-item key="user">
            <a-icon type="user" />
            <span>My Imformation</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout-content>
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
    <!-- <a-layout-footer>Footer</a-layout-footer> -->
  </a-layout>
</template>

<script>
export default {
  name: "home",
  props: ["name"],
  data() {
    return {};
  },

  components: {},

  computed: {},

  created() {},

  beforeMount() {},

  mounted() {},

  methods: {
    linkToUser() {
      this.$router.push({ name: "information" });
    },
    changeItem(e) {
      if (e.key === "todolist") {
        this.$router.push({ name: "toDoList" });
      }
      if (e.key === "user") {
        this.$router.push({ name: "information" });
      }
    },
    showConfirm() {
      this.$confirm({
        title: "Are you sure return home page?",
        content: "Some descriptions",
        onOk: () => {
          this.$router.push({ name: "welcome" });
        },
        onCancel() {},
        class: "test"
      });
    }
  },

  watch: {}
};
</script>
<style scoped>
.linkhome {
  color: white;
  line-height: 60px;
  cursor: pointer;
}
.linkuser {
  float: right;
  color: white;
  line-height: 60px;
  cursor: pointer;
}
/*
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
} */
</style>