<template>
  <div id="sideView">
    <v-list class="navigation">
      <v-list-group
        value="true"
        active-class="first-active"
        v-for="first in items" :key="first"
      >
        <template v-slot:activator>
          <v-icon style="margin-right:5px;">{{first.icon}}</v-icon>
          <v-list-item-title>{{first.title}}</v-list-item-title>
        </template>
        <div class="second">
          <v-list-item link @click="pageMove(second.link)" v-for="second in first.items" :key="second.title">
            <v-list-item-title>{{second.title}}</v-list-item-title>
          </v-list-item>
        </div>
      </v-list-group>
    </v-list>
  </div>
</template>

<script>
export default {

  data(){
    return {
      items:[
        {
          title:'매출관리',
          icon:'mdi-equalizer',
          items:[
            {
              title:'월별매출',
              link:'/'
            }
          ],
        },
        {
          title:'주문관리',
          icon:'mdi-store',
          items:[
            {
              title:'전체주문내역',
              link:'/orderTotalList'
            },
            {
              title:'취소/환불내역',
              link:'/'
            }
          ],
        },
        
        {
          title:'정산관리',
          icon:'mdi-calculator',
          items:[
            {
              title:'세탁장비 정산',
              link:'/machineCalc',
            },
            {
              title:'세탁장비 정산내역',
              link:'/machineCalcList'
            },
            {
              title:'세탁소 정산',
              link:'/shopCalc'
            },
            {
              title:'세탁소 정산내역',
              link:'/shopCalcList'
            },
            {
              title:'배달원 정산',
              link:'/deliverCalc'
            },
            {
              title:'배달월 정산내역',
              link:'/deliverCalcList',
            }
            
          ],
        },
        {
          title:'파트너관리',
          icon:'mdi-account-box',
          items:[
            {
              title:'파트너',
              link:'partnerList'
            },
            {
              title:'파트너등록'
            }
          ],
        },
        {
          title:'장비관리',
          icon:'mdi-washing-machine',
          items:[
            {
              title:'장비목록',
            },
            {
              title:'장비등록',
            },
          ]
        }
      ]
    }
  },

  methods: {
    pageMove(name){
      this.$router.push(name);
    }
  },
}
</script>

<style lang="scss" scoped>

</style>