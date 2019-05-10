<template>
  <div class="home">
    <!-- <Row></Row> -->
    <input type="text">
    <Button>hello</Button>
  </div>
</template>

<script>
// @ is an alias to /src
// import Row from './../components/Row-M/Row'
// import Button from './../components/Button/Button'
// import './../components/assets/common.css'
export default {
  name: 'home',
  // components: {
  //   Row,
  //   Button
  // },
  mounted(){
    console.log(this.$util.formatNumber(1))
  }
}
</script>
<style lang="less" scoped>
  .test{
    display: flex;
    .left{
      flex-grow: 1
    }
  }
</style>

