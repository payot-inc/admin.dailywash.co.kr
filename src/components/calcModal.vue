<template>
  <div class="clacModal">
    <v-dialog
      v-model="dialog"
      width="480px"
    >
      <v-card class="dialogBody">
        <div class="dialogTitle">
          <span>더런드리 금정점</span>정산하기
        </div>
        <div class="calcInfo">
          <dl>
            <dt>매장명</dt>
            <dd>더런드리 금정점</dd>
          </dl>
          <dl>
            <dt>정산기간</dt>
            <dd>2019-03-15 ~ 2019-03-31</dd>
          </dl>
          <dl>
            <dt>최종정산금액</dt>
            <dd>1,345,000 원</dd>
          </dl>
          <dl>
            <dt>실지급액</dt>
            <dd>
              <v-text-field flat dense hide-details></v-text-field>
            </dd>
          </dl>
          <div class="memo">
            <h4>메모</h4>
            <v-textarea
              hide-details
              outlined
              flat
              name="input-7-4"
              label="메모"
              value=""
              height="100px"
              style="margin-top:20px;"
            ></v-textarea>
          </div>
        </div>
        <div class="dialogBottom">
          <v-btn text @click="close">취소하기</v-btn>
          <v-btn text @click="close">정산완료</v-btn>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data(){
    return{
      dialog:false
    }
  },
  methods:{
    close(){
      this.dialog = !this.dialog
    },
    open(value){
      this.dialog = value;
    },
  }
}
</script>

<style lang="scss" scoped>
.divider{height:2px;background:#e2e2e2;margin:20px 0}
.v-btn{letter-spacing:0;}

.dialogTitle{
  height:50px;
  display:flex;
  align-items: center;
  padding:0 30px;
  font-family:'SCDream';
  span{color:#2816A7}
}

.calcInfo{
  border-top:1px solid #e2e2e2;
  padding:30px;
  dl{
    display:flex;flex-direction: row;
    justify-content:space-between;align-items: center;
    font-family:'SCDream';
    margin-bottom:10px;

    dt{width:150px;font-size:14px;}
    dd{flex:1;font-size:14px;color:#292929;text-align:right;}
  }
}

.memo{
  margin-top:30px;

  h4{font-size:14px;font-weight:500}
}

.dialogBottom{
  width:100%;
  border-top:1px solid #e2e2e2;
  text-align:right;
  padding:10px;
}


</style>