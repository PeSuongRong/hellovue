<template>
  <div id="tab">
      <div class="masonry m-3">
        <ul class="tabs">
            <li v-for="(item,index) in lists" v-bind:key="index" :class ="act === index ? 'active' : ''" @click="act = index">{{item.title}}</li>
          </ul>
          <div class="tab_container">
            <div v-for="(item, index) in lists"  v-show="act === index" v-bind:key="index" class="tab_content">
              {{item.info}}
            </div>
          </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Tab',
  data: function(){
      return{
        lists:[
            {
                title:'Tab 1',
                info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos ratione provident fugit consequuntur tempora esse repellendus, pariatur labore quos qui.'
            },
            {
                title:'Tab 2',
                info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex suscipit, cupiditate voluptatum facere, quis quibusdam, velit impedit nisi veritatis explicabo cumque at. Facere blanditiis quisquam dolorum, itaque consequuntur, sequi distinctio assumenda! Nisi laboriosam fugit, aliquid esse amet itaque consequuntur ratione?'
            },
            {
                title:'Tab 3',
                info: 'Lorem ipsum dolor'
            }
        ],
        index:0,
        act:0
      }
  }
}
</script>