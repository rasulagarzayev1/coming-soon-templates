
(function($) {
    "use strict";
    if($('.time-countdown').length){  
            $('.time-countdown').each(function() {
            var $this = $(this), finalDate = $(this).data('countdown');
            $this.countdown(finalDate, function(event) {
                var $this = $(this).html(event.strftime('' + '<div class="counter-column"><span class="count">%D</span>Days</div> ' + '<div class="counter-column"><span class="count">%H</span>Hours</div> <br>  ' + '<div class="counter-column"><span class="count">%M</span>Minutes</div>  ' + '<div class="counter-column"><span class="count">%S</span>Seconds</div>'));
            });
         });
        }
})(window.jQuery);


function writeMessage(stringg) {
    var i = 0;
    var intervalId;
        intervalId = window.setInterval(function() {
            var message =document.querySelector("h1");
            message.innerHTML += stringg.charAt(i);
            i++;
            if (i > stringg.length){
                window.clearInterval(intervalId);
                i=0;
                setTimeout(function(){
                    message.innerHTML ="";
                    writeMessage("Our Site Is Coming Soon");
                },1200)
            }
        }, 100); 
  
    
}

writeMessage("Our Site Is Coming Soon");