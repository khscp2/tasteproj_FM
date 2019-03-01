function ratingSubmit(){
    var s = document.forms["inputs"]["service"].value;
    var f = document.getElementById("food").value;
    var a = document.getElementById("atmos").value;

    $(".progress-bar-info").css("width", s + "%").attr("aria-valuenow", s);
    $(".progress-bar-success").css("width", f + "%").attr("aria-valuenow", f);
    $(".progress-bar-warning").css("width", a + "%").attr("aria-valuenow", a);
}