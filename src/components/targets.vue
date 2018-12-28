<template>
    <div>
    	<div class="container-fluid text-center">
    		<h2>What to do today?</h2>
    	</div>
    	<div class="row container-fluid">
	        <div class="col-lg-6" id="inputTxt">
	    		<div class="input-group">
	      			<input id="vals" @focus="focusTxt" type="text" class="form-control" placeholder="Do today...">
	      				<span class="input-group-btn">
	        				<button @click="add" class="btn btn-default" type="button">添加</button>
	      				</span>
	    		</div><!-- /input-group -->
	  		</div><!-- /.col-lg-6 -->
	  	</div>
	  	<div id="bbs" class="container-fluid">
	  		<div id="finish">
	  			<p class="complete">finish</p>
	  		</div>
	  		<div id="unfinished">
	  			<p class="complete">unfinished</p>
	  		</div>
	  	</div>
    </div>
</template>
<script>
	export default{
		methods:{
			focusTxt(){
				let inputs=$("#vals").val();
				////////////////////////////////////做到这里
			},
			add(){
				let valsTxt=$("#vals").val();
				let str='<div class="show text-center">';
				str+='<span class="close"><i class="iconfont icon-Tick"></i></span>';
				str+=valsTxt;
				str+="</div>"
				let shows=$(".show").text();
				if(valsTxt!=shows){
					$("#unfinished").append(str);
				}else{
					alert("该目标今天您已经记录啦");
				}
			}
		}
	}
</script>
<style>
*{
	margin:0;
	padding: 0;
}
#inputTxt{
	margin-top: 10px;
}
#bbs{
	margin-top: 50px;
}
.complete{
	color: #CCCCCC;
	font-style: italic;
}
.close i{
	color: #00BC9B;
	font-weight: bold;
}
</style>
