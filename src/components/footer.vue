<template>
    <div>
        <div>
            <ul>
                <router-link active-class="active" tag="li" to="/home">
                    <a href="#">
                        <i></i>
                        <p>首页</p>
                    </a>
                </router-link>
                <router-link active-class="active" tag="li" to="/target">
                    <a href="#">
                        <i></i>
                        <p>目标</p>
                    </a>
                </router-link>
                <router-link active-class="active" tag="li" to="/memo">
                    <a href="#">
                        <i></i>
                        <p>备忘</p>
                    </a>
                </router-link>
                <router-link active-class="active" tag="li" to="/my">
                    <a href="#">
                        <i></i>
                        <p>我的</p>
                    </a>
                </router-link>
                
            </ul>
        </div>
    </div>
</template>
<style scoped>
*{
    margin: 0;
    padding: 0;
}
body{
    position: relative;
}
ul{
    width: 100%;
    height: auto;
}
ul li{
    width: 25%;
    height: auto;
    list-style: none;
    float: left;
    text-align: center;
    font-size: 12px;
    background: #000000;
    color: #FFFFFF;
    padding: 10px 0;
}
a{
	text-decoration: none;
	color: #FFFFFF;
}
div{
    width: 100%;
    height: auto;
    position: fixed;
    position: absolute;
    left: 0;
    bottom: 0;
}
</style>
<script>

</script>

