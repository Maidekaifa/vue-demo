//管理事件的
import getters from "./getters.js";
const state={
	headerTxt:"这是我的首页",
	QR_Code:false,
	returns:false 
		
}
const mutations={
	upTarget(state){
		state.headerTxt="我的目标";
		state.QR_Code=true;
		state.returns=true;
	},
	upHome(state){
		state.headerTxt="这是我的首页";
		state.QR_Code=false;
		state.returns=false;
	},
	upMemo(state){
		state.headerTxt="我的备忘录";
		state.QR_Code=true;
		state.returns=true;
	},
	upMy(state){
		state.headerTxt="我的信息";
		state.QR_Code=true;
		state.returns=true;
	},
	upNews(state){
		state.headerTxt="看看新闻";
		state.QR_Code=true;
		state.returns=true;
	},
	upWeek(state){
		state.headerTxt="今天星期几啦";
		state.QR_Code=true;
		state.returns=true;
	},
	upFoods(state){
		state.headerTxt="今天吃什么，不用纠结。";
		state.QR_Code=true;
		state.returns=true;
	}
}


export default{
	state,
	mutations,
	getters
}
