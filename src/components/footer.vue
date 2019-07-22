<template>
  <div class="footer">
    <ul>
      <li>
        <input type="radio" name="listType" id="all" @click="changeNowPage('all')" checked />
        <label for="all">All</label>
      </li>
      <li>
        <input type="radio" name="listType" id="active" @click="changeNowPage('active')" />
        <label for="active">Active</label>
      </li>
      <li>
        <input type="radio" name="listType" id="complete" @click="changeNowPage('completed')" />
        <label for="complete">Complete</label>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapGetters,mapMutations} from 'vuex'
export default {
  name: "footerText",
  data() {
    return {};
  },
  methods: {
    ...mapMutations([
        'changeNowPage'
    ])
  },
};
</script>
<style  scoped>

.footer {
  margin-top: 60px;
}
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
</style>