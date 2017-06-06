// building the quiz

var questionCounter = 0;
var sect = 0;

var qIndex = 0;
var sIndex = 0;

var score = [];

var loadQuestion = function() {
	$('#quiz').empty();
	var quiz = document.getElementById('quiz');

	var quizQuestion = document.createElement('div');
		quizQuestion.className = 'quiz__question';

		var quizQuestionBackground = document.createElement('div');
			quizQuestionBackground.className = 'quiz__questionBackground';
			quizQuestionBackground.style.backgroundImage = 'url(' + data[sect][questionCounter].qImg + ')';
		quizQuestion.appendChild(quizQuestionBackground);

		var quizQuestionBackground = document.createElement('div');
			quizQuestionBackground.className = 'quiz__questionBackground quiz__questionBackground--show';
		quizQuestion.appendChild(quizQuestionBackground);

		var quizQuestionText = document.createElement('p');
			quizQuestionText.className = 'quiz__question--text';
			quizQuestionText.innerHTML = data[sect][questionCounter].q;
		quizQuestion.appendChild(quizQuestionText);

	quiz.appendChild(quizQuestion);


	var quizAnswer = document.createElement('div');
		quizAnswer.className = 'quiz__answer';

		for ( var i = 0; i < data[sect][questionCounter]['ans'].length; i ++ ){
			var answerButton = document.createElement('div');
			answerButton.className = 'quiz__answerButton';

				var answerButtonText = document.createElement('p');
				answerButtonText.className = 'quiz__answerButton--text';
				answerButtonText.innerHTML = data[sect][questionCounter]['ans'][i];

				answerButton.appendChild(answerButtonText);
			quizAnswer.appendChild(answerButton);
		}

	quiz.appendChild(quizAnswer);


	var quizBreadcrumb = document.createElement('div');
		quizBreadcrumb.className = 'quiz__breadcrumb';

		for ( var i = 0; i < data[sect].length; i ++ ){
			var quizBreadcrumbNode = document.createElement('div');

			if ( i == questionCounter ) {
				quizBreadcrumbNode.className = 'quiz__breadcrumb--node active';
			} else {
				quizBreadcrumbNode.className = 'quiz__breadcrumb--node';
			}

			quizBreadcrumb.appendChild(quizBreadcrumbNode);
		}

	quiz.appendChild(quizBreadcrumb);

	var quizNav = document.createElement('div');
		quizNav.className = 'quiz__nav';

		var quizNavNext = document.createElement('div');
			quizNavNext.className = 'quiz__navNext';

			var quizNavNextText = document.createElement('p');
				quizNavNextText.className = 'quiz__navNext--text';
				quizNavNextText.innerHTML = 'Next Question';

			quizNavNext.appendChild(quizNavNextText);

		quizNav.appendChild(quizNavNext);

	quiz.appendChild(quizNav);

	if ( questionCounter < data[sect].length - 1 ){
		qIndex = questionCounter;
		sIndex = sect;
		questionCounter ++;
	} else {
		qIndex = questionCounter;
		questionCounter = 0;
		if ( sect < data.length - 1 ){
			sect ++; //set functions
		}
	}


	$('.quiz__navNext').click(function(){
			$('#quiz')
				.filter(function(){ return ! $(this).is(":empty"); })
				.fadeOut(800, function(){ 
					loadQuestion();
					$('#quiz').fadeIn(800);
				});
	});


	$('.quiz__answerButton').click(function(){

		// this.classList.toggle("active");
		// checkAnswer(this.children[0].innerHTML);
		if ( this.children[0].innerHTML == data[sect][qIndex].a ){
			$(this).addClass('activeR');
			score.push(true);
		} else {
			$(this).addClass('activeW');
			score.push(false);		
			var rightAns = data[sIndex][qIndex].a;




			$(this).parent().children().children().filter(function(){
				return this.innerHTML == rightAns ;
				// console.log(this.innerHTML.indexOf(rightAns));
			}).parent().addClass('activeR');

		}

		$('.quiz__questionBackground').addClass("active");
		$('.quiz__questionBackground--show').addClass("active");
		$('.quiz__question--text').addClass("active");

		$('.quiz__answerButton').prop('onclick',null).off('click');
		
		var navPop = function(){$('.quiz__nav').animate({
			 top: "-=" + $('.quiz').height()/5,
		}, 800)};

		setTimeout(navPop, 2000);
	})


}

var score = [];


// $('.quiz_navNext').click(function(){              for next question
$('.quiz__navNext').click(function(){
			$('#quiz')
				.filter(function(){ return ! $(this).is(":empty"); })
				.fadeOut(800, function(){ 
					loadQuestion();
					$('#quiz').fadeIn(800);
				});
	});




var checkAnswer = function(answer){

	// console.log(answer);
	// console.log(data[sect][questionCounter-1].a);
	if ( answer == data[sect][questionCounter-1].a ){
		$(this).css('background-color', 'hsla( 140,  90%,  60%, 1 )')
	} else {
		console.log('nah');
	}

};

var test = function() {
	console.log('hey');
}




