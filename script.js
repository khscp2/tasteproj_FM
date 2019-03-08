$(document).ready(function() 
{
  var s = document.forms["inputs"]["service"].value;
  var f = document.forms["inputs"]["food"].value;
  var a = document.forms["inputs"]["atmos"].value;
  $("[name='submit']").click(function(e) 
  {
    e.preventDefault();
    
    if(s = (document.forms["inputs"]["service"].value*10)/3){}
    if(f = (document.forms["inputs"]["food"].value*10)/3){}
    if(a = (document.forms["inputs"]["atmos"].value*10)/3){}

    $(".progress-bar-info").css("width", s + "%");
    $(".progress-bar-success").css("width", f + "%");
    $(".progress-bar-warning").css("width", a + "%");

    $(".alert-danger").css("display", "none");
  });
});