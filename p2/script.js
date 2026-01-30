var br=0;

$(function () 
{
    $(".h").on("click", function () 
    {
        if (br >= 9) {
            alert("Too many favorites");
            return;
        }

        br++;

        $(this).next(".hc").css("visibility", "visible");

        var nova = "<tr data-id='" + $(this).attr("id") + "'><td>" + $(this).attr("id") + "</td></tr>";
        $(".tabela tbody").append(nova);
    });


    $(".hc").on("click", function () {
        $(this).css("visibility", "hidden");
        br--;
        var id = $(this).prev().attr("id");
        $(".tabela tbody").find("tr[data-id='" + id + "']").remove();
    });

    $(".hh").on("click", function () 
    {
        if (br >= 9) {
            alert("Too many favorites");
            return;
        }

        br++;

        $(this).next(".hcc").css("visibility", "visible");

        var nova = "<tr data-id='" + $(this).attr("id") + "'><td>" + $(this).attr("id") + "</td></tr>";
        $(".tabela tbody").append(nova);
    });

    $(".hcc").on("click", function () {
        $(this).css("visibility", "hidden");
        br--;
        var id = $(this).prev().attr("id"); 
        $(".tabela tbody").find("tr[data-id='" + id + "']").remove(); 
    });
});


var br2=0;

$(function () 
{
    $(".bi").on("click", function () 
    {
        if (br2 >= 9) {
            alert("You won't read that many books");
            return;
        }

        br2++;

        $(this).next(".bi2").css("visibility", "visible");

        var nova = "<tr data-id='" + $(this).attr("id") + "'><td>" + $(this).attr("id") + "</td></tr>";
        $(".tabela2 tbody").append(nova);
    });


    $(".bi2").on("click", function () {
        $(this).css("visibility", "hidden");
        br2--;
        var id = $(this).prev().attr("id");
        $(".tabela2 tbody").find("tr[data-id='" + id + "']").remove();
    });

    $(".bbi").on("click", function () 
    {
        if (br2 >= 9) {
            alert("You won't read that many books");
            return;
        }

        br2++;

        $(this).next(".bbi2").css("visibility", "visible");

        var nova = "<tr data-id='" + $(this).attr("id") + "'><td>" + $(this).attr("id") + "</td></tr>";
        $(".tabela2 tbody").append(nova);
    });

    $(".bbi2").on("click", function () {
        $(this).css("visibility", "hidden");
        br2--;
        var id = $(this).prev().attr("id"); 
        $(".tabela2 tbody").find("tr[data-id='" + id + "']").remove(); 
    });
});


$(".prof").on("click", function() {
    $(".overlay").css("visibility", "visible");
    $(".rectangle").css("visibility", "visible");
});

$(".overlay").on("click", function() {
    $(".overlay, .rectangle").css("visibility", "hidden");
});

$(".c").on("click", function (e) {
    e.stopPropagation();
});

$(".login").on("click", function () 
{
    var username = $(".username").val();
    var password = $(".password").val();
    
    if (username !== "") {
        $(".my").css("visibility", "visible");
    } 
    else {
        alert("No username");
    }

    if (password !== "") {
        $(".my").css("visibility", "visible");
    } 
    else {
        alert("No password");
    }
});

$(".profil").on("click", function() {
    $(".overlay2").css("visibility", "visible");
    $(".rectangle2").css("visibility", "visible");
});

$(".logout").on("click", function () {
    location.reload(true);
});

$(".fave").on("click", function() {
    $(".tabela").css("visibility", "visible");
});

$(".overlay2").on("click", function() {
    $(".overlay2, .rectangle2").css("visibility", "hidden");
});

$(".c").on("click", function (e) {
    e.stopPropagation();
});

$(".back").on("click", function () {
    $(".my, .overlay2, .rectangle2, .overlay, .rectangle").css("visibility", "hidden");
});

/*
$(".login").on("click", function() {
    $(".overlay, .rectangle").css("visibility", "hidden");
});

$(".login").on("click", function () {
    window.location.href = "index2.html";
});

$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});


$(".search").on("keyup", function () {
    var value = $(this).val().toLowerCase();

    $(".recommendation").each(function () {
        var id = $(this).attr("id").toLowerCase();

        $(this).toggle(id.indexOf(value) > -1);
    });
});

*/