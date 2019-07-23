
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
        return state.filterList.filter(item => !item.completed)
      } if (state.nowPage === 'completed') {
        return state.filterList.filter(item => item.completed)
      }
    },

  },
  mutations: {
    addItem(state, newItem) {
      state.toDoList.push(newItem)
    },
    deleteItem(state, delItem) {
      state.toDoList.splice(state.toDoList.findIndex(item => item.id == delItem.id), 1)
    },
    changeNowPage(state, nowPage) {
      state.nowPage = nowPage
    },
    initData(state, data) {
      state.toDoList = data
      console.log(data)
    }
  },
  actions: {
    async getAllItem({ commit }) {
      await axios({
        method: "get",
        url: "http://localhost:9999/items"
      })
      .then((res) => {
        commit('initData', res.data)
      })
      .catch(function (err) {
        console.log(err);
      });
    },
    async addItemToBackend({ commit }, addNewItem) {
      await axios({
        method: "post",
        url: "http://localhost:9999/items/",
        data: JSON.stringify(addNewItem),
        headers: { 'Content-Type': 'application/json;charset=UTF-8' }
      })
      .then((res) => {
        if(!res.data){
           commit('addItem', addNewItem)
        }else{
          if(res.data.code===1){
            alert(res.data.mess)
            console.log(res.data)
          }
        }
        
      })
      .catch(function (err) {
        console.log(err);
      });

    },
    async deleteItemToBackend({ commit }, delItem) {
      await axios({
        method: "delete",
        url: "http://localhost:9999/items/" + delItem.id,
      })
      .then((res) => {
        commit('deleteItem', delItem)
      })
      .catch(function (err) {
        console.log(err);
      });
    },
    async updateItemStatus ({commit},changeItem) {
      console.log(changeItem.id)
      await axios({
        method:'put',
        url:"http://localhost:9999/items/"+changeItem.id,
        data: JSON.stringify(changeItem),
        headers: { 'Content-Type': 'application/json;charset=UTF-8' }
      })
      .then((res)=>{
        console.log('状态改变成功',res)
      })
      .catch((err)=>{
        console.log(err)
      })
    }

  }
})

export default store