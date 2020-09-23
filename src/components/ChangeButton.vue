<template>
  <div class="button text-center m-3">
    <button id="button" @click="showText">{{changBtn.text}}</button>
  </div>
</template>

<script>
export default {
  name: 'ChangeButton',
  data: function(){
      return{
        changBtn: {
            text:'Want to play?'
        },
        see:true
      }
  },
  methods:{
      showText: function(){
          this.see = ! this.see;
          this.changBtn.text = this.see ? "Want to play" : "I am working!";
      }
  }
}
</script>