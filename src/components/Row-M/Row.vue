<template>
  <div class="row">
    <div class="my_cell px1-bottom-ddd">
      <div class="my_cell_label">
        <!-- <span>收货人</span> -->
        qwe
      </div>
      <div class="my_cell_value">
          asd
        <!-- <input  type="text" placeholder="输入密码来"> -->
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.row {
  .my_cell {
    position: relative;
    display: flex;
    width: 100%;
    overflow: hidden;
    box-sizing: border-box;
    color: #323233;
    font-size: 26px;
    //line-height: 24px;
    background-color: #fff;
    padding: 20px 30px;
    align-items: center;
  }
  .my_cell_label {
    max-width: 90px;
    flex-grow: 1
  }
  .my_cell_value {
    flex: 1;
    color: #969799;
    overflow: hidden;
    //text-align: right;
    position: relative;
    vertical-align: middle;
    & > input {
      border: 0;
      margin: 0;
      padding: 0;
      width: 100%;
      resize: none;
      display: block;
      color: #323233;
      box-sizing: border-box;
      background-color: transparent;
      //text-align: right;
    }
    & > input:focus {
      outline: none
    }
  }
}
</style>
