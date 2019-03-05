$(document).ready(function() 
{
  var percentage = 10;
  var s = document.getElementById("service").value;
  $("[name='submit']").click(function(e) 
  {
    e.preventDefault();
    $(".progress-bar-info").css("width", s + "%");
    $(".progress-bar-success").css("width", s + "%");
    $(".progress-bar-warning").css("width", percentage + "%");
    
    console.log(parseInt(s));
    console.log(typeof s);
  });
});