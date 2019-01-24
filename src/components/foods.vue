	<template>
		<div class="lotter_box container">
			<div class="line_item text-center col-xs-4" :class="index == 1 ? 'active' : 'white_item'">
				   <div>
						    <img class="img-responsive center-block" src="../../static/img/food1.png" >
								<span ref="content">兰州拉面</span>
					 </div>
			</div>
			<div class="line_item text-center col-xs-4" :class="index == 2 ? 'active' : 'white_item'">
				   <div>
						    <img class="img-responsive center-block" src="../../static/img/food2.png" >
								<span ref="content">M记</span>
					 </div>
			</div>
			<div class="line_item text-center col-xs-4" :class="index == 3 ? 'active' : 'white_item'">
				   <div>
						    <img class="img-responsive center-block" src="../../static/img/food3.png" >
								<span ref="content">KFC</span>
					 </div>
			</div>
			<div class="line_item text-center col-xs-4" :class="index == 0 ? 'active' : 'white_item'">
				   <div>
						    <img class="img-responsive center-block" src="../../static/img/food4.png" >
								<span ref="content">必胜客</span>
					 </div>
			</div>
			<div class="line_item text-center col-xs-4" @click="goLottery()">
				   <div>
						    <img class="img-responsive center-block" src="../../static/img/begin.png" >
								<span v-if="speed==180">{{start}}</span>
								<span v-if="speed!=180">纠结中<span class="dotting"></span></span>
					 </div>
			</div>
			<div class="line_item text-center col-xs-4" :class="index == 4 ? 'active' : 'white_item'">
				   <div>
						    <img class="img-responsive center-block" src="../../static/img/food5.png" >
								<span ref="content">真功夫</span>
					 </div>
			</div>
			<div class="line_item text-center col-xs-4" :class="index == 7 ? 'active' : 'white_item'">
				   <div>
						    <img class="img-responsive center-block" src="../../static/img/food6.png" >
								<span ref="content">尊宝比萨</span>
					 </div>
			</div>
			<div class="line_item text-center col-xs-4" :class="index == 6 ? 'active' : 'white_item'">
				   <div>
						    <img class="img-responsive center-block" src="../../static/img/food7.png" >
								<span ref="content">星巴克</span>
					 </div>
			</div>
			<div class="line_item text-center col-xs-4" :class="index == 5 ? 'active' : 'white_item'">
				   <div>
						    <img class="img-responsive center-block" src="../../static/img/food8.png" >
								<span ref="content">屎</span>
					 </div>
			</div>
	</div>
</template>
<script>
export default {
  data(){
		return {
			start: "开始",
			
			arr:["必胜客","兰州拉面","M记","KFC","真功夫","屎","星巴克","尊宝比萨"],
			
　　		index: 3,    // 当前转动到哪个位置，起点位置

      count: 8,    // 总共有多少个位置

      timer: 0,    // 每次转动定时器

      speed: 180,   // 初始转动速度 (注意:下方清除定时器也要初始化速度,不然后面的速度会越来越快)

      times: 0,    // 转动次数

      cycle: 50,   // 转动基本次数：即至少需要转动多少次再进入抽奖环节

      prize: -1   // 中奖位置
		}
	},

	methods:{ 

		goLottery(){
　	 this.startRoll();

	},
// 开始转动
    startRoll () {
      this.times += 1  // 转动次数

      this.oneRoll()  // 转动过程调用的每一次转动方法，这里是第一次调用初始化

      this.usePrize()
			
			//this.start= "纠结中..."

    },

// 每一次转动

    oneRoll () {

      let index = this.index  // 当前转动到哪个位置

      const count = 8  // 总共有多少个位置

      index += 1

      if (index > count - 1) {

        index = 0

      }

      this.index = index

    },
		usePrize() {

        // 如果当前转动次数达到要求

          if (this.times > this.cycle+10*Math.random()) {

            clearTimeout(this.timer)   // 清除转动定时器，停止转动

            this.times = 0
						this.speed = 180  //初始化速度
					//	*************************************可以获取该标签**********************************************
						//console.log(this.$refs.content[index]);
						console.log(this.arr[this.index]);
						let msg=this.arr[this.index];
						this.$toast({
							message: '不用纠结啦，今天吃'+msg+'吧',
							position: 'bottom',
							iconClass:'iconfont icon-shouye',
							duration: 2000
						})
						

          } else {

            if (this.times < this.cycle) {

              this.speed -= 3   // 加快转动速度
            }

            this.timer = setTimeout(this.startRoll, this.speed)

          }
    }
	}
}
</script>

<style scoped>
    .active{

      background-color: #EBCCCC !important;

    }

    .white_item{

    background-color: #FFFFFF;

    }
		
		.lotter_box{
			margin-top: 50px;
		}
		
		.lotter_box div{
			padding: 3px 0;
		}
		
		.dotting { display: inline-block; width: 10px; min-height: 2px;
            padding-right: 2px;
            border-left: 2px solid currentColor; border-right: 2px solid currentColor;
            background-color: currentColor; background-clip: content-box;
            box-sizing: border-box;
            -webkit-animation: dot 1.5s infinite step-start both;
            animation: dot 1.5s infinite step-start both;
            *zoom: expression(this.innerHTML = '...');  /*IE7 */
    }
    .dotting:before { content: '...'; } /* IE8 */
    .dotting::before { content: ''; }
    :root .dotting { margin-left: 2px; padding-left: 2px; } /* IE9+ */

        @-o-keyframes dot {
            25% { border-color: transparent; background-color: transparent; }
            50% { border-right-color: transparent; background-color: transparent; }
            75% { border-right-color: transparent; }
        }
        @-ms-keyframes dot {
            25% { border-color: transparent; background-color: transparent; }
            50% { border-right-color: transparent; background-color: transparent; }
            75% { border-right-color: transparent; }
        }
        @-moz-keyframes dot {
            25% { border-color: transparent; background-color: transparent; }
            50% { border-right-color: transparent; background-color: transparent; }
            75% { border-right-color: transparent; }
        }
        @-webkit-keyframes dot {
            25% { border-color: transparent; background-color: transparent; }
            50% { border-right-color: transparent; background-color: transparent; }
            75% { border-right-color: transparent; }
        }
        @keyframes dot {
            25% { border-color: transparent; background-color: transparent; }
            50% { border-right-color: transparent; background-color: transparent; }
            75% { border-right-color: transparent; }
        }
    
</style>
