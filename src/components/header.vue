<template>
    <div>
        <header>
            <p>{{headerTxt}}</p>
        </header>
    </div>
</template>

<script>
import {mapGetters} from "vuex";
	export default{
		
		computed:mapGetters(["headerTxt"]),
		
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
header p{
    color: #FFFFFF;
    font-size: 16px;
    text-align: center;
    padding: 10px;
    background: #000000;
}
</style>