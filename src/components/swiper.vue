<template>
	<div>
		<!--banner图部分-->
		
        <div class="swiper-container" style="background: #FFFFFF;">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="../assets/img/banner1.jpg" alt="banner" class="img-responsive center-block" />
                </div>
                <div class="swiper-slide">
                	<img src="../assets/img/banner1.jpg" alt="banner" class="img-responsive center-block" />
                </div>
                <div class="swiper-slide">
                	<img src="../assets/img/banner1.jpg" alt="banner" class="img-responsive center-block" />
                </div>
                <div class="swiper-slide">
                	<img src="../assets/img/banner1.jpg" alt="banner" class="img-responsive center-block" />
                </div> 
            </div>
        </div>
	</div>
</template>

<script>
import swiper from 'swiper';
export default{
	data(){
        return{
            swiper:null
        }
    },
    //生命周期mounted
    mounted(){
    	this.swiper= new Swiper('.swiper-container',{
        	autoplay:3000,
        	loop:true,
        	autoplayDisableOnInteraction:false,//用户滑动图片后禁止停止轮播
            effect : 'cube',
  			cubeEffect: {
			    slideShadows: true,
			    shadow: true,
			    shadowOffset: 100,
			    shadowScale: 0.6
  			},
        });
    }
    
}

</script>

<style>
	@import url("../assets/css/swiper.css");
.swiper-container{
    width: 100%;
}
.swiper-slide{
    width: 100%;
}
</style>