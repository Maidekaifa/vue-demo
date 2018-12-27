<template>
    <div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="../assets/img/banner1.jpg" class="img-responsive center-block" />
                </div>
                <div class="swiper-slide">
                	<img src="../assets/img/banner1.jpg" class="img-responsive center-block" />
                </div>
                <div class="swiper-slide">
                	<img src="../assets/img/banner1.jpg" class="img-responsive center-block" />
                </div>
                <div class="swiper-slide">
                	<img src="../assets/img/banner1.jpg" class="img-responsive center-block" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import swiper from 'swiper';
import '../assets/js/jquery-1.11.3.min';
export default{
    data(){
        return{
            swiper:null
        }
    },
    mounted(){
        this.swiper= new Swiper('.swiper-container',{
        	loop:true,
            effect : 'cube',
  			cubeEffect: {
			    slideShadows: true,
			    shadow: true,
			    shadowOffset: 100,
			    shadowScale: 0.6
  			},
        })
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


