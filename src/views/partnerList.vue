<template>
  <div class="inner shopCalc">
    <div class="contentsHead">
      <h3>파트너</h3>
    </div>

    <div class="contentsBody">

      <v-data-table :headers="headers" :items="desserts" :items-per-page="5">
        <template v-slot:item.button="{  }">
          <div class="calcButton">
            <v-btn small @click="$refs.calcModal.open(true)" elevation="0" outlined>수정하기</v-btn>
          </div>
        </template>

        <template v-slot:item.orderNumber="{ item }">
          {{ item.orderNumber | numeral('0,0') }}건
        </template>

        <template v-slot:item.servicePrice="{ item }">
          {{ item.servicePrice | numeral('0,0') }}원
        </template>

        <template v-slot:item.addPrice="{ item }">
          {{ item.addPrice | numeral('0,0') }}원
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
      { text: '매장명', value:'shopName'},
      { text: '가입자', value:'userName'},
      { text: '사업자주소', value: 'address'},
      { text: '연락처', value: 'phone'},
      { text: '계약일',  value:'contractDate'},
      { text: '은행정보', value:'bank'},
      { text: '상세내용수정', value: 'button'},
    ],
    desserts: [
      {
        shopName:'페이오티 금정점',
        userName:'박수민',
        address:'부산시 북구 구남언덕로 15',
        phone:'010-8525-4561',
        contractDate:'2019년 3월 4일',
        bank:'우리은행 1002-537-353918',
      },
    ],
  }),
  methods: {

  },
};
</script>
