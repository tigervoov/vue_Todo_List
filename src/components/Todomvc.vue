<template>
  <div class="content">
    <header-text></header-text>
    <div class="list">
      <ol>
        <li-item v-bind:filterList="toDoList"></li-item>
      </ol>
    </div>
    <footer-text></footer-text>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import headerText from "./header.vue";
import LiItem from "./LiItem.vue";
import footerText from "./footer.vue";
export default {
  name: "Todomvc",
  data: function() {
    return {};
  },
  components: {
    LiItem,
    headerText,
    footerText
  },
  computed: {
    ...mapGetters({
      toDoList: "getToDolist"
    })
  },
  created() {
    this.initData();
  },
  methods: {
    ...mapMutations(["addItem", "deleteItem"]),
    async initData() {
      await this.$http({
        method: "get",
        url: "http://localhost:9999/items"
      })
        .then((res)=> {
          this.$store.commit('initData',res.data)
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  }
 
};
</script>

<style scoped>
.content {
  position: relative;
  margin: 0 auto;
  width: 500px;
  text-align: left;
}

.list {
  min-height: 250px;
}

ol {
  list-style: none;
  padding-left: 0px;
}
/* .row-item{
        line-height: 40px;
    }
    .checkbox{
        vertical-align: middle;

    }
    .title{
        vertical-align: middle;
        padding-left: 10px;
    }
    .deleteBtn{
        float: right;
        margin-right: 20px;
        vertical-align: middle;
        cursor: pointer;
    } */
/* ul,
li {
  list-style: none;
}
ul {
  display: flex;
  padding-left: 0px;
}
ul li {
  flex: 1;
  height: 30px;
} */
/* ul li input {
  display: none;
}
ul li label {
  display: block;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
  color: #fc999a;
}
ul li input:checked + label {
  border: 1px solid #fc999a;
  background-color: #f8f8f8;
  border-radius: 6px;
}
.completed label {
  color: #999999;
  text-decoration: line-through;
} */
/* .rowColor {
  background-color: #f4ecec;
} */
</style>