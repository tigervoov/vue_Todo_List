<template>
  <div class="header">
    <h1>Jquery To Do List</h1>
    <h3>
      <i>Simple Todo List with adding and filter by diff status.</i>
    </h3>
    <input
      class="inputText"
      type="text"
      autofocus
      v-model="newItem.title"
      @keyup.enter="addItem(newItem)"
    />
    <button class="addBtn" @click="addItem(newItem)">Add</button>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  name: "headerText",
  props: [""],
  data() {
    return {};
  },

  components: {},

  computed: {
    ...mapGetters({
      newItem: "getNewItem"
    })
  },

  created() {},

  beforeMount() {},

  mounted() {},

  methods: {
    addItem(newItem) {
      if (newItem && newItem.title.trim()) {
        let addNewItem = {
          id: Math.floor(Math.random() * 1000000),
          title: "",
          completed: false
        };
        addNewItem.title = newItem.title.trim();
        this.$store.dispatch("addItemToBackend", addNewItem);
      }
    }
    // addNewItem: function() {
    //   if (this.newItem && this.newItem.trim()) {
    //     let item = this.newItem.trim();
    //     this.$emit('add-item',item)
    //     this.newItem = "";
    //   }
    // }
  },

  watch: {}
};
</script>
<style scoped>
.content {
  position: relative;
  margin: 0 auto;
  width: 500px;
  text-align: left;
}
.inputText {
  box-sizing: border-box;
  height: 36px;
  width: 360px;
  font-size: 16px;
}
.addBtn {
  margin-left: 40px;
  height: 40px;
  width: 80px;
  border: none;
  color: #ffffff;
  border-radius: 6px;
  background-color: #fc999a;
  cursor: pointer;
}
</style>