function startGame() {
  $(document).ready(function () {
  
  var arr=["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "a10", "a11", "a12", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "a10", "a11", "a12"];
  var current=null;
  var count = 0;
  var time = 60;
  var run = null;
  var maxTime = time;
  var point = 0;
  var numberCards = 12;

    function playSound (n) {
      document.getElementById(n + "-sound").load();
      document.getElementById(n + "-sound").play()
    }

    function shuffle() {
      var currentIndex = arr.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;

          // And swap it with the current element.
          temporaryValue = arr[currentIndex];
          arr[currentIndex] = arr[randomIndex];
          arr[randomIndex] = temporaryValue;
      }

      return arr;
    }



  function loadContent() {
      arr = shuffle(arr);
      for (var n = "", e = 0; e < arr.length; e++)
          n += '<div class="grid"><div class="card" data="' + arr[e] + '" onclick="flip(this)"><div class="front"><img src="img/LolPic.jpg"/></div><div class="back"><img src="img/' + arr[e] + '.jpg"/></div></div></div>';
      $(".content").html(n);
    
  }
  loadContent();

  function closeModal() {
    $(".modal-backdrop").css("display", "none"),
    $(".begin").hide()
  }
  closeModal();

  function stopGame() {
    if (null != clearInterval(run)) {
      run = null;
    }
    $(".card").css("pointer-events", "none")
}

  var run = setInterval(function(){
    time--;
    $("progress").val(time / maxTime * 100)
      console.log(time)
    //Hết thời gian
    if (time == 0) {
      clearInterval(run);
      $('#box').hide();
      $('.lose').show();
      playSound("lose");
      stopGame();
    }
  }, 1000);
     
  
    $('.card').on('click',function(){
    var test =this;
    // console.log ($(test));
    // console.log(test);
    // console.log($(this));
    $(test).addClass('flipped');
    playSound("flip");
    $(test).css('pointer-events', 'none');

      if(!current) {
      current = $(test);
      console.log (current);
      } else {
        if (current.attr('data') != $(this).attr('data')) {
          //Khác nhau
          // console.log('Khác nhau');
          setTimeout(function(){
            $(test).toggleClass('flipped');
            current.toggleClass('flipped');
            current = null;
            playSound("incorrect")
          }, 600);
          $('.card').css('pointer-events', 'auto');
  
        } else {
          //Giống nhau
          setTimeout(function(){
            // console.log ("giong" +this);
            // console.log ("giong" +current);
            // console.log (this==current);
            current.css('opacity', '0');
            $(test).css('opacity', '0');
            current = null;
            playSound("correct")
            
            count ++;
            
            if (count == 12) {
              $('#box').hide();
              $('.win').show();
              playSound("win");
              stopGame();
            };
          }, 600);
          
        }
        
      }
    });
   
})
}

function playAgain() {
  window.location.href = window.location.href;
}


