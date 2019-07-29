
(function ($) {
    "use strict";
    if ($('.time-countdown').length) {
        $('.time-countdown').each(function () {
            var $this = $(this), finalDate = $(this).data('countdown');
            $this.countdown(finalDate, function (event) {
                var $this = $(this).html(event.strftime('' + '<div class="counter-column"><span class="count">%D</span>Days</div> ' + '<div class="counter-column"><span class="count">%H</span>Hours</div> ' + '<div class="counter-column"><span class="count">%M</span>Minutes</div>  ' + '<div class="counter-column"><span class="count">%S</span>Seconds</div>'));
            });
        });
    }
})(window.jQuery);


function writeMessage(stringg) {
  var i = 0;
  var intervalId;
  intervalId = window.setInterval(function() {
      var message =document.querySelector(".letters");
      message.innerHTML += stringg.charAt(i);
      console.log(stringg.charAt(i))
      i++;
      if (i > stringg.length) 
          window.clearInterval(intervalId);
  }, 80); 
}

writeMessage("Website is under development.Subscribe to be notified.");