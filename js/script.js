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

  var targetDate = new Date(currentDate.getFullYear(), 7, 30); // 8月是第 7 个月，所以月份参数传入 7

  function updateCountdown() {
    var timeDiff = targetDate - new Date();

    if (timeDiff > 0) {
      var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      var hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      var countdownText = days + '天 ' + hours + '小时 ' + minutes + '分钟 ' + seconds + '秒';
      $('#countdown-content').text(countdownText);
      $("#countdown").show();
      $(".box").hide()
    } else {
      $(".box").show()
      $("#countdown").hide()
    }
  }

  $(".girl").css("left", "-100px")
  $(".girl-b").css("right", "-100px")

  updateCountdown(); // 更新倒计时

  setInterval(updateCountdown, 1000);

  if (month === '08' && day === '30') {
    $(".birthdays").text("今天是你的生日哦").addClass("fade-in");
    console.log("今天是8月30号");
  } else {
    $(".birthdays").text("今天不是你生日哦").addClass("fade-in");
    console.log("今天不是8月30号");
    $("button").hide()
    $(".bz").hide();
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
    $(".girl").css("top", "670px")
    $(".girl-b").css("bottom", "-275px")
  });
  $("#BackButton").click(function () {
    $(".girl-b").css("bottom", "-100px")
    $(".girl").css("top", "-30px")
    $(".banner").add(".content").css("transform", "translate(0%, 0vh)")
  });
});

function openAlipayApp() {
  // 判断是否在移动设备上
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    var urlScheme = 'alipayqr://platformapi/startapp?saId=88886666'; // 支付宝 App 的 URL Scheme

    // 使用 iframe 打开支付宝 App
    var iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = urlScheme;
    document.body.appendChild(iframe);

    // 如果支付宝 App 不可用，则跳转至支付宝网页版
    setTimeout(function () {
      document.location.href = 'https://www.alipay.com/';
    }, 3000); // 假设 3 秒后跳转
  } else {
    // 非移动设备，处理逻辑...
    console.log('请使用移动设备访问此页面！');
  }
}



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
  var spanContents = ["7", "5", "6", "3", "5", "0", "3", "5"];

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