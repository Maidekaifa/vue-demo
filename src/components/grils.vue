<template>
    <div>
        <div id="bg" class="container-fluid">
        	<ul>
				<li v-for="(item,index) in imgs" :key="index">
					<img class="img-responsive center-block" v-lazy="item.url">
				</li>
			</ul>
        </div>
        <div style="width:100%;height:58px;"></div>
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
			}).catch(err=>console.log(图片加载出现错误,
			err))
		}
	}
</script>
<style scoped>
	#bg{
		background: #F5F5F5;
	}
	ul li img{
		margin-top: 5px;
		margin-bottom: 5px;
	}
	image[lazy=loading] {
		width: 40px;
		height: 300px;
		margin: auto;
	}
</style>