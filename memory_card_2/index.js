  $(document).ready(function () {
  
  var arr=["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "a10", "a11", "a12", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "a10", "a11", "a12"];
  var current=null;
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

  $('.card').on('click',function(){
    var test =this;
    console.log ($(test));
    console.log(test);
    console.log($(this));
    $(test).addClass('flipped');
    $(test).css('pointer-events', 'none');

    if(!current) {
      current = $(test);
      console.log (current);
    } else {
        if (current.attr('data') != $(this).attr('data')) {
          //Khác nhau
          console.log('Khác nhau');
          setTimeout(function(){
            $(test).toggleClass('flipped');
            current.toggleClass('flipped');
            current = null;
          }, 500);
          $('.card').css('pointer-events', 'auto');

          
          
        } else {
          //Giống nhau
          setTimeout(function(){
            console.log ("giong" +this);
            console.log ("giong" +current);
            console.log (this==current);
            current.css('opacity', '0');
            $(test).css('opacity', '0');
            current = null;
          }, 400);
          
        }
        
    }

  });


})
