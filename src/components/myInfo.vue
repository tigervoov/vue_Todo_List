<template>
  <div class="content">
    <img src="../static/img/th.jpg">
    <h2>{{ $route.params.name }}</h2>
    <h2>电话：110</h2>
  </div>
</template>

<script>

  export default {
    name:'',
    props:[''],
    data () {
      return {

      };
    },

    components: {},

    computed: {},

    created() {},

    beforeMount() {},

    mounted() {},

    methods: {},

    watch: {}

  }

</script>
<style scoped>

    .content{
        width: 200px;
        margin: 50px auto;
    }
    img{
            width: 100px;
        height: 100px;
        border-radius: 50px;
        border: 1px solid;
    }
</style>