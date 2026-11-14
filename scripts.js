$(document).ready(function () {

  // Zvaigžņu fons
  for (var i = 0; i < 150; i++) {
    $("<div class='star'></div>").css({
      top: Math.random() * 100 + "%",
      left: Math.random() * 100 + "%",
      opacity: Math.random()
    }).appendTo("body");
  }

  // Virsraksts parādās lēnām
  $("#title").fadeIn(2500);

  // 1. EFEKTS – hide() un show()
  $("#hide").click(function () {
    $("p.intro").hide(600);
  });
  $("#show").click(function () {
    $("p.intro").show(600);
  });

  // 2. EFEKTS – slideToggle()
  $("#slideBtn").click(function () {
    $("#stepsPanel").slideToggle(700);
    $(this).text($(this).text() === "Rādīt soļus" ? "Slēpt soļus" : "Rādīt soļus");
  });

  // 3. EFEKTS – fadeToggle()
  $("#fadeBtn").click(function () {
    $("#advice").fadeToggle(1000);
  });

  // 4. EFEKTS – animate()
  $("#saberOn").click(function () {
    $("#blade").stop().animate({ width: "300px" }, 800);
  });
  $("#saberOff").click(function () {
    $("#blade").stop().animate({ width: "0px" }, 500);
  });

  // 5. EFEKTS – fadeOut() + fadeIn()
  var quotes = [
    "„Tavs fokuss nosaka tavu realitāti.” – Kvai-Gons Džins",
    "„Lielākais skolotājs ir neveiksme.” – Joda",
    "„Ikviens ceļojums sākas ar pirmo soli.”",
    "„Tu esi stiprāks, nekā tev šķiet.”",
    "„Nākotne vienmēr ir kustībā – veido to pats!”"
  ];
  var index = 0;

  $("#quoteBtn").click(function () {
    $("#quote").fadeOut(400, function () {
      $(this).text(quotes[index]).fadeIn(800);
      index = (index + 1) % quotes.length;
    });
  });

});
