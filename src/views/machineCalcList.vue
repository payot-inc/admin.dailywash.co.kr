<template>
  
  <div class="inner">
    <div class="contentsHead">
      <h3>세탁장비 정산내역</h3>
    </div>
    <div class="contentsBody">
      <v-data-table :headers="headers" :items="desserts" :items-per-page="5">
        <template v-slot:item.button="{  }">
          <div class="calcButton">
            <v-btn small @click="$refs.calcModal.open(true)" elevation="0" outlined>정산하기</v-btn>
          </div>
        </template>

        <template v-slot:item.eqUseNumber="{ item }">
          {{ item.eqUseNumber | numeral('0,0') }}건
        </template>

        <template v-slot:item.eqPushPrice="{ item }">
          -{{ item.eqPushPrice | numeral('0,0') }}원
        </template>

        <template v-slot:item.userPayment="{ item }">
          {{ item.userPayment | numeral('0,0') }}원
        </template>

         <template v-slot:item.lastCalcPrice="{ item }">
          {{ item.lastCalcPrice | numeral('0,0') }}원
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

</template>

<script>
export default{
  data(){
    return{
      headers: [
        { text: '처리날짜', value:'completeDate'},
        { text: '매장명', value:'shopName'},
        { text: '정산기간', align: 'start',value: 'calcDate'},
        { text: '장비사용건수', value: 'eqUseNumber' },
        { text: '장비투입금액', value: 'eqPushPrice' },
        { text: '사용자 결제금액', value: 'userPayment' },
        { text: '수수료제외 정산금액', value: 'calcPrice' },
        { text: '실정산액', value: 'lastCalcPrice' },
        { text: '비고', value: 'memo'},
      ],
      desserts: [
        {
          completeDate:'2019-03-31',
          shopName:'더런드리 금정점',
          calcDate: '2019-03-15 ~ 2019-03-30',
          eqUseNumber: 159,
          eqPushPrice: 685400,
          userPayment: 1574800,
          calcPrice: 1325400,
          lastCalcPrice: 1325000,
          memo:'-',
        },
        {
          completeDate:'2019-03-31',
          shopName:'페이오티 금정점',
          calcDate: '2019-03-15 ~ 2019-03-30',
          eqUseNumber: 159,
          eqPushPrice: 845600,
          userPayment: 1574800,
          calcPrice: 1325400,
          lastCalcPrice: 1325000,
          memo:'-'
        },
      ],
    }
  }

}
</script>