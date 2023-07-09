var quizData = [
    {
      id: 1,
      question: "What is capital of india?",
      name: 'one',
      choice1: 'Bangalore',
      choice2: 'New Delhi',
      choice3: "Mumbai",
      choice4: "Kolkata",
      answer: 'New Delhi',
    },
    {
      id: 2,
      question: "What is capital of Tamil Nadu?",
      name: 'two',
      choice1: 'Bangalore',
      choice2: 'Mumbai',
      choice3: 'Chennai',
      choice4: 'Agra',
      answer: 'Chennai',
    },
    {
      id: 3,
      question: "What is capital of Maharastra?",
      choice1: 'New Delhi',
      choice2: 'Chennai',
      choice3: 'Agra',
      choice4: 'Mumbai',
      answer: 'Mumbai',
    },
    {
      id: 4,
      question: "What is capital of West Bengal?",
      name: 'four',
      choice1: 'Agra',
      choice2: 'Mumbai',
      choice3: 'New Delhi',
      choice4: 'Kolkata',
      answer: 'Kolkata',
    },
    {
      id: 5,
      question: "What is capital of Karnataka?",
      name: 'five',
      choice1: 'Bangalore',
      choice2: 'Mumbai',
      choice3: 'Kolkata',
      choice4: 'Chennai',
      answer: 'Bangalore',
    },
  ];
  
  var form = document.getElementById('quiz-form');
  
  for (let i = 0; i < 5; i++) {
    createQuestion(i);
  }
  
  function createQuestion(id) {
    var question = document.getElementById('question');
    var questionName = document.createElement('p');
    var counter = id + 1;
    questionName.innerHTML += 'Q' + counter + '.';
    questionName.innerHTML += quizData[id].question;
    question.appendChild(questionName);
    callAddChoice(id);
    question.innerHTML += '<hr>';
    form.appendChild(question);
  }
  
  function callAddChoice(id) {
    addChoice(quizData[id].name, quizData[id].choice1, quizData[id].choice1);
    addChoice(quizData[id].name, quizData[id].choice2, quizData[id].choice2);
    addChoice(quizData[id].name, quizData[id].choice3, quizData[id].choice3);
    addChoice(quizData[id].name, quizData[id].choice4, quizData[id].choice4);
  }
  
  function addChoice(name, value, text) {
    var question = document.getElementById('question');
    var label = document.createElement('label');
    var element = document.createElement('input');
    element.setAttribute('type', 'radio');
    element.setAttribute('value', value);
    element.setAttribute('name', name);
    label.appendChild(element);
    label.innerHTML += ' ' + '   ' + text;
    label.innerHTML += '<br>';
    question.appendChild(label);
  }
  var checkedAnswers = [];
  var submitButtonWrapper = document.createElement('div');
  submitButtonWrapper.id = 'submit-button-wrapper';
  var submit = document.createElement('button');
  submit.type = 'submit';
  submit.innerHTML = 'Submit';
  submit.id = 'submit';
  submitButtonWrapper.appendChild(submit);
  form.appendChild(submitButtonWrapper);
  
  submit.onclick = function (e) {
    e.preventDefault();
    for (let i = 0; i < 5; i++) {
      var val = getRadioVal(form, quizData[i].name);
      checkedAnswers[i] = val;
    }
  
    var counter = 0;
    for (let i = 0; i < checkedAnswers.length; i++) {
      if (checkedAnswers[i] == quizData[i].answer) {
        counter++;
      }
    }
    document.getElementById('score').innerHTML = counter + '/5';
  };
  
  function getRadioVal(form, name) {
    var val;
    var radios = form.elements[name];
    for (var i = 0, len = radios.length; i < len; i++) {
      if (radios[i].checked) {
        val = radios[i].value;
        break;
      }
    }
    return val;
  }
  