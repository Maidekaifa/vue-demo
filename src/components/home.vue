<template>
    <div>
         <mt-button @click="handleClick">按钮</mt-button>
    </div>
</template>
<style>
@import url("//unpkg.com/mint-ui/lib/style.css");
</style>
<script>
import {  Toast } from 'mint-ui';
export default {
    methods:{
        handleClick(){
            alert(1);
        }
    }
    
}
</script>


