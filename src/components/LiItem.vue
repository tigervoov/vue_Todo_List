<template>
  <div> 
        <li class="row-item" v-for="(item,index) of filterList" :key="item.id" :class="{completed:item.completed,rowColor:index%2==0}">
            <div>
                <input class="checkbox" type="checkbox" v-model="item.completed" @change="changeStatus(item)">
                <!-- <a-checkbox @change="changeStatus(item)" :checked="true" v-model="item.completed"></a-checkbox> -->
                <label class="title">{{ item.title }}</label>
                <span class="deleteBtn" @click="deleteItem(item)" >╳</span>
            </div>
        </li>
    </div>
 
  <!-- <a-list itemLayout="horizontal" :dataSource="toDoList"> -->
    <!-- <div
      v-if="showLoadingMore"
      slot="loadMore"
      :style="{ textAlign: 'center', marginTop: '12px', height: '32px', lineHeight: '32px' }"
    >
      <a-spin v-if="loadingMore" />
      <a-button v-else @click="onLoadMore">loading more</a-button>
    </div>-->
    <!-- <a-list-item slot="renderItem" slot-scope="item"> -->
      <!-- <input class="checkbox" type="checkbox" v-model="item.completed" @change="changeStatus(item)"> -->
      <!-- <a-checkbox @change="changeStatus" v-model="item.completed"></a-checkbox> -->
      <!-- <a-checkbox-group :options="[item]" v-model="item.completed" @change="changeStatus" /> -->
      <!-- <a slot="actions">edit</a>
      <a slot="actions">more</a> -->
      <!-- <a-list-item-meta>
        <a slot="title" href="#">{{item.title}}</a>
        <a-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      </a-list-item-meta>-->
      <!-- <div>{{ item.title }}</div>
    </a-list-item>
  </a-list> -->
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "LiItem",
  props:['filterList'],
  data() {
    return {
      isEdit: false
    };
  },
   computed: {
    ...mapGetters({
      toDoList: "getToDolist"
    })
  },
  methods: {
    deleteItem(item) {
      this.$store.dispatch("deleteItemToBackend", item);
    },
    changeStatus(item) {
      this.$store.dispatch("updateItemStatus", item);
    }
  }
};
</script>


<style scoped>
.row-item {
  line-height: 40px;
}
.checkbox {
  vertical-align: middle;
}
.title {
  vertical-align: middle;
  padding-left: 10px;
}
.deleteBtn {
  float: right;
  margin-right: 20px;
  vertical-align: middle;
  cursor: pointer;
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

