<template>
  <div id="sort" class="m-3">
      <div id="sort-control">
          <a href="javascript:void(0)" @click="sortBy('title')">Title</a>
          <a href="javascript:void(0)" @click="sortBy('authors')">Author(s)</a>
          <a href="javascript:void(0)" @click="sortDate">Publish Date</a>
          <a href="javascript:void(0)" @click="sortBy('price')" >Price</a>
        </div>
        
  
          <table id="t-2">
            <tr v-for="(item, index) in listSort" :key="index">
                <td>{{item.title}}</td>
                <td>{{item.name}}</td>
                <td>{{item.published}}</td>
                <td>${{item.price}}</td>
            </tr>
        </table>
  
    </div>
</template>

<script>
var list = [
            {"img":"2862_OS.jpg","title":"Drupal 7","authors":"MERCER DAVID","published":"September 2010","price":44.99,"publishedYM":"2010-09", "name": ""} ,
            {"img":"3685EN_Amazon%20SimpleDB_LITE_0.jpg","title":"Amazon SimpleDB: LITE","authors":"CHAGANTI PRABHAKAR HELMS RICH","published":"May 2011","price":9.99,"publishedYM":"2011-05", "name": ""},
            {"img":"1847194141.jpg","title":"Object-Oriented JavaScript","authors":"STEFANOV STOYAN","published":"July 2008","price":39.99,"publishedYM":"2008-07"},
            {"img":"0042_MockupCover_0.jpg","title":"jQuery 1.4 Reference Guide","authors":"SWEDBERG KARL CHAFFER JONATHAN","published":"January 2010","price":39.99,"publishedYM":"2010-01", "name": ""},
            {"img":"0386OT_Cocoa%20and%20OBjective-C%20Cookbookcov.jpg","title":"Cocoa and Objective-C Cookbook","authors":"HAWKINS JEFF","published":"May 2011","price":39.99,"publishedYM":"2011-05", "name": ""},
            {"img":"4668_Python%20Testing%20Cookbook.jpg","title":"Python Testing Cookbook","authors":"TURNQUIST GREG L.","published":"May 2011","price":44.99,"publishedYM":"2011-05", "name": ""},
            {"img":"3760OS_Linux%20Shell%20Scripting%20Cookbook.jpg","title":"Linux Shell Scripting Cookbook","authors":"LAKSHMAN SARATH","published":"January 2011","price":44.99,"publishedYM":"2011-01", "name": ""},
            {"img":"4965OS_Nginx%201%20Web%20Server%20Implementation%20Cookbook.jpg","title":"Nginx 1 Web Server Implementation Cookbook","authors":"SARKAR DIPANKAR","published":"May 2011","price":39.99,"publishedYM":"2011-05", "name": ""},
            {"img":"1048OT_HTML5%20Multimedia%20Development%20Cookbookcov.jpg","title":"HTML5 Multimedia Development Cookbookcov.jpg","authors":"CRUSE DALE JORDAN LEE","published":"May 2011","price":39.99,"publishedYM":"2011-05", "name": ""},
            {"img":"0942OT_Core%20Data%20Essentials_0.jpg","title":"Core Data Essentials.jpg","authors":"HARWANI B.M.","published":"April 2011","price":44.99,"publishedYM":"2011-04", "name": ""},
            {"img":"3524OS_WordPress%203%20Plugin%20Development%20Essentials_0.jpg","title":"WordPress 3 Plugin Development Essentials","authors":"BONDARI BRIAN GRIFFITHS EVERETT","published":"March 2011","price":39.99,"publishedYM":"2011-03", "name": ""},
            {"img":"9867_Latex%20cov.jpg","title":"LaTeX Beginner's Guide","authors":"KOTTWITZ STEFAN","published":"March 2011","price":44.99,"publishedYM":"2011-03", "name": ""},
            {"img":"2923OS_Panda3D%20game%20developer%E2%80%99s%20cookbook.jpg","title":"Panda3D 1.7 Game Developer's Cookbook","authors":"LANG CHRISTOPH","published":"March 2011","price":44.99,"publishedYM":"2011-03", "name": ""},
            {"img":"1926_Cake%20PHP%201.3cov.jpg","title":"CakePHP 1.3 Application Development Cookbook","authors":"IGLESIAS MARIANO","published":"March 2011","price":39.99,"publishedYM":"2011-03", "name": ""},
            {"img":"4804os_mockupcover_ex.jpg","title":"Magento 1.4 Themes Design","authors":"CARTER RICHARD","published":"January 2011","price":39.99,"publishedYM":"2011-01", "name": ""},
            {"img":"0349OS_MockupCover_0.jpg","title":"Django JavaScript Integration: AJAX and jQuery","authors":"HAYWARD JONATHAN","published":"January 2011","price":44.99,"publishedYM":"2011-01", "name": ""},
            {"img":"1445OS_MockupCover_Magento_1.4_Development_Cookbook_cb.jpg","title":"Magento 1.4 Development Cookbook","authors":"FERDOUS NURUL","published":"December 2010","price":44.99,"publishedYM":"2010-12", "name": ""}
        ]

function toLower() {
    for(let i = 0; i<list.length;i++){
        var aLowerAuthor = list[i].authors.toLowerCase().split(" ")
        var aLowerName = list[i].name
        var lengt = aLowerAuthor.length
        //nếu có 2 từ thì đảo ngược mảng
        if(lengt === 2){
            aLowerName = aLowerAuthor.reverse()
        }
        //nếu có 3 từ cho từ thứ 2, tứ 3 lên đầu, từ đầu xuống cuối
        else if(lengt ===3){
            let arr1 = []
            arr1.push(aLowerAuthor[1],aLowerAuthor[2],aLowerAuthor[0])
            aLowerName = arr1
        }
        //nhiều hơn 3 từ
        else{
            let arr2 = [];
            for(let x = 0; x < lengt; x+=2){
                var first =  aLowerAuthor[x]
                var last =  aLowerAuthor[x+1]
                arr2.push(last,first+',')
            }
            let array3 = arr2.slice(0)
            var string1 = array3.join(' ').slice(0,-1)
            aLowerName = string1.toLowerCase().split(' ')

        }
        var stringAuthor = '' 
        //viết hoa chữ cái đầu từ
        for(let word of aLowerName){
            var output1 = word[0].toUpperCase() + word.substring(1) + " "
            stringAuthor = stringAuthor + output1
        }
        list[i].name = stringAuthor
    }
}
toLower();
//sort tăng giảm
function sortBy(arr, key) {
    return arr.sort(function (a, b) {
        if (a[key] < b[key]) return -1
        if (a[key] < b[key]) return  1
        return 0
    })
}
function sortByDESC(arr, key) {
    return arr.sort(function (a, b) {
        if (a[key] > b[key]) return -1
        if (a[key] < b[key]) return  1
        return 0
    })
}

export default {
  name: 'Table',
  data: function(){
      return{
        nameSort: "Demo sort",
        listSort:list,
        sort: true
      }
  },
  methods:{
    sortBy: function(key) {
        this.sort = !this.sort;
        this.sort ? sortByDESC(this.listSort, key) : sortBy(this.listSort, key)
    },
    sortDate: function() {
        this.sort = !this.sort;
        if(this.sort){
            this.listSort.sort( ( a, b) => {
                return new Date(a.published) - new Date(b.published);
            })
        }else{
            this.listSort.sort( ( a, b) => {
                return new Date(b.published) - new Date(a.published);
            })
        }
        return this.listSort;
    }
  }
}
</script>