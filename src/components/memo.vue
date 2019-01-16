<template>
    <div>
        <div class="container">
        	<ul>
				<li v-for="(item,index) in imgs" :key="index">
					<img v-lazy="item" :src="item.url">
				</li>
			</ul>
        </div>
    </div>
</template>
<script>
	export default{
		name:'memo',
		data(){
			return {
				imgs:''
			}
		},
		//生命周期created时，适合操作数据
		created(){
			this.$axios.get('../../static/grils.json')
			.then(res=>{
				this.imgs=res.data.message;
			}).catch(err=>console.log(出现错误,
			err))
		}
	}
</script>
<style scoped>
	ul li img [lazy=loading] {
		width: 40px;
		height: 300px;
		margin: auto;
	}
</style>