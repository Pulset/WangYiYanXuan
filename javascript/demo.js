$(document).ready(function(){
  $(".drop-list").mouseenter(function(){      //APP下载$('#h').css("width")/1.1
    $('.drop-list-item').show();
  });
  $(".drop-list").mouseout(function(){
    $('.drop-list-item').hide();
  });                                                               //APP下载


       var list_item=function(list,item){        //导航下拉菜单
                  var list=$("."+ list);
                  var item=$("."+ item);
                      list.mouseover(function(){           
                      item.show();
                  item.mouseover(function(){
                   item.show(); 
                    item.mouseout(function(){
                    item.hide(); 
                });
                });
              });
               list.mouseout(function(){
                item.hide();
              });
                }
                list_item("list1","item1");
                list_item("list2","item2");
                list_item("list3","item3");
                list_item("list4","item4");
                list_item("list5","item5");
                list_item("list6","item6");
                list_item("list7","item7");
                list_item("list8","item8");

                 $(".about1").mouseenter(function(){      //二维码查看
                  $('.about1-1').show();
                });
                $(".about1").mouseout(function(){
                  $('.about1-1').hide();
                });      

                $(".about2").mouseenter(function(){      //二维码查看
                  $('.about2-1').show();
                });
                $(".about2").mouseout(function(){
                  $('.about2-1').hide();
                });     

                $(".return").mouseenter(function(){      //二维码查看
                  $('.return').css({'opacity':'1'});
                });
                $(".return").mouseout(function(){
                   $('.return').css({'opacity':'0.5'});
                });      

                $('.carousel').carousel({                 //定时切换图片
                                            interval: 3000  
                                       });  


                 function slSwich(p,picture){
                     var p="."+p;
                     var picture="."+picture;
                     $(p).mouseenter(function(){
                     $('.active').removeClass("active");
                     $('.active1').removeClass("active1");
                     $(picture).addClass("active");
                     $(p).addClass("active1");
                       });

                 }

                 slSwich("p1","sl1");
                 slSwich("p2","sl2");
                 slSwich("p3","sl3");
                 slSwich("p4","sl4");
                 slSwich("p5","sl5");

  
});

function add(){
  var n=$('#num').val();
  n++;
 $('#num').val(n);
 
}
function sub(){
 var n=$('#num').val();
  if(n==1){} 
  else{
    n--;
   document.getElementById('num').value=n;
  }
}
var i=j=false;
function selction1() {
  i=!i;
 if(i){
   if(j){
    $('.ps2').removeClass('active2');
    j=!j;
    $('.ps1').addClass('active1');
   }
   else{
    $('.ps1').addClass('active1');
   }
 }
 else{
  $('.ps1').removeClass('active1');
 }

  
}
function selction2() {
   j=!j;
  if(j){
    if(i){
      $('.ps1').removeClass('active1');
      i=!i;
      $(".ps2").addClass("active2");
     }
     else{
      $(".ps2").addClass("active2");
     }
  }
 else{
  $('.ps2').removeClass('active2');
 }
}
