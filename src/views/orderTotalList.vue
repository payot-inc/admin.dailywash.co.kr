<template>
  <div class="inner orderTotalList">
    <div class="contentsHead">
      <h3>전체주문내역</h3>
    </div>

    <div class="contentsBody">
      <v-data-table :headers="headers" :items="desserts" :items-per-page="5">
        <template v-slot:item.button="{  }">
          <div class="calcButton">
            <v-btn small @click="$refs.calcModal.open(true)" elevation="0" outlined>상세보기</v-btn>
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

    <CalcModal ref="calcModal" />
  </div>
</template>

<script>
import CalcModal from '@/components/calcModal.vue';

export default {

  components:{
    CalcModal,
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
  }),
  methods: {

  },
};
</script>
