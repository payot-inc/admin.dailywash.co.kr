<template>
  <div class="inner orderTotalList">
    <div class="contentsHead">
      <h3>전체주문내역</h3>
    </div>

    <div class="contentsBody">

      <dl class="filter-box">
        <dt>
          <h4>검색필터</h4>
        </dt>
        <dd>
          <table cellpadding="0" cellspacing="0">
            <tr class="state">
              <th>처리상태</th>
              <td>
                <ul>
                  <li>
                    <input type="checkbox" checked>
                    <span>전체</span>
                  </li>
                  <li v-for="item in orderState" :key="item">
                    <input type="checkbox">
                    <span>{{item}}</span>
                  </li>
                </ul>
              </td>
            </tr>
            <tr class="dateSelector">
              <th>날짜선택</th>
              <td>
                <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  :return-value.sync="date"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <input type="text"
                      v-model="date"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    >
                  </template>
                  <v-date-picker v-model="date" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                    <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                  </v-date-picker>
                </v-menu>

                <span> ~ </span>

                <v-menu
                  ref="menu2"
                  v-model="menu2"
                  :close-on-content-click="false"
                  :return-value.sync="date2"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <input type="text"
                      v-model="date2"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    >
                  </template>
                  <v-date-picker v-model="date2" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu2 = false">Cancel</v-btn>
                    <v-btn text color="primary" @click="$refs.menu2.save(date2)">OK</v-btn>
                  </v-date-picker>
                </v-menu>
              </td>
            </tr>
            <tr class="keyword">
              <th>키워드검색</th>
              <td>
                <select>
                  <option>주문자명</option>
                  <option>파트너명</option>
                </select>
                <input type="text">
              </td>
            </tr>
          </table>
        </dd>
        <dd class="filter-bottom">
          <v-btn outlined>검색하기</v-btn>
        </dd>
      </dl>

      <div class="dataTable">

        <v-data-table :headers="headers" :items="desserts" :items-per-page="5">
          <template v-slot:item.button="{  }">
            <div class="calcButton">
              <v-btn small @click="$refs.orderDetail.open(true)" elevation="0" outlined>상세보기</v-btn>
            </div>
          </template>

          <template v-slot:item.eqUseNumber="{ item }">
            {{ item.eqUseNumber | numeral('0,0') }}건
          </template>

          <template v-slot:item.eqPushPrice="{ item }">
            {{ item.eqPushPrice | numeral('0,0') }}원
          </template>

          <template v-slot:item.userPayment="{ item }">
            {{ item.userPayment | numeral('0,0') }}원
          </template>

          <template v-slot:item.calcPrice="{ item }">
            {{ item.calcPrice | numeral('0,0') }}원
          </template>

          <template slot="no-data">
            <v-alert :value="true" color="error" icon="warning">
              이용내역이 없습니다
            </v-alert>
          </template>
        </v-data-table>

      </div>
    </div>

    <OrderDetail ref="orderDetail" />
  </div>
</template>

<script>
import OrderDetail from '@/components/orderDetail.vue';

export default {

  components:{
    OrderDetail,
  },
  
  data: () => ({
    headers: [
      {text:'처리상태', value:'orderState'},
      {text: '주문날짜', value:'orderDate'},
      {text: '주문자', value:'userName'},
      {text:'연락처', value:'userPhone'},
      {text:'수거/배송지', value: 'userAddress'},
      {text: '주문상품', value:'goodsList'},
      {text:'주문금액', value:'orderPrice'},
      {text: '상세보기', value: 'button'},
    ],
    orderState:['주문요청','주문확인','수거완료','세탁물확인','결제요청','결제대기','작업완료','배송완료'],
    desserts: [
      {
        orderState:'세탁입고',
        orderDate:'2020-03-12',
        userName:'박수민',
        userPhone:'010-8525-4561',
        userAddress:'부산시 북구 구남언덕로 15',
        orderPrice:20000,
        goodsList:'상품목록',

      },
    ],

    date: new Date().toISOString().substr(0, 10),
    date2: new Date().toISOString().substr(0, 10),
    menu: false,
    menu2: false,
  }),
  methods: {

  },
};
</script>

<style lang="scss" scoped>

.filter-box{
  margin-bottom:50px;

  dt{margin-bottom:10px;}
  
  table{
    border:1px solid #e2e2e2;
    width:100%;

    th{width:200px;padding:10px;font-size:14px;border-bottom:1px solid #e2e2e2;background: #f8f8f8;}
    td{padding:10px 15px;font-size:14px;border-bottom:1px solid #e2e2e2;}
    tr:last-child th, tr:last-child td{border-bottom:0px;}

    tr.state{
      ul{padding:0px;overflow:hidden;}
      li{
        padding:0px;
        float:left;
        margin-right:30px;
        height:30px;
        line-height:30px;

        input{vertical-align: middle;width:15px;height:15px;}
        span{margin-left:5px;font-size:13px;}
      }
    }
  }

  .filter-bottom{
    margin-top:20px;
    text-align: center;
    .v-btn{
      width:150px;
      background: #292929;
      color:#fff;
    }
  }
}

.dateSelector{
  input{border:1px solid #aaa;text-align:center;height:30px;border-radius:4px;}
  span{margin:0 10px;}
}

.keyword{
  select{height:30px;border:1px solid #aaa;margin-right:10px;padding:0 10px;border-radius:4px;background:#f8f8f8;}
  input{height:30px;border:1px solid #aaa;border-radius:5px;}
}

.dataTable{
  border:1px solid #e2e2e2;
}

</style>