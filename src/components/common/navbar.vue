<template>
	<div class="cms-s-header">
		<h1></h1>
		<h2 class="page-title">{{title}}</h2>
	</div>
</template>

<script>
	export default{
		name:'navbar',
		props:['title']//父元素传给子元素，title直接用
	}
</script>

<style scoped>
	.cms-s-header{
		height: 40px;
		background: #EBCCCC;
	}
	.page-title{
		line-height: 40px;
		margin-top: -20px;
	}
</style>