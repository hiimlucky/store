<template>
    <div class='footerDiv'>
	<!-- footer条 -->
      <van-tabbar 
        v-model="footer_obj"
        active-color="#f00"
        @change="onFooterBtnChange">

        <van-tabbar-item to='/'>
          <template #icon="props">
            <div :class="props.active ? icon.x : icon.x1"></div>
          </template>
          <span>首页</span>
        </van-tabbar-item>

        <van-tabbar-item to='cateList'>
          <template #icon="props">
            <div :class="props.active ? icon.a : icon.a1"></div>
          </template>
          <span>分类</span>
        </van-tabbar-item>

        <van-tabbar-item>
          <template #icon="props">
            <div :class="props.active ? icon.b : icon.b1"></div>
          </template>
          <span>值得买</span>
        </van-tabbar-item>

        <van-tabbar-item>
          <template #icon="props">
            <div :class="props.active ? icon.c : icon.c1"></div>
          </template>
          <span>购物车</span>
        </van-tabbar-item>

        <van-tabbar-item to='login'>
          <template #icon="props">
            <div :class="props.active ? icon.d : icon.d1"></div>
          </template>
          <span>个人</span>
        </van-tabbar-item>

      </van-tabbar>
    </div>
</template>

<script>
export default{
	name:'cateList',
	data(){
		return {
			msg:'footer组件',
      footer_obj:0,
			icon:{
		        x:'footerIcon footerIcon_1_red',
		        x1:'footerIcon footerIcon_1',

		        a:'footerIcon footerIcon_2_red',
		        a1:'footerIcon footerIcon_2',

		        b:'footerIcon footerIcon_3_red',
		        b1:'footerIcon footerIcon_3',

		        c:'footerIcon footerIcon_4_red',
		        c1:'footerIcon footerIcon_4',

		        d:'footerIcon footerIcon_5_red',
		        d1:'footerIcon footerIcon_5',
		      }
		}
	},
  mounted(){
    let _n = localStorage.getItem('save_inx');
    // console.log( typeof _n )
    this.footer_obj = Number(_n);
  },
	methods:{
		// footer按钮切换
		onFooterBtnChange( _inx ){
		  // console.log( typeof _inx )
      localStorage.setItem( 'save_inx', _inx );
		}
	}
}
</script>

<style scoped>

/*自定义footer按钮图标*/
.footerIcon{
  background-repeat: no-repeat;
  background-size: .5333rem;
  width: .53rem;
  height: .53rem;
  margin:0 auto .09333rem auto;
}
.footerIcon_1{
  background-image: url('../assets/footer_icon.png');
  background-position: 0 -250px;
}
.footerIcon_1_red{
  background-image: url('../assets/footer_icon.png');
  background-position: 0 -199px;
}
/**/
.footerIcon_2{
  background-image: url('../assets/footer_icon.png');
  background-position: 0 -148px;
}
.footerIcon_2_red{
  background-image: url('../assets/footer_icon.png');
  background-position: 0 -98px;
}
/**/
.footerIcon_3{
  background-image: url('../assets/footer_icon.png');
  background-position: 0px -352px;
}
.footerIcon_3_red{
  background-image: url('../assets/footer_icon.png');
  background-position: 0px -300px;
}
/**/
.footerIcon_4{
  background-image: url('../assets/footer_icon.png');
  background-position: 0 -49px;
}
.footerIcon_4_red{
  background-image: url('../assets/footer_icon.png');
  background-position: 0 0
}
/**/
.footerIcon_5{
  background-image: url('../assets/footer_icon.png');
  background-position: 0 -451px;
}
.footerIcon_5_red{
  background-image: url('../assets/footer_icon.png');
  background-position: 0 -401px;
}
</style>