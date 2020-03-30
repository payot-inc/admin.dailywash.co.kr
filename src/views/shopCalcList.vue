<template>
  
  <div class="inner">
    <div class="contentsHead">
      <h3>세탁소 정산내역</h3>
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
        { text: '정산처리날짜', value:'completeDate'},
        { text: '매장명', value:'shopName'},
        { text: '정산기간', align: 'start',value: 'calcDate'},
        { text: '주문건수', value: 'orderNumber'},
        { text: '서비스이용료', value: 'servicePrice' },
        { text: '추가요금', value: 'addPrice' },
        { text: '추가요금 할인률', value:'discountRate'},
        { text: '실정산액', value: 'lastCalcPrice' },
        { text: '비고', value: 'memo'},
      ],
      desserts: [
        {
          completeDate:'2019-04-01',
          shopName:'더런드리 금정점',
          calcDate: '2019-03-15 ~ 2019.03.30',
          orderNumber: 159,
          servicePrice: 1865700,
          addPrice: 1574800,
          discountRate: '12%',
          lastCalcPrice: 1325000,
          memo:'-',
        },
        {
          completeDate:'2019-04-02',
          shopName:'더런드리 금정점',
          calcDate: '2019-03-15 ~ 2019.03.30',
          orderNumber: 159,
          servicePrice: 1865700,
          addPrice: 1574800,
          discountRate: '12%',
          lastCalcPrice: 1325000,
          memo:'-',
        },
      ],
    }
  }

}
</script>