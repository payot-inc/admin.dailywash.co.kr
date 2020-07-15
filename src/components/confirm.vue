<template>

  <v-dialog
    v-model="dialog"
    width="420px"
  >
    <v-card>
      <div class="dialogTitle" v-if="title !== null">
        <h4>{{title}}</h4>
      </div>
      <div class="dialogCont">
        
        <strong style="color:#D20A61" v-if="stateName !== null">{{stateName}}</strong>
        <slot name="dialogCont" />
      </div>
      <div class="btns">
        <v-btn outlined @click="close()">취소</v-btn>
        <v-btn outlined @click="$refs.reMessage.open(true)">확인</v-btn>
      </div>
    </v-card>

    <Message ref="reMessage">
      <template slot="text">
        계속 진행하시겠습니까?
      </template>
    </Message>
  </v-dialog>

</template>

<script>
import Message from '../components/message'

export default {
  components:{
    Message
  },
  props:['title'],
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
.dialogTitle{
  border-bottom:1px solid #e2e2e2;
  background:#f8f8f8;
  padding:0 10px;
  height:50px;
  display:flex;
  justify-content: space-between;
  align-items: center;
}

.dialogCont{
  padding:20px;
}

.btns{
  padding:10px;
  border-top:1px solid #e2e2e2;
  text-align:right;
  .v-btn{border:1px solid #aaa;margin-left:5px;}
}


</style>