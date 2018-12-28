<template>
    <div>
        <div>
            <ul>
                <router-link active-class="active" tag="li" to="/home">
                    <a href="#">
                        <i class="iconfont icon-shouye1"></i>
                        <p class="footerTxt">首页</p>
                    </a>
                </router-link>
                <router-link active-class="active" tag="li" to="/target">
                    <a href="#">
                        <i class="iconfont icon-mubiao"></i>
                        <p class="footerTxt">目标</p>
                    </a>
                </router-link>
                <router-link active-class="active" tag="li" to="/memo">
                    <a href="#">
                        <i class="iconfont icon-beiwanglu"></i>
                        <p class="footerTxt">备忘</p>
                    </a>
                </router-link>
                <router-link active-class="active" tag="li" to="/my">
                    <a href="#">
                        <i class="iconfont icon-shouye"></i>
                        <p class="footerTxt">我的</p>
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
    height: 55px;
    list-style: none;
    float: left;
    text-align: center;
    font-size: 12px;
    padding: 10px 0;
}
a{
	text-decoration: none;
	color: #555555;
}
.footerTxt{
	text-align: center;
	display: block;
}
div{
    width: 100%;
    height: auto;
    position: fixed;
    position: absolute;
    left: 0;
    bottom: 0;
}
ul li a i{
	font-size: 24px;
}
</style>
<script>

</script>

