<template>

  <v-dialog
    v-model="dialog"
    width="980px"
  >
    <v-card class="dialogBody" style="border-radius:0px;">
      <div class="dialogTitle">
        <h3><span>5f0e5fbc1e56221001f65513</span>번 주문정보</h3>
        <v-btn icon @click="close()">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
      <div class="dialogContents">
        <dl class="state">
          <dt>
            <h4>주문상태</h4>
          </dt>
          <dd class="stateTop">
            <v-btn 
              outlined
              v-for="(item, index) in orderStateBtns" 
              :key="index"
              @click="(e) => $refs.stateConfirm.open(true, e.target)"
              :value="orderStateBtns[index]"
              >
              {{orderStateBtns[index]}}
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
        <dl class="add-payment">
          <dt>
            <h4>추가결제</h4>
            <div class="btns">
              <v-btn outlined @click="$refs.payment.open(true)">추가결제요청</v-btn>
            </div>
          </dt>
          <dd>
            <table cellpading="0" cellspacing="0">
              <tr>
                <th>상태</th>
                <th>추가요청금액</th>
                <th>요청사유</th>
              </tr>
              <tr>
                <td class="state">결제전</td>
                <td>5,000원</td>
                <td>고객님의 세탁물중 일부에서 심각한 오염이 발견되어 고급세탁을 진행하였습니다</td>
              </tr>
            </table>
          </dd>
        </dl>

        <dl class="payment-info">
          <dt>
            <h4>결제내역</h4>
            <div class="btns">
              <v-btn outlined @click="$refs.refundConfirm.open(true)">부분환불</v-btn>
              <v-btn outlined @click="$refs.allRefundConfirm.open(true)">전액환불</v-btn>
            </div>
          </dt>
          <dd>
            <ul>
              <li>
                <span class="label">상품합계</span>
                <span class="price">29,800원</span>
              </li>
              <li>
                <span class="label">추가결제금</span>
                <span class="price">0원</span>
              </li>
              <li>
                <span class="label">배송비</span>
                <span class="price">0원</span>
              </li>
              <li>
                <span class="label">취소수수료</span>
                <span class="price">0원</span>
              </li>
            </ul>
            <div class="divider"></div>
            <ul>
              <li>
                <span class="label">(-)쿠폰할인</span>
                <span class="price">-5,000원</span>
              </li>
              <li>
                <span class="label">(-)이벤트할인</span>
                <span class="price">-3,000원</span>
              </li>
            </ul>
            <div class="divider"></div>
            <ul>
              <li class="last-price">
                <span class="label">총결제금액</span>
                <span class="price">21,800원</span>
              </li>
              <li>
                <span class="label">결제수단</span>
                <span class="price">신한카드(0438)</span>
              </li>
            </ul>
          </dd>
        </dl>
      </div>
    </v-card>

    <Confirm ref="stateConfirm" title="주문상태변경">
      <template slot="dialogCont">
        상태로 변경하시겠습니까?
      </template>
    </Confirm>

    <Confirm ref="refundConfirm" title="부분환불">
      <template slot="dialogCont">
        <div class="paymentModal">
          <dl>
            <dt>
              <h5>부분환불금액</h5>
            </dt>
            <dd><input type="text" value="0 원"></dd>
          </dl>
          <dl>
            <dt>
              <h5>환불사유</h5>
            </dt>
            <dd><textarea placeholder="추가결제 요청사유를 입력해주세요"/></dd>
          </dl>
        </div>
      </template>
    </Confirm>

    <Confirm ref="allRefundConfirm" title="전액환불">
      <template slot="dialogCont">
        <div class="refundConfirm">
          <dl class="price">
            <dt>
              <h5>환불금액</h5>
            </dt>
            <dd>
              <strong>32,600</strong> 원
            </dd>
          </dl>
          <div class="divider"/>
          <dl>
            <dt>
              <h5>전액환불 사유입력</h5>
            </dt>
            <dd><textarea placeholder="환불사유를 입력해주세요"/></dd>
          </dl>
        </div>
      </template>
    </Confirm>

    <Confirm ref="payment" title="추가결제요청" >
      <template slot="dialogCont">
        <div class="paymentModal">
          <dl>
            <dt>
              <h5>추가결제 요청금액</h5>
            </dt>
            <dd><input type="text" value="0 원"></dd>
          </dl>
          <dl>
            <dt>
              <h5>요청사유</h5>
            </dt>
            <dd><textarea placeholder="추가결제 요청사유를 입력해주세요"/></dd>
          </dl>
        </div>
      </template>
    </Confirm>
  </v-dialog>
</template>

<script>
import Confirm from '../components/confirm.vue'

export default {
  components:{
    Confirm,
  },
  data(){
    return{
      dialog:false,
      toggle_none:1,
      orderStateBtns:['주문확인','수거완료','세탁물확인','결제요청','세탁완료','배송완료']
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

.divider{height:1px;background:#e2e2e2;margin:20px 0}
.v-btn{letter-spacing:0;}

.dialogTitle{
  height:50px;
  display:flex;
  align-items: center;
  justify-content: space-between;
  padding:0 20px;
  font-family:'SCDream';
  background:#f8f8f8;
  border-bottom:1px solid #e2e2e2;
  span{color:#2816A7;margin-right:5px;}
  
}

.dialogContents{
  padding:20px;

  dl{
    margin-bottom:40px;

    dt{
      display: flex;
      align-items: center;
      justify-content:space-between;
      margin-bottom:10px;

      h4{font-size:16px;}
      .btns{
        .v-btn{
          border:1px solid #aaa;
          margin-left:5px;
          height:30px;
          font-size:13px;
        }
      }
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

    .goods:last-child{
      li{border-color:#aaa;}
    }
  }
  .add-payment{
    font-size:14px;
    dd{
      margin-bottom:10px;
    }
    table{
      width:100%;
      border:1px solid #e2e2e2;
      tr:last-child{
        th,td{border-bottom:0px;}
      }
      th{background: #f8f8f8;}
      th,td{
        border-bottom:1px solid #e2e2e2;
        text-align: center;
        padding:10px;
        border-right:1px solid #e2e2e2;
      }
      td.state{
        color:#D20A61;
      }
    }
  }
  .payment-info{
    dt{
      display:flex;
      justify-content: space-between;
      align-items: center;;

      .payment-btns{
        text-align: right;;
        .v-btn{
          border:1px solid #aaa;
          border-radius:0;
          margin-left:5px;
          border-radius:4px;
        }
      }
    }
    dd{
      padding:20px;
      font-size:14px;
      border:1px solid #e2e2e2;
    }
    ul{
      margin:0px;
      padding:0px;

      li{
        padding:0px;
        display:flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom:10px;
        span.label{font-size:12px;color:#888}
      }
      li:last-child{margin-bottom:0px;;}
      li.last-price{
        span.label{color:#292929;}
        span.price{color:#D20A61}
      }
    }
  }

  
}

.refundConfirm{
  dl{
    strong{color:#D20A61}
  }
  dt{margin-bottom:10px;}
  dd{
    textarea{
      width:100%;
      border:1px solid #aaa;
      padding:5px;
      min-height:100px;
      max-height:150px;
      font-size:13px;
    }
  }

  dl.price{
    width:100%;
    display:flex;
    justify-content: space-between;
    align-items: center;
    dt{margin-bottom:0px;}
  }
}

.paymentModal{
  font-size:14px;
  dl{
    margin-bottom:20px;
    dt{margin-bottom:5px;}
  }
  input{
    width:100%;
    border:1px solid #aaa;
    border-radius:4px;
    height:40px;
    padding:0 5px;
    text-align:right;
  }
  textarea{
    width:100%;
    border:1px solid #aaa;
    min-height:100px;
    max-height:150px;
    border-radius:4px;
    padding:5px;
  }
}

</style>