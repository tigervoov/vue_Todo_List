
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    toDoList: [{ id: "231113", title: "aaaaaaaaaaaaaa", completed: false },
    { id: "261123", title: "bbbbbbbbb", completed: false },
    { id: "211231", title: "ccccccccccccc", completed: false }],
    filterList:[],
    newItem:{
      id:'',
      title:'',
      completed:'',
    },
    nowPage:'all',
  },
  getters: {
    getNewItem: state => {
      return state.newItem
    },
    getToDolist: state => {
      state.filterList=state.toDoList.map(item=>item)
      if(state.nowPage==='all'){
        return state.filterList
      }if(state.nowPage==='active'){  
        return state.toDoList.filter(item=>!item.completed)
      }if(state.nowPage==='completed'){
        return state.toDoList.filter(item=>item.completed)
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
      }
    },
    deleteItem(state, delItem) {
      state.toDoList.splice(state.toDoList.findIndex(item => item.id == delItem.id), 1)
    },
    changeNowPage(state,nowPage){
      state.nowPage=nowPage
    }
  }
})

export default store