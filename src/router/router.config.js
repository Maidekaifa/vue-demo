import homeview from '../components/home.vue';
import targetview from '../components/targets.vue';
import memoview from '../components/memo.vue';
import myview from '../components/my.vue';
import newsListview from '../components/news_list.vue'

export default[
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
    	name:"memo",
        path:"/memo",
        component:memoview
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
    {//重定向，放在最上面的话优先重定向
    	path:"*",
    	redirect:"/home"
    }
]