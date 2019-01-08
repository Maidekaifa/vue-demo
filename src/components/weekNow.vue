<template>
	<div class="when">
     <div class="headerPart container">
        <h1 class="myTitle text-center">今天是{{weekNum}}</h1>
        <p class="info text-center" v-if='weekNum=="星期六"'>今天是星期六放假啦啦啦啦</p>
        <p class="info text-center" v-else-if='weekNum=="星期日"'>今天是星期日还是放假啊，明天星期一要加油哦！</p>
        <p class="info text-center" v-else='weekNum!=="星期六"||"星期日"'>美好的一天又开始了，加油！</p>
      </div>
  </div>
</template>

<script>
	export default{
		data(){
			return {
				weekNum:''
			}
		},
		methods:{
			getweek(){
				let week = [];
				week[0] = '星期日'
				week[1] = '星期一'
		        week[2] = '星期二'
		        week[3] = '星期三'
		        week[4] = '星期四'
		        week[5] = '星期五'
		        week[6] = '星期六'
		        let d = new Date();
		        let weekNow = d.getDay();
		        return week[weekNow];
			}
		},
		mounted(){
			this.weekNum=this.getweek();
		}
	}
</script>

<style scoped>
	.headerPart{
		padding: 4rem 0;
        color: red;
        padding-bottom: 50px;
	}
	@keyframes widths{
		0%{
			font-size: 16px;
			color: #FFFFFF;
		}
		25%{
			font-size: 24px;
			color: #007AFF;
		}
		50%{
			font-size: 16px;
			color: #FFFFFF;
		}
		75%{
			font-size: 24px;
			color: #007AFF;
		}
		100%{
			font-size: 16px;
			color: #FFFFFF;
		}
	}
	.info{
		animation:widths 6s ease 0s infinite;
	}
</style>