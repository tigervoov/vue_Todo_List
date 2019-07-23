<template>
  <div class="content">
      <input class="input" type="text" v-model="linkValue" @keyup.enter="toLinkTarget" />
      <button class="btn" @click="toLinkTarget">登入</button>
  </div>
</template>

<script>
export default {
  name: "welcome",
  props: [""],
  data() {
    return {
      linkValue: ""
    };
  },

  components: {},

  computed: {},

  created() {},

  beforeMount() {},

  mounted() {},

  methods: {
    toLinkTarget() {
      this.$router.push({ name: "home", params: { name: this.linkValue } });
    }
  },

  watch: {}
};
</script>
<style scoped>
.content {
  width: 100%;
  height: 1071px;
  opacity: 1;
  background-image: url(https://desk-fd.zol-img.com.cn/t_s1680x1050c5/g2/M00/00/00/ChMlWV0v2jaIdoLpAD_AuoA_pCEAAL5YQKz48sAP8DS990.jpg);
  background-repeat: no-repeat;
  background-size: cover
}
.input {
  font-size: 30px;
  margin-top: 150px;
  margin-left: 120px;
  width: 480px;
  height: 50px;
  border-radius: 10px;
  border: none;
}
.btn {
  font-size: 30px;
  height: 50px;
  width: 80px;
  margin-left: 30px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
}
</style>