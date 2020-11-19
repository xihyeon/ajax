$(function(){
  $.ajax(){
    url:'data.xml',
    dataType:'xml',
    success:function(data){
      $("items",data).each(function(){
        $("dl").append('<dt><a href="'+$("link",this).text()+'">'+$("title",this).text()+'</a></dt><dd>"'+$("discription",this).text()+'"<dd>');
      });
    };
  };
  $("button").click(function(){
    $(this).addClass("on");
  });
});
