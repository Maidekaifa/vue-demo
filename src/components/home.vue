<template>
    <div>
    	<!--banner图部分-->
        <div class="swiper-container">
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
        <!--主体部分-->
        <div id="main_part" class="container-fluid">
        	<div class="col-xs-4">
        		<a href="#">
        			<i><img src="" alt="date" /></i>
        			<p>dateplan</p>
        		</a>
        	</div>
        	
        	<div class="col-xs-4">
        		<a href="#">
        			<i><img src="" alt="date" /></i>
        			<p>dateplan</p>
        		</a>
        	</div>
        	
        	<div class="col-xs-4">
        		<a href="#">
        			<i><img src="" alt="date" /></i>
        			<p>dateplan</p>
        		</a>
        	</div>
        	
        	<div class="col-xs-4">
        		<a href="#">
        			<i><img src="" alt="date" /></i>
        			<p>dateplan</p>
        		</a>
        	</div>
        	
        	<div class="col-xs-4">
        		<a href="#">
        			<i><img src="" alt="date" /></i>
        			<p>dateplan</p>
        		</a>
        	</div>
        	
        	<div class="col-xs-4">
        		<a href="#">
        			<i><img src="" alt="date" /></i>
        			<p>dateplan</p>
        		</a>
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
    mounted(){
        this.swiper= new Swiper('.swiper-container',{
        	autoplay:3000,
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
<style scoped>
@import url("../assets/css/swiper.css");
.swiper-container{
    width: 100%;
}
.swiper-slide{
    width: 100%;
}
#main_part{
	margin-top: 50px;
}
</style>


