<template>
  <div class="content">
    <!-- <input class="input" type="text" v-model="linkValue" @keyup.enter="toLinkTarget" /> -->
    <div class="input-group">
      <a-row :gutter="20">
      <a-col :span="6" :offset="2">
        <a-input
          id="input1"
          placeholder="User Name"
          size="large"
          v-model="linkValue"
          ref="linkValueInput"
        >
          <a-icon slot="prefix" type="user" />
          <a-icon v-if="linkValue" slot="suffix" type="close-circle" @click="emitEmpty" />
        </a-input>
      </a-col>
      <a-col :span="2">
        <a-button type="primary" @click="toLinkTarget" size="large">登入</a-button>
      </a-col>
    </a-row>
    </div>
    
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
      
    },
    emitEmpty() {
      this.$refs.linkValueInput.focus();
      this.linkValue = "";
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
  background-size: cover;
}
.input-group {
  padding-top: 150px;
}
/* /deep/
.content >>> .ant-input {
  width: 480px;
} */

</style>