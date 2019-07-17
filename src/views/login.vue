<template>
  <div>
    <h1>登录页面</h1>
    <p>
      <input type="text" placeholder="手机" v-model="phone">
    </p>
    <p>
      <input type="text" placeholder="密码" v-model="pwd">
    </p>
    <div class="but">
      <button @click="butFn">登录</button>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import {mapState,mapActions} from 'vuex'
export default {
  props: {},
  components: {},
  data() {
    return {
      phone:'',
      pwd:''
    };
  },
  computed: {
  ...mapState(['num'])
  },
  methods: {
      butFn(){
        // localStorage.name = this.name
        // localStorage.pwd = this.pwd
        // this.$router.back()
        axios.post('http://localhost:3000/api/login',{phone:this.phone,password:this.pwd}).then((res)=>{
          // console.log(name,pwd)
          if(res.data.code==1){
            localStorage.token = res.data.token
             this.$router.back()
          }
          
        }).catch((err)=>{
          console.log('报错')
        })

    },
  },
  created() {
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
p {
  width: 90%;
  height: 45px;
  margin: 0 auto;
  input {
    width: 100%;
    height: 100%;
    border: none;
    font-size: 16px;
    border-bottom: 1px solid #ccc;
  }
}
.but {
  margin: 0 auto;
  width: 80px;
  height: 30px;
  margin-top: 10px;;
}
button {
  width: 100%;
  height: 100%;
  text-align: center;
}
</style>