<template>
    <div>
        <header>
        	<span class="QRCode" v-show="QR_Code"><img src="../assets/img/QRCode.png" alt="二维码" /></span>
            <p>{{headerTxt}}</p>
            <span @click="$router.back(-1)" class="returns" v-show="returns" ><img src="../assets/img/returns.png" alt="返回" /></span>
        </header>
    </div>
</template>

<script>
//引入vuex的mapGettrs
import {mapGetters} from "vuex";

	export default{
		
		computed:mapGetters(["headerTxt","QR_Code","returns"]),

		//用生命周期来解决vue单页面应用刷新网页后Vuex的state数据丢失的问题created()
		created () {
    		//在页面加载时读取sessionStorage里的状态信息
		    if (sessionStorage.getItem("store") ) {
		        this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
		    } 
		    //在页面刷新时将vuex里的信息保存到sessionStorage里
		    window.addEventListener("beforeunload",()=>{
		        sessionStorage.setItem("store",JSON.stringify(this.$store.state))
		    })
		},
		
		watch:{//监测路由
			$route(to){
				if(to.path=="/target"){//to.path进入哪个路由执行哪个方法
					this.$store.dispatch("upTarget");
				}else if(to.path=="/home"){
					this.$store.dispatch("upHome");
				}else if(to.path=="/memo"){
					this.$store.dispatch("upMemo");
				}else if(to.path=="/my"){
					this.$store.dispatch("upMy");
				}else if(to.path=="/news_list"){
					this.$store.dispatch("upNews");
				}else if(to.path=="/weekNow"){
					this.$store.dispatch("upWeek");
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