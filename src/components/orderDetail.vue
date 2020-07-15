<template>

    <v-dialog
      v-model="dialog"
      width="980px"
    >
      <v-card class="dialogBody" style="border-radius:0px;">
        <div class="dialogTitle">
          <span>5f0e5fbc1e56221001f65513</span>번 주문정보
        </div>
        <div class="dialogContents">
          <dl class="state">
            <dt>
              <h4>주문상태</h4>
            </dt>
            <dd class="stateTop">
                <v-btn outlined>
                  주문확인
                </v-btn>
                <v-btn outlined>
                  수거완료
                </v-btn>
                <v-btn outlined>
                  세탁물확인
                </v-btn>
                <v-btn outlined>
                  결제요청
                </v-btn>
                <v-btn outlined>
                  세탁완료
                </v-btn>
                <v-btn outlined>
                  배송완료
                </v-btn>
            </dd>
            <dd>
              <ul>
                <li>
                  <span class="date">2020-07-13 12:34:42</span>
                  <span class="label">주문요청</span>
                </li>
                <li>
                  <span class="date">2020-07-13 12:34:42</span>
                  <span class="label">주문확인</span>
                </li>
                <li class="active">
                  <span class="date">2020-07-13 12:34:42</span>
                  <span class="label">수거완료</span>
                </li>
              </ul>
            </dd>
            
          </dl>
          <dl class="partner">
            <dt>
              <h4>파트너정보</h4>
            </dt>
            <dd>
              <div class="partner-img">
                <img src="https://source.unsplash.com/user/erondu/150x150">
              </div>
              <div class="partner-info">
                <ul>
                  <li>
                    <span class="label">이름</span>
                    <span class="text">박수민(페르민츠)</span>
                  </li>
                  <li>
                    <span class="label">전화번호</span>
                    <span class="text">010-8525-4561</span>
                  </li>
                  <li>
                    <span class="label">사업장</span>
                    <span class="text">부산광역시 금정구 부산대학로 63번길 2 과학기술연구동 201호</span>
                  </li>
                  <li>
                    <span class="label">상태메세지</span>
                    <span class="text">안녕하세요! 오늘도 열심히 세탁중!</span>
                  </li>
                </ul>
              </div>
            </dd>
          </dl>
          <dl class="userInfo">
            <dt>
              <h4>주문정보</h4>
            </dt>
            <dd>
              <ul>
                <li>
                  <span class="label">주문자명</span>
                  <span class="text">박수민</span>
                </li>
                <li>
                  <span class="label">연락처</span>
                  <span class="text">010-8525-4561</span>
                </li>
                <li>
                  <span class="label">예약주소지</span>
                  <span class="text">부산광역시 금정구 부산대학로 63번길 2 과학기술연구동 201호</span>
                </li>
                <li>
                  <span class="label">수거희망일시</span>
                  <span class="text">2020.07.17 오전</span>
                </li>
                <li>
                  <span class="label">요청사항</span>
                  <span class="text">-</span>
                </li>
                <li>
                  <span class="label">출입문</span>
                  <span class="text">-</span>
                </li>
              </ul>
            </dd>
          </dl>
          <div class="goodsInfo">
            <dl class="goods" style="margin-right:10px;">
              <dt>
                <h4>요청세탁물</h4>
              </dt>
              <dd>
                <ul>
                  <li>
                    <span class="name">생활빨래 80리터</span>
                    <span class="number">1개</span>
                    <span class="price">19,800원</span>
                  </li>
                  <li>
                    <span class="name">와이셔츠</span>
                    <span class="number">2개</span>
                    <span class="price">6,000원</span>
                  </li>
                  <li>
                    <span class="name">정장바지</span>
                    <span class="number">1개</span>
                    <span class="price">4,000원</span>
                  </li>
                </ul>
              </dd>
            </dl>
            <dl class="goods" style="margin-left:10px;">
              <dt>
                <h4>검수된 세탁물</h4>
              </dt>
              <dd>
                <ul>
                  <li>
                    <span class="name">생활빨래 80리터</span>
                    <span class="number">1개</span>
                    <span class="price">19,800원</span>
                  </li>
                  <li>
                    <span class="name">와이셔츠</span>
                    <span class="number">2개</span>
                    <span class="price">6,000원</span>
                  </li>
                  <li>
                    <span class="name">정장바지</span>
                    <span class="number">1개</span>
                    <span class="price">4,000원</span>
                  </li>
                </ul>
              </dd>
              <dd class="no-data">
                검수된 세탁물이 없습니다
              </dd>
            </dl>
          </div>

          <dl class="payment-info">
            <dt>
              <h4>결제내역</h4>
            </dt>
            <dd>
              <ul>
                <li>
                  <span class="label">생활빨래 80리터</span>
                  <span class="price">19,800원</span>
                </li>
                <li>
                  <span class="label">생활빨래 80리터</span>
                  <span class="price">19,800원</span>
                </li>
              </ul>
            </dd>
          </dl>
        </div>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
  data(){
    return{
      dialog:false,
      toggle_none:1,
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
  padding:0 20px;
  font-family:'SCDream';
  border-bottom:1px solid #e2e2e2;
  span{color:#2816A7;margin-right:5px;}
  
}

.dialogContents{
  padding:20px;

  dl{
    margin-bottom:30px;

    dt{
      margin-bottom:10px;
      h4{font-size:16px;}
    }
  }

  .stateTop{
    border-right:1px solid #e2e2e2;
    display:flex;
    .v-btn{border-radius:0px;border:1px solid #e2e2e2;border-right:0px;flex:1;}
    .v-btn.active{background: #2816A7;color:#fff;border:0px;}
  }
  .state{
    ul{
      padding:0;
      margin:0;
      li{
        border:1px solid #e2e2e2;
        margin-bottom:5px;
        padding:10px 20px;
        display:flex;
        align-items: center;
        font-size:14px;
        background:#f8f8f8;

        
        span.date{font-weight:400;text-align: center;}
        span.label{flex:1;font-size:14px;color:#888;padding:0 20px;}
      }
      li.active{
        background:#fff;
        span.label{color:#2816A7}
      }
    }

    .stateTop{
      margin-bottom:15px;
      .v-btn-toggle{
        .v-btn{height:40px;}
      }
    }
  }

  .partner{
    dd{
      display:flex;
      border:1px solid #e2e2e2;
      padding:20px;

      .partner-img{width:120px;height:120px;border-radius:4px;overflow: hidden;}
      .partner-info{
        margin-left:20px;
        padding:0 20px;
        ul{padding:0px;}
        li{
          display:flex;
          height:30px;
          align-items: center;
          font-size:14px;
          span.label{width:90px;text-align:left;color:#888;font-size:12px;}
          span.text{flex:1;padding:0 20px;}
        }
      }
    }
  }

  .userInfo{
    font-size:14px;
    dd{padding:20px;border:1px solid #e2e2e2;}
    ul{
      padding:0px;
      li{
        display:flex;
        align-items: center;
        height:30px;
        span.label{
          color:#888;
          font-size:12px;
          width:90px;
        }
        span.text{
          padding:0 20px;
        }        
      }
    }
  }
  .goodsInfo{
    display:flex;
    
    .goods{
      flex:1;
      font-size:13px;
      ul{
        padding:0px;

        li{
          display:flex;
          align-items: center;
          justify-content:space-between;
          height:40px;
          border:1px solid #e2e2e2;
          margin-bottom:5px;
          padding:10px;

          span.name{
            flex:1;
          }
          span.number{
            width:50px;
            text-align:center;
          }
          span.price{
            width:100px;
            text-align:right;
          }        
        }
      }

      dd.no-data{
        display:flex;
        justify-content: center;
        border:1px solid #e2e2e2;
        text-align: center;
        height:40px;
        align-items: center;
        color:#888
      }
    }
  }

  .payment-info{
    ul{
      padding:20px;
      margin:0px;
      font-size:14px;
      border:1px solid #e2e2e2;

      li{
        padding:0px;
        display:flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom:10px;
        span.label{font-size:12px;color:#888}
        span.price{}
      }
      li:last-child{margin-bottom:0px;;}
    }
  }
}



</style>