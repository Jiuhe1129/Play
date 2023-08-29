$(window).on('load', function () {
  $('#loadingImage').hide();
  $('.content-container').css("display", "flex");
});

$(document).ready(function () {
  var currentDate = new Date();
  var year = currentDate.getFullYear();
  var month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  var day = currentDate.getDate().toString().padStart(2, '0');
  var formattedDate = year + '年' + month + '月' + day + '日';
  $('.time').text(formattedDate);

  if (month === '08' && day === '30') {
    $(".birthdays").text("今天是你的生日哦").addClass("fade-in");
    console.log("今天是8月30号");
  } else {
    $(".birthdays").text("今天不是你生日哦").addClass("fade-in");
    console.log("今天不是8月30号");
    // $("button").hide()
    // $(".bz").hide();
  }

  $(".content").hide()

  $(".title, .text, .birthdays").each(function (index) {
    var row = $(this);
    setTimeout(function () {
      row.css("opacity", "1");
    }, (index + 1) * 1500);
  });

  $("#birthdayButton").click(function () {
    $(".content").show()
    $(".banner").add(".content").css("transform", "translate(0%, -100vh)")
  });
  $("#BackButton").click(function () {
    console.log("a")
    $(".banner").add(".content").css("transform", "translate(0%, 0vh)")
  });
});

const timeline = gsap.timeline({
  duration: 0.3
});

timeline.fromTo('.cake-topping', {
  yPercent: -300,
  opacity: 0.5
},
  {
    yPercent: 0,
    opacity: 1
  });

timeline.to('.candle-container', {
  opacity: 1
});

function birthday() {
  var spanContents = ["9", "6", "9", "1", "5", "5", "3", "5"];

  $(".zfbkl span").each(function (index) {
    $(this).text(spanContents[index]);
  });
  $(".zfbkl span").css("color", "#fff")
  $(".content").css("font-size", "30px")
  $(".zfb .bz").text("上支付宝搜[口令红包]👆输上方口令抢红包")

  timeline.to('.flame-wrap', {
    opacity: 1,
    scale: 1,
    ease: "back.out"
  });

  timeline.to('canvas', {
    opacity: 1,
    ease: "back.out"
  });

  timeline.to('.greeting', {
    scale: 1,
    ease: "back.out"
  });

  timeline.to('.star', {
    opacity: 0.5,
    stagger: 0.05,
    onComplete: function () {
      gsap.to('.star', {
        scale: 0.25,
        repeat: -1,
        stagger: 0.1,
        yoyo: true,
        yoyoEase: "power1.out"
      });
    }
  });
}