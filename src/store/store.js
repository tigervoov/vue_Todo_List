
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    // toDoList: [{ id: "231113", title: "aaaaaaaaaaaaaa", completed: false },
    // { id: "261123", title: "bbbbbbbbb", completed: false },
    // { id: "211231", title: "ccccccccccccc", completed: false }],
    toDoList: [],
    filterList: [],
    newItem: {
      id: '',
      title: '',
      completed: '',
    },
    nowPage: 'all',
  },
  getters: {
    getNewItem: state => {
      return state.newItem
    },
    getToDolist: state => {
      state.filterList = state.toDoList.map(item => item)
      if (state.nowPage === 'all') {
        return state.filterList
      } if (state.nowPage === 'active') {
        return state.toDoList.filter(item => !item.completed)
      } if (state.nowPage === 'completed') {
        return state.toDoList.filter(item => item.completed)
      }
    },

  },
  mutations: {
    addItem(state, newItem) {
      if (newItem && newItem.title.trim()) {
        let addNewItem = {
          id: Math.floor(Math.random() * 1000000),
          title: '',
          completed: false
        }
        addNewItem.title = newItem.title.trim();
        state.toDoList.push(addNewItem)
        axios({
          method: "post",
          url: "http://localhost:9999/items/",
          data:JSON.stringify(addNewItem),
        })
          .then((res) => {
            console.log(res)
          })
          .catch(function (err) {
            console.log(err);
          });
      }
    },
    deleteItem(state, delItem) {
      state.toDoList.splice(state.toDoList.findIndex(item => item.id == delItem.id), 1)
        axios({
        method: "delete",
        url: "http://localhost:9999/items/"+delItem.id,

      })
        .then((res) => {
          console.log(res)
        })
        .catch(function (err) {
          console.log(err);
        });
    },
    changeNowPage(state, nowPage) {
      state.nowPage = nowPage
    },
    initData(state, data) {
      state.toDoList = data
      console.log(data)
    }
  }
})

export default store