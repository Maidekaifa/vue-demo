<template>
    <div>
        <header>
	        	<div class="headers"><img src="../assets/img/touxiang.jpg" alt="头像" /></div>
	        	<p>用户名:&nbsp;&nbsp;vue-demo&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
	        	<p>性别:&nbsp;&nbsp;男</p>
        </header>
        <section>
        	<div class="container text-center midbody">
        		<div @click="xgshow=!xgshow" class="col-xs-4 dv1">性格</div>
        		<div @click="ydshow=!ydshow" class="col-xs-4 dv2">优点</div>
        		<div @click="qdshow=!qdshow" class="col-xs-4 dv3">缺点</div>
        	</div>
        	<!--
            	作者：offline
            	时间：2019-01-07
            	描述：显示隐藏部分用animation增加过渡效果
            -->
            <transition enter-active-class="animated zoomInRight" leave-active-class="animated zoomOutLeft">
	        	<div class="container showMe" v-show="xgshow">		
	        		<img class="center-block img-responsive animated" src="../assets/img/xingge.jpg" alt="xingge" />
	        	</div>
	        </transition>	
	        
	        <transition enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp">
	        	<div class="container showMe" v-show="ydshow">		
	        		<img class="center-block img-responsive animated" src="../assets/img/youdian.jpg" alt="xingge" />
	        	</div>
	        </transition>
	        
	        <transition enter-active-class="animated rollIn" leave-active-class="animated hinge">
	        	<div class="container showMe" v-show="qdshow">		
	        		<img class="center-block img-responsive animated" src="../assets/img/quedian.jpg" alt="xingge" />
	        	</div>
	        </transition>
	        
	        
        </section>
    </div>
</template>
<script>
	//引入animate.css动画库
	import '../assets/css/animate.css'
	export default{
		name:'mymessage',
		data(){
			return {
				xgshow:true,
				ydshow:false,
				qdshow:false
			}
		},
		
	}
</script>
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
		font-size: 14px;
		font-weight: bold;
	}
	.midbody{
		margin-top: 20px;
		padding: 10px;
	}
	.dv1{
		background: #5BC0DE;
		padding: 10px;
		border-radius: 10px;
	}
	.dv2{
		background: #DF5000;
		padding: 10px;
		border-radius: 10px;
	}
	.dv3{
		background: #FFFF00;
		padding: 10px;
		border-radius: 10px;
	}
</style>
