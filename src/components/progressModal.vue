<template>
  <v-dialog
    v-model="dialog"
    width="200px"
  >
    <v-card>
      <v-progress-circular
        indeterminate
        size="40"
        color="#2816A7"
      />
      <p>변경중입니다</p>
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

.v-card{
  display:flex;
  justify-content: center;
  align-items: center;
  padding:30px 0;
  flex-direction: column;
  background: rgba(255,255,255,0.8);

  p{
    margin:0;
    padding:0;
    margin-top:20px;
    font-family:'SCDream'
  }
}

</style>