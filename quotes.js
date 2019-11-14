function overlayOne() {
    $("#options").toggle(800);
     document.getElementById("firstOverlay").style.display = "block";
}

function off() {
  document.getElementById("firstOverlay").style.display = "none";
}
//Who are you?
$document.ready(function(){
    $("#whoRu").click(function(){
        
    });
})
function wau(){
    $("#hideCardOne").hide(1000);
    $("#firstCard1").show(1000);
     $("#firstCard2").show(1500);
      $("#firstCard3").show(2000);
    $("#firstContent").fadeIn(4000);
}
function f3image(){
    $("#first3image").show(2000);
    document.getElementById("missyou").innerHTML = "I miss you so much da kuttyma";
}
function msg(){
    $("#textOne").fadeOut();
    document.getElementById("msgOne").innerHTML = "Enna Kuttyma correctah Answer pannu ->";
    $("#msgOne").show(1000);
}