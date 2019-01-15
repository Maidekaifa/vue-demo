<template>
	<div>
		<div class="container" id="banner">
			<div class="col-xs-4" @click="run(index)" v-for="(food,index) in foodData" :key='index'>
				<img class="img-responsive center-block" :src="food.srcname" />
				<p class="text-center" v-if="food.txt!=='开始'">{{food.txt}}</p>
				<p class="text-center" v-if="food.txt==='开始'">{{runningtxt}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				
				foodData:[
					{srcname:'../../static/img/food1.png',txt:'面条'},
					{srcname:'../../static/img/food2.png',txt:'面包'},
					{srcname:'../../static/img/food3.png',txt:'米饭'},
					{srcname:'../../static/img/food4.png',txt:'烙饼'},
					{srcname:'../../static/img/begin.png',txt:'开始'},
					{srcname:'../../static/img/food5.png',txt:'水果'},
					{srcname:'../../static/img/food6.png',txt:'雪糕'},
					{srcname:'../../static/img/food7.png',txt:'M记'},
					{srcname:'../../static/img/food8.png',txt:'屎'}
				],
				runningtxt:'开始'
			}
		},
		methods:{
			run(index){
				if(index==4){
					
				}
			}
		}
	}
</script>

<style scoped>
	#banner{
		margin-top: 80px;
	}
	#banner div{
		border:  1px solid #EBCCCC;
		padding-top: 5px;
	}
	#banner div img:hover{
		transform: scale(1.1,1.1);
	}
</style>