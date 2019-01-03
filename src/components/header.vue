<template>
    <div>
        <header>
        	<span class="QRCode" v-show="QR_Code"><img src="../assets/img/QRCode.png" alt="二维码" /></span>
            <p>{{headerTxt}}</p>
            <span class="returns" v-show="returns" ><img src="../assets/img/returns.png" alt="返回" /></span>
        </header>
    </div>
</template>

<script>
import {mapGetters} from "vuex";
	export default{
		
		computed:mapGetters(["headerTxt","QR_Code","returns"]),
		
		watch:{
			$route(to){
				if(to.path=="/target"){//to.path进入哪个路由执行哪个方法
					this.$store.dispatch("upTarget");
				}else if(to.path=="/home"){
					this.$store.dispatch("upHome");
				}else if(to.path=="/memo"){
					this.$store.dispatch("upMemo");
				}else if(to.path=="/my"){
					this.$store.dispatch("upMy");
				}
			}
		}
	}
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
}
header{
	position: relative;
}
header p{
    color: #FFFFFF;
    font-size: 16px;
    text-align: center;
    padding: 10px;
    background: #000000;
}
.QRCode img,.returns img{
	display: inline-block;
	width: 30px;
	height: 30px;
	position: absolute;
}
.QRCode img{
	left:10px;
	top: 5px;
}
.returns img{
	right: 10px;
	top: 5px;
}
</style>