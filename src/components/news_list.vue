<template>
	<div>
		<ul>
			<li v-for="news in newsList" :key="news.id">
				<a href="#">
					<img class="newsImg" :src="news.imgUrl" />
					<div class="Txt">
						<span>{{news.title}}</span>
						<div class="news_desc">
							<p>点击数:{{news.click}}</p>
							<p>发表时间:{{news.add_time | covertTime('YYYY-MM-DD')}}</p>
						</div>
					</div>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				newsList:''//新闻列表
			}
		},
		//生命周期created时，适合操作数据
		created(){
			this.$axios.get('../../static/newList.json')
			.then(res=>{
				this.newsList=res.data.message;
			}).catch(err=>console.log("新闻列表异常",
			err));
		}
	}
</script>

<style scoped>
	.newsImg{
		width: 100px;
		height: 100px;
		margin: 10px;
		float:left;
	}
	a{
		text-decoration: none;
		color: #000000;
	}
	ul{
		list-style: none;
		padding-bottom: 40px;
	}
	ul li{
		position: relative;
		width: 100%;
		height: 130px;
		background: #EBCCCC;
	}
	.Txt{
		padding-top: 20px;
	}
	.Txt span{
		line-height: 20px;
		font-size: 14px;
	}
	.Txt div{
		margin-top: 8px;
		padding: 5px;
	}
	.Txt div p{
		font-size: 12px;
		line-height: 12px;
		font-family:"arial narrow";
	}
</style>