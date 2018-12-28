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
        <div id="main_part" class="container text-center center-block img-responsive" style="background: #FFFFFF;">
        	<div class="col-xs-4">
        		<a href="#">
        			<i class="iconfont icon-riqi"></i>
        			<p>dateplan</p>
        		</a>
        	</div>
        	
        	<div class="col-xs-4">
        		<a href="#">
        			<i class="iconfont icon-bianjibijishishouxie"></i>
        			<p>notes</p>
        		</a>
        	</div>
        	
        	<div class="col-xs-4">
        		<a href="#">
        			<i class="iconfont icon-beiwanglu1"></i>
        			<p>memo</p>
        		</a>
        	</div>
        	
        	<div class="col-xs-4">
        		<a href="#">
        			<i class="iconfont icon-chifan2600"></i>
        			<p>What to eat today?</p>
        		</a>
        	</div>
        	
        	<div class="col-xs-4">
        		<a href="#">
        			<i class="iconfont icon-fangjiashenqingicon-"></i>
        			<p>When is the vacation?</p>
        		</a>
        	</div>
        	
        	<div class="col-xs-4">
        		<a href="#">
        			<i class="iconfont icon-yundong"></i>
        			<p>What sports do you do today?</p>
        		</a>
        	</div>
        </div>
    </div>
</template>
<script>
import Swiperview from './swiper.vue'
export default{
	components:{
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
}
#main_part div{
	margin-top: 20px;
}
#main_part a{
	text-decoration: none;
}
#main_part a i{
	font-size: 36px;
}
</style>


