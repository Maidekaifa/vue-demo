import homeview from '../components/home.vue';
import targetview from '../components/targets.vue';
import grilsview from '../components/grils.vue';
import myview from '../components/my.vue';
import newsListview from '../components/news_list.vue';
import weekNow from '../components/weekNow.vue';
import newsDetail from '../components/news_detail.vue';
import foodview from '../components/foods.vue';
import sportview from '../components/sports.vue';


export default[
	{//重定向，放在最上面的话优先重定向
    	path:"*",
    	redirect:"/home"
   	},
    {
    	name:"home",
        path:"/home",
        component:homeview
    },
    {
    	name:"target",
        path:"/target",
        component:targetview
    },
    {
    	name:"grils",
        path:"/grils",
        component:grilsview
    },
    {
    	name:"my",
        path:"/my",
        component:myview
    },
    {
    	name:"news_list",
    	path:"/news_list",
    	component:newsListview
    },
    {
    	name:"weekNow",
    	path:"/weekNow",
    	component:weekNow
    },
    {
    	name:"news_detail",
    	path:"/news_detail",
    	component:newsDetail
    },
    {
    	name:"foods",
    	path:"/foods",
    	component:foodview
    },
	{
		name:"sports",
		path:"/sports",
		component:sportview
	}
]