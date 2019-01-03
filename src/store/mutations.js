//管理事件的
import getters from "./getters.js";
const state={
	headerTxt:"首页"
}
const mutations={
	upTarget(state){
		state.headerTxt="我的目标"
	},
	upHome(){
		state.headerTxt="这是我的首页"
	},
	upMemo(){
		state.headerTxt="我的备忘录"
	},
	upMy(){
		state.headerTxt="我的信息"
	}
}


export default{
	state,
	mutations,
	getters
}
