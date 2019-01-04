<template>
	<a href="#">
		<slot></slot>
	</a>
</template>

<script>
	export default{
		name:'my-a'
	}
</script>

<style scoped>
	a{
		text-decoration: none;
	}
	a i{
		font-size: 36px;
	}
</style>