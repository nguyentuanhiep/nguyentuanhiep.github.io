var questions = [
      {
        "question":"Quốc gia nào thuộc Châu Á ? ",
        "option1":"Việt Nam",
        "option2":"Đức",
        "option3":"Mỹ",
        "option4":"Úc",
        "answer":"1"
      },

      {
        "question":"Thủ đô của Việt Nam là gì ?",
        "option1":"Đà Nẵng",
        "option2":"Hải Phòng",
        "option3":"Hà Nội",
        "option4":"TP.Hồ Chí Minh",
        "answer":"3"
      },

      {
        "question":"Vịnh Hạ Long nằm ở tỉnh nào của Việt Nam ?",
        "option1":"Nghệ An",
        "option2":"Quảng Ninh",
        "option3":"Thanh Hóa",
        "option4":"Nam Định",
        "answer":"2"
      },

      {
        "question":"Slogan của Techmaster là gì ?",
        "option1":"Học là có việc",
        "option2":"Học, học nữa, học mãi",
        "option3":"Học xong là bá đạo",
        "option4":"Học xong là vô đối",
        "answer":"1"
      },

      {
        "question":"Ai đẹp trai nhất Techmaster ?",
        "option1":"Thầy Cường",
        "option2":"Thầy Huy",
        "option3":"Anh Bách",
        "option4":"Hiệp đẹp trai",
        "answer":"4"
      },

    ];
    
    var currentQuestion = 0;
      var score = 0;
      var totalQuestion = questions.length;
  
      function loadQuestion(questionIndex){
        q = questions[questionIndex];
        $('#question').html(q.question);
        $('p').html("Question " + (questionIndex + 1 ) + " of 5 ");
        $('#opt1').html(q.option1);
        $('#opt2').html(q.option2);
        $('#opt3').html(q.option3);
        $('#opt4').html(q.option4);
      }
  
      function loadNextQuestion(value){
        var selectedQuestion = value;
        var answer = selectedQuestion;    
        if(questions[currentQuestion].answer == answer){
          score += 1;
        }
        currentQuestion++;
  
  
        if(currentQuestion == totalQuestion){
          if(score < 5){
            $('#quizContainer').hide();
            $('#result').show();
            $('#backButton').show();
            $('#result').html("Rất tiếc bạn trả lời đúng " + score + "/5");
            return;
          }
          else{
            $('#quizContainer').hide();
            $('#Congratulations').show();
            
          }
        }
        loadQuestion(currentQuestion);
      }
  
      function startAgain(currentQuestion){
        score = 0 ;
        window.location.href = window.location.href;
        loadQuestion(currentQuestion);
      }
  
      loadQuestion(currentQuestion);

      function changeTheme() {
        $('.wrap').css('background-image','url(bokeh-1123768_960_720.jpg)');
        $('.opt').css({"background-color":"#ccffff", "color":"#ff6633"});
        $('.question').css({"border-image": "url(border.png) 30 stretch","color":"333300"});
        $('.p').css({"font-weight":"bold", "color":"#ff0066"});
      }
