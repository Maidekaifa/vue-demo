<template>
    <div style="background: #CCCCCC;">
    	<!--banner图部分组件-->
    	<Swiperview></Swiperview>
    	
        <div class="container-fluid" style="background: #FFFFFF;margin-top: 5px;">
        	<div class="col-xs-4 text-center" id="punch">
        		<a>
        			<i></i>
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
        			<i :class="grid.className"></i>
        			<p>{{grid.title}}</p>
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
			grids:[
					{className:'iconfont icon-riqi',title:'dateplan'},
					{className:'iconfont icon-bianjibijishishouxie',title:'notes'},
					{className:'iconfont icon-beiwanglu1',title:'memo'},
					{className:'iconfont icon-chifan2600',title:'What to eat today?'},
					{className:'iconfont icon-fangjiashenqingicon-',title:'When is the vacation?'},
					{className:'iconfont icon-yundong',title:'What sports do you do today?'}
			]
		}
	},
	components:{
		//组件挂载
    	Swiperview
   	},
    mounted(){
        this.dates();
    },
    methods:{
    	dates(){
    		const dates=new Date;
    		const year=dates.getFullYear();//年
    		const month=dates.getMonth()+1;//月
    		const day=dates.getDate();//日
    		$("#punch a i").html(year+'年'+month+'月'+day+'日');
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
</style>


