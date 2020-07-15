<template>
  <v-dialog
    v-model="dialog"
    width="320px"
  >
    <v-card>
      <div class="dialogCont">
        <slot name="text"></slot>
      </div>
      <div class="btns">
        <v-btn outlined @click="close()">취소</v-btn>
        <v-btn outlined @click="close()">확인</v-btn>
      </div>
    </v-card>
  </v-dialog>

</template>

<script>
export default {
  data(){
    return{
      dialog:false,
      stateName:null
    }
  },
  methods:{
    close(){
      this.dialog = !this.dialog
    },
    open(value, event){
      this.dialog = value;
      this.stateName = event.innerText;
    },
  }
}
</script>

<style lang="scss" scoped>

.dialogCont{
  padding:20px;
  font-family:'SCDream';
  font-weight:400;
  strong{color:#d22828;}
}

.btns{
  padding:10px;
  border-top:1px solid #e2e2e2;
  text-align:right;
  .v-btn{border:1px solid #aaa;margin-left:5px;}
}


</style>