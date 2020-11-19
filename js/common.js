$(function(){
$.ajax({
  url:'data.xml',
  dataType:'xml',
  success: function(data){
    /*실행구문 들어갈곳*/
    // console.log($(this).find("title").text());
    $("item",data).each(function(){
      $("dl").append("<dt><a href='"+$("link",this).text()+"'>"+$("title",this).text()+"</a></dt><dd>"+$("description",this).text()+"</dd>");
    });
  }
});
$("button").click(function(){
    //attr : class의 값을 체킹해서 if처리
    // css : display의 값을 체킹해서 if처리
    // toggle method 가용하여 처리
    $("dl").toggle("display");
  });
});// document ready
