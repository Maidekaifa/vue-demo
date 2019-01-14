<template>
	<div>
		
		
		<navbar class="text-center" title="新闻详情" />
		<div class="container" style="margin-top: 20px;">
			<p>点击数:{{newsDetail.click}}</p>
			<p>发表时间:{{newsDetail.add_time}}</p>
		</div>
		<hr />
		<div class="container">
			<p>{{newsDetail.text}}</p>
		</div>
	
		
	</div>
</template>

<script>
	export default{
		name:"news_detail",
		data(){
			return {
				newsDetail:{}//新闻详情
			}
		},
		created(){
			//获取路由查询字符串参数ID
			let id=this.$route.query.id;
			
			this.$axios.get('../../static/newDetail.json'+"?id="+id)
			.then(res=>{
				this.newsDetail=res.data.message[id-1];//因为下标从0开始
				}).catch(err=>{
				console.log("新闻详情页错误",err);
			})
		}
	}
</script>

<style>
</style>