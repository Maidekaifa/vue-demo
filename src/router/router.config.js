import homeview from '../components/home.vue';
import targetview from '../components/targets.vue';
import memoview from '../components/memo.vue';
import myview from '../components/my.vue';

export default[
    {
        path:"/home",
        component:homeview
    },
    {
        path:"/target",
        component:targetview
    },
    {
        path:"/memo",
        component:memoview
    },
    {
        path:"/my",
        component:myview
    },
    {
    	path:"*",
    	redirect:"/home"
    }
]