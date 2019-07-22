<template>
  <div class="content">
    <!-- <div class="header">
      <h1>Jquery To Do List</h1>
      <h3>
        <i>Simple Todo List with adding and filter by diff status.</i>
      </h3>
      <input class="inputText" type="text" autofocus v-model="newItem" @keyup.enter="addNewItem" />
      <button class="addBtn" @click="addNewItem">Add</button>
    </div>-->
    <header-text @add-item="addNewItem"></header-text>
    <div class="list">
      <ol>
        <!-- <li class="row-item" v-for="(item,index) of filterList" :key="item.index" :class="{completed:item.completed,rowColor:index%2==0}">
                    <div>
                        <input class="checkbox" type="checkbox" v-model="item.completed" >
                        <label class="title">{{ item.title }}</label>
                        <span class="deleteBtn" @click="deleteItem(item,index)" >╳</span>
                    </div>
        </li>-->
        <li-item v-bind:filterList="filterList" @delete-item="deleteItem"></li-item>
      </ol>
    </div>
    <div class="footer">
      <ul>
        <li>
          <input type="radio" name="listType" id="all" @click="changeList('all')" checked />
          <label for="all">All</label>
        </li>
        <li>
          <input type="radio" name="listType" id="active" @click="changeList('active')" />
          <label for="active">Active</label>
        </li>
        <li>
          <input type="radio" name="listType" id="complete" @click="changeList('complete')" />
          <label for="complete">Complete</label>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import headerText from "./header.vue";
import LiItem from "./LiItem.vue";
export default {
  name: "Todomvc",
  data: function() {
    return {
      toDoList: [
        { title: "aaaaaaaaaaaaaa", completed: false },
        { title: "bbbbbbbbb", completed: false },
        { title: "ccccccccccccc", completed: false }
      ],
      newItem: "",
      filterList: [],
      pageNow: ""
    };
  },
  components: {
    LiItem,
    headerText
  },
  created: function() {
    this.filterList = this.toDoList;
  },
  methods: {
    addNewItem: function(newItem) {
      //   if (this.newItem && this.newItem.trim()) {
      //     let item = this.newItem.trim();
      //     this.filterList.push({ title: item, completed: false });
      //     this.toDoList.push({ title: item, completed: false });
      //     this.newItem = "";
      //   }
    
      this.toDoList.push({ title: newItem, completed: false });

    //    this.$http({
    //       method:'get',
    //       url:'http://localhost:8989/parkinglots/parkinglot11',
    //     }).then(function(res){
    //       console.log(res)
    //     }).catch(function(err){
    //       console.log(err)
    //     })
    },
    changeList: function(type) {
      if (type === "all") {
        this.filterList = this.toDoList.map(item => item);
      }
      if (type === "active") {
        this.filterList = this.toDoList.filter(item => !item.completed);
      }
      if (type === "complete") {
        this.filterList = this.toDoList.filter(item => item.completed);
      }
    },
    // deleteItem(itemDel,index){
    //     this.filterList.splice(index,1)
    //     this.toDoList.splice(this.toDoList.findIndex(item => item.title === itemDel.title), 1)
    // }
    deleteItem(itemDel) {
      this.toDoList.splice(
        this.toDoList.findIndex(item => item.title === itemDel.title),
        1
      );
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
.list {
  min-height: 250px;
}
.footer {
  margin-top: 60px;
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
ul,
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
}
ul li input {
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
}
.rowColor {
  background-color: #f4ecec;
}
</style>