<template>
    <div>
        <li class="row-item" v-for="(item,index) of filterList" :key="item.index" :class="{completed:item.completed,rowColor:index%2==0}">
            <div>
                <input class="checkbox" type="checkbox" v-model="item.completed">
                <label class="title">{{ item.title }}</label>
                <span class="deleteBtn" @click="deleteItem(item,index)" >╳</span>
            </div>
        </li>
    </div>
    
</template>

<script>
export default {
    name:'LiItem',
    props:['filterList'],
    methods:{
        deleteItem(itemDel,index){
                this.filterList.splice(index,1)
                //this.toDoList.splice(this.toDoList.findIndex(item => item.title === itemDel.title), 1)
                this.$emit('delete-item',itemDel)
        }
    }
    
}
</script>


<style scoped>
    .row-item{
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
    }
    ul li{
        flex:1;
        height:30px;
    }
    ul li input{
        display: none;
    }
    ul li label{
        display: block;
        text-align: center;
        line-height: 30px;
        cursor: pointer;
        color: #fc999a;
    }
    ul li input:checked+label{
        border: 1px solid #fc999a;
        background-color: #f8f8f8;
        border-radius: 6px;
    }
    .completed label{
        color: #999999;
        text-decoration:line-through;
    }
    .rowColor{
        background-color:#f4ecec ;
    }


</style>

