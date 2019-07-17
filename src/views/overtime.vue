<template>
  <div class="overtime">
    <!-- <h1>申请加班</h1> -->
    <div class="header">
      <span>></span>
      <span>办公室申请加班表</span>
    </div>

    <div class="main">
      <div class="top">
        <ul class="ul">
          <li>
            <span></span>
          </li>
          <li>
            <p>
              <span>申请人姓名</span>
              <span>刘宇</span>
            </p>
            <p>
              <span>直接主管</span>
              <span>秦超</span>
            </p>
          </li>
        </ul>
      </div>
      <div class="midd">
        <div class="content">
          <ul>
            <li>申请信息</li>
            <div class="block">
              <span class="demonstration">申请时间</span>
              <el-date-picker  type="date" placeholder="选择日期"></el-date-picker>
            </div>

            <li>
              加班类型：
              <select  v-model="obj.type">
                <option value="0">默认</option>
                <option value="1">工作日加班</option>
                <option value="2">普通</option>
              </select>
            </li>

            <li>
              <div class="block">
                <span class="demonstration">加班起始时间</span>
                <el-date-picker
                  v-model="obj.startTime"
                  type="datetime"
                  placeholder="选择日期时间"
                  align="right"
                  :picker-options="pickerOptions"
                ></el-date-picker>
              </div>
            </li>
            <li>
              <div class="block">
                <span class="demonstration">加班结束时间</span>
                <el-date-picker v-model="obj.endTime" type="datetime" placeholder="选择日期时间"></el-date-picker>
              </div>
            </li>
            <li>共计时数：1.0</li>
          </ul>
        </div>
        <div>
          <ul class="count">
            <ul>
              <li>加班事由</li>
              <li><input type="text">哈哈</li>
            </ul>
          </ul>
        </div>
      </div>
    </div>

    <div class="button">
      <span>取消</span>
      <span @click="addFn">提交</span>
    </div>
  </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ],
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
     obj : {
 
        startTime: "",
        endTime:"",
        type:''
     }
    };
  },
    methods: {
      ...mapActions(["addtime"]),
      addFn(){
        this.addtime(this.obj)
        
      },
      // ...mapActions(['add',this.obj])
    },
      created() {
        // this.add()
      },
};
</script>
<style scoped lang="scss">
.overtime {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.header {
  width: 100%;
  height: 45px;
  text-align: center;
  line-height: 45px;
  color: #fff;
  font-weight: 900;
  background: rgb(48, 109, 7);
  display: flex;
  span:nth-child(1) {
    flex: 1;
  }
  span:nth-child(2) {
    flex: 9;
  }
}
.top {
  width: 100%;
  height: 130px;
  border-radius: 0px 0px 50px 50px;
  background: rgb(48, 109, 7);
  color: #fff;
}
.main {
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.ul {
  width: 100%;
  height: 100%;
  display: flex;
  li:nth-child(1) {
    flex: 3;
    span {
      width: 80%;
      height: 70%;
      border-radius: 50%;
      background: lavender;
      display: inline-block;
      margin-left: 10px;
    }
  }
  li:nth-child(2) {
    flex: 7;
    line-height: 30px;
  }
}
.midd {
  width: 100%;
  height: 100%;
  flex: 1;
}
.content {
  width: 90%;
  height: 400px;
  background: lavender;
  margin: 0 auto;
  margin-top: -30px;
  overflow: auto;
  ul {
    li {
      margin-top: 10px;
      padding-left: 10px;
    }
  }
}
.count {
  width: 90%;
  height: 90px;
  background: lavender;
  margin: 0 auto;
  border-radius: 10px;
  margin-top: 15px;
  ul {
    padding-left: 10px;
    li:nth-child(1) {
      height: 45px;
      line-height: 45px;
      border-bottom: 1px solid #ccc;
    }
    li {
      height: 45px;
      line-height: 50px;
      input{
        width: 100%;
        height: 80%;
        border: 0;
        background: lavender;
        font-size: 16px;
      }
    }
  }
}
.button {
  width: 100%;
  height: 45px;
  display: flex;
  background: khaki;
  span {
    flex: 1;
    text-align: center;
    line-height: 45px;
  }
}
input {
  width: 100px;
}
</style>