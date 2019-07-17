<template>
  <div class="home">
    <!-- <h1>首页</h1> -->
    <div class="header">加班/调休</div>
    <div class="top">
      <span
        v-for="(item,index) in list"
        :key="index"
        @click="spanFn(index)"
        :class="{active:index == ind}"
      >
        <i class="iconfont icon-faxiandingdan"></i>
        <span>{{item}}</span>
      </span>
    </div>
    <div class="con">
      <div class="cons">
        <span
          v-for="(item,index) in type"
          :key="index"
          @click="typeFn(index)"
          :class="{addtype:index == indtype}"
        >{{item}}</span>
      </div>
    </div>
    <div class="main">
      <ul
        class="ul"
        v-for="(item,index) in dataJson"
        :key="index"
        @click="detailFn(item.applicationNumber)"
      >
        <li class="li1">
          <span>{{item.applicationNumber}}</span>
          <span>待批准</span>
        </li>
        <li class="li2">
          <span>申请人:</span>
          <span>{{item.nickname}}</span>
          <span>加班类型:</span>
          <span>{{item.describes}}</span>
        </li>
        <li>
          <span>加班日期:</span>
          <span>{{new Date(item.startTime).toLocaleDateString()}}</span>
          <span>加班时数:</span>
          <span>3.0</span>
        </li>
      </ul>
    </div>
    <!-- 下面的button -->
    <mt-popup v-model="popupVisible" position="bottom">
      <div class="mackbottom">
        <router-link tag="span" to="/overtime">加班</router-link>
        <router-link tag="span" to="/suspension">休假</router-link>
      </div>
    </mt-popup>
    <el-button type="primary" icon="el-icon-plus" @click="butFn">发起任务</el-button>
  
  </div>
</template>
<script>
import { Popup } from "mint-ui";
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {
      list: ["待处理", "已发送", "已处理"],
      type: ["加班", "休假"],
      ind: 0,
      indtype: "",
      flag: false,
      popupVisible: false
    };
  },
  computed: {
    ...mapState(["dataJson"])
  },
  methods: {
    spanFn(index) {
      this.ind = index;
      this.$store.dispatch("login", {
        status: this.ind,
        type: this.indtype == 0 ? "overtime" : "vacation",
        create_at: 0,
        pageSize: 50,
        page: 1
      });
    },
    typeFn(index) {
      this.indtype = index;
      console.log(this.indtype);
    },
    butFn() {
      this.popupVisible = !this.popupVisible;
      console.log(this.flag);
    },
    //跳详情
    detailFn(item) {
      this.$router.push({ path: "/detail", query: { item } });
    },
    ...mapActions(["login"])
  },
  created() {
    this.login( {
        status: this.ind,
        type: this.indtype == 0 ? "overtime" : "vacation",
        create_at: 0,
        pageSize: 50,
        page: 1
      });
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.header {
  width: 100%;
  height: 45px;
  background: lavender;
  text-align: center;
  line-height: 45px;
}
.top {
  width: 100%;
  height: 100px;
  background: lavender;
  display: flex;
  span {
    flex: 1;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;

    i {
      flex: 3;
      margin-top: 15px;
      font-size: 20px;
    }
    span {
      flex: 7;
      font-size: 14px;
    }
  }
}
.active {
  color: #306d07;
}
.con {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  .cons {
    width: 120px;
    height: 20px;
    margin: auto;
    background: #eee;
    text-align: center;
    line-height: 20px;
    border-radius: 20px;
    display: flex;
    color: #306d07;
    border: 1px solid #306d07;
    span {
      display: inline-block;
      flex: 1;
      width: 100%;
      height: 100%;
      text-align: center;
      text-align: center;
    }
    span:nth-child(1) {
      border-radius: 20px 0 0 20px;
    }
    span:nth-child(2) {
      border-radius: 0px 20px 20px 0px;
    }
  }
}
.addtype {
  background: #306d07;
  color: #fff;
}
.main {
  flex: 1;
  overflow: auto;
}
.ul {
  width: 100%;
  height: 100px;
  background: khaki;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  border-radius: 10px;
  li {
    flex: 1;
    display: flex;
    padding: 0 10px;
    justify-content: space-between;
  }
}
.el-button--primary {
  width: 120px;
  height: 40px;
  border-radius: 25px;
  background: #306d07;
  border: 0;
  position: fixed;
  bottom: 20px;
  right: 20px;
}
.mackbox {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  // display: none;
}
.mint-popup {
  width: 100%;
  // height: 100%;
}
.mackbottom {
  width: 100%;
  height: 100px;
  background: #fff;
  display: flex;
  span {
    flex: 1;
    text-align: center;
    line-height: 100px;
  }
}
</style>