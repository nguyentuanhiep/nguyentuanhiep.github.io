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

    var container = document.getElementById('quizContainer');
    var questionEl = document.getElementById('question');

    var opt1 = document.getElementById('opt1');
    var opt2 = document.getElementById('opt2');
    var opt3 = document.getElementById('opt3');
    var opt4 = document.getElementById('opt4');
    var nextButton = document.getElementById('nextButton');
    var result = document.getElementById('result');
    var p = document.getElementById('p');
    var backButton = document.getElementById('backButton')
    var Congratulations = document.getElementById('Congratulations')

    function loadQuestion(questionIndex){
      q = questions[questionIndex];
      question.innerHTML = q.question;
      p.innerHTML = "Question " + (questionIndex + 1 ) + " of 5 ";
      opt1.innerHTML = q.option1;
      opt2.innerHTML = q.option2;
      opt3.innerHTML = q.option3;
      opt4.innerHTML = q.option4;
    }

    function loadNextQuestion(){
      var selectedQuestion = document.querySelector('input[type=radio]:checked');
      if (!selectedQuestion){
        alert("Bạn phải chọn đáp án");
        return;
      }

      var answer = selectedQuestion.value;
      if(questions[currentQuestion].answer == answer){
        score += 1;
      }

      selectedQuestion.checked = false;
      currentQuestion++;

      if(currentQuestion == totalQuestion - 1){
        nextButton.textContent = "Finish";
      }

      if(currentQuestion == totalQuestion){
        if(score < 5){
          container.style.display = 'none';
          result.style.display = "";
          backButton.style.display = "";
          result.textContent = "Bạn trả lời đúng " + score + "/5";
          return;
        }
        else{
          container.style.display = 'none';
          Congratulations.style.display = "";  
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


// inject du lieu vao --- injectFunc(0), text vao span, value vao input

// click next -- check nguoi choi da chon chua ---> chon roi: kiem tra value dc chon, so sanh, roi injectFunc(current++), if current == 5
// 
