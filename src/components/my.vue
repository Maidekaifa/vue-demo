<template>
    <div>
        <header>
	        	<div class="headers"><img src="../assets/img/touxiang.jpg" alt="头像" /></div>
	        	<p>用户名:&nbsp;&nbsp;vue-demo&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
	        	<p>性别:&nbsp;&nbsp;男</p>
        </header>
    </div>
</template>
<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	header{
		background: #00bc9b;
		box-shadow: 5px 5px 10px #888888;
	}
	.headers{
		width: 62px;
		height: 66px;
		border: 1px solid #CCCCCC;
		box-shadow: 2px 2px 2px 2px;
		margin:20px 20px;
		display: inline-block;
	}
	header p{
		display: inline-block;
		color: #F9F2F4;
		font-family: "微软雅黑";
		font-size: 16px;
	}
</style>
