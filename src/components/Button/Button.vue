<template>
    <div class="my-btn">
        <slot></slot>
    </div>
</template>
<script>
export default {
    props:{

    }
}
</script>

<style lang="less" scoped>
.my-btn{
    display: inline-block;
    position: relative;
    height: 35px;
    line-height: 35px;
    font-size: 16px;
    border-radius: 2px;
    text-align: center;
    box-sizing: border-box;
    color: #fff;
    background-color: #07c160;
    border: 1px solid #07c160;
        padding: 0 15px;
    font-size: 14px;
}
</style>

