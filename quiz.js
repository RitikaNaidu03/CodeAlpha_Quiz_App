var questionBank= [
    {
        question : 'What does the abbreviation HTML stand for?',
        option : ['HighText Machine Language','HyperText and links Markup Language','HyperText Markup Language','None of these'],
        
        answer : 'HyperText Markup Language'
    },
    {
        question : ' How to create an ordered list in HTML?',
        option : ['ul tag','ol tag','li tag','i tag'],
        answer : 'ol tag'
    },
    {
        question : 'Which type of JavaScript language is ',
        option : ['Object-Oriented','Object-Based','Literature', 'Assembly-language','High-Level'],
        answer : 'Object-Based'
    },
    {
        question : 'CSS stands for -',
        option : ['Cascade style sheets','Color and style sheets','Cascading style sheets','None of the above'],
        answer : 'Cascading style sheets'
    },
    {
        question : 'The "function" and " var" are known as:',
        option : ['Keywords','Data types','Declaration statements','Prototypes'],
        answer : 'Declaration statements'
    }
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//for display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//for display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

// next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button 
function backToQuiz(){
    location.reload();
}

//check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();