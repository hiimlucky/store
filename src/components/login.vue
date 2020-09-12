<template>
	<div>
		<!-- 导航栏 -->
		<div class='navBarClass'>
			<van-nav-bar title="网易严选">
				<template #left>
					<van-icon name="wap-home-o" size="78" @click='gotoHome' />
				</template>

				<template #right>
					<van-icon name="shopping-cart-o" size="78"  />
				</template>
			</van-nav-bar>
		</div>

		<!-- 中间的图标 -->
		<div class='logoWrap'>
			<img src="//yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" />
		</div>

		<!-- 登录按钮 -->
		<div class='btnWrap'>
			<van-button 
				:icon="login_icon" 
				color="#DD1A21" 
				type="primary" 
				plain 
				style="height:1.3rem;" 
				block
				@click='loginBtnEvent'
				>
				邮箱帐号登录
			</van-button>
		</div>

	</div>
</template>

<script>
import login_icon from '../assets/login_icon.png'

export default{
	name:'login',
	data(){
		return {
			msg:'登录页',
			login_icon : login_icon
		}
	},
	methods:{
		gotoHome(){
			this.$router.push('/');
		},
		loginBtnEvent(){
			console.log('登录页按钮')
		}
	}
}
</script>

<style scoped>
.logoWrap {
    text-align: center;
    padding-top: 2.13333rem;
    padding-bottom: 3.09333rem;
}
.logoWrap img {
    width: 3.57333rem;
    height: 1.2rem;
}

.btnWrap {
    padding: 0 .53333rem;
    margin-bottom: 2.73333rem;
}
</style>