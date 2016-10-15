$(document).ready(function(){
  $(".drop-list").mouseenter(function(){      //APP下载
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
                                    $('.carousel').carousel({  
                                            interval: 3000  
                                       });  

});