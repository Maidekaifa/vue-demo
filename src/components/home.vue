<template>
    <div style="background: #CCCCCC;">
    	<!--banner图部分组件-->
    	<Swiperview></Swiperview>
    	
        <div class="container-fluid" style="background: #FFFFFF;margin-top: 5px;">
        	<div class="col-xs-4 text-center" id="punch" @click="run">
        		<a>
        			<i>{{datenow}}</i>
        			<p>打卡</p>
        		</a>
        	</div>
        	<div class="col-xs-4 text-center target">
        		<i>5</i>
        		<p>今日目标/个</p>
        	</div>
        	<div class="col-xs-4 text-center target">
        		<i>2</i>
        		<p>今日完成/个</p>
        	</div>
        </div>
        <!--主体部分-->
        <div id="main_part" class="container text-center center-block img-responsive">
        	<my-div class="col-xs-4" v-for="(grid,index) in grids" :key="index">
        		<my-a>
        			<router-link :to="grid.router">
	        			<i :class="grid.className"></i>
	        			<p>{{grid.title}}</p>
	        		</router-link>
        		</my-a>
        	</my-div>
        </div>
    </div>
</template>
<script>
import Swiperview from './swiper.vue'
export default{
	data(){
		return {
			datenow:'',
			grids:[
					{className:'iconfont icon-riqi',title:'dateplan',router:{name:"target"}},
					{className:'iconfont icon-bianjibijishishouxie',title:'Watch the news',router:{name:"news_list"}},
					{className:'iconfont icon-beiwanglu1',title:'Pictures relax',router:{name:"grils"}},
					{className:'iconfont icon-chifan2600',title:'What to eat today?',router:{name:"foods"}},
					{className:'iconfont icon-fangjiashenqingicon-',title:'When is the vacation?',router:{name:"weekNow"}},
					{className:'iconfont icon-yundong',title:'What sports do you do today?',router:{name:"sports"}}
			]
		}
	},
	components:{
		//组件挂载
    	Swiperview
   	},
    mounted(){
        this.datenow=this.dates();
    },
    methods:{
    	dates(){
    		let dates=new Date;
    		let year=dates.getFullYear();//年
    		let month=dates.getMonth()+1;//月
    		month = month > 9 ? month : ('0' + month);
    		let day=dates.getDate();//日
    		day = day > 9 ? day : ('0' + day);
    		
    		//又不知不觉的用起了JQ，手欠！！！$("#punch a i").html(year+'年'+month+'月'+day+'日');
    		let datesNow=year+"-"+month+"-"+day;
    		return datesNow;
    	},
    	run(){
			this.$toast({
				message: '打卡成功',
  				position: 'middle',
  				iconClass:'iconfont icon-shouye',
  				duration: 2000
			})
    	}
    }
    
    
}
</script>
<style scoped>
*{
	margin: 0;
	padding: 0;
}
#punch{
	background: #00bc9b;
	color: #FFFFFF;
	padding: 10px;
	border-top-right-radius: 20px;
	border-bottom-right-radius: 20px;
}
#punch a{
	color: #FFFFFF;
	text-decoration: none;
}
.target{
	padding: 10px;
}
.target p{
	color: #999999;
}
#main_part{
	margin-top: 5px;
	padding-top: 15px;
	background: #FFFFFF;
	width: 100%;
}
#main_part i{
	font-size: 42px;
}
</style>


