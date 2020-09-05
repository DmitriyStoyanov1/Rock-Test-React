import {questionsData} from '../data/questions';
import store from './store';

export const GET_INITIAL_QUESTIONS = 'GET_INITIAL_QUESTIONS';
export const USER_ANSWERED_QUESTION = 'USER_ANSWERED_QUESTION';
export const COUNT_USER_RESULT = 'COUNT_USER_RESULT';

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const getInitialQuestions = (questionsLength) => {
  const randomValuesArray = [];


  while(randomValuesArray.length < questionsLength) {
    const randomValue = getRandomIntInclusive(0, questionsData.length - 1);

    if(!randomValuesArray.includes(randomValue)) {
      randomValuesArray.push(randomValue);
    }
  }

  return {
    type: GET_INITIAL_QUESTIONS,
    payload: randomValuesArray.map(index => questionsData[index])
  }
}

export const userAnsweredQuestion = (answer) => {
  return {
    type: USER_ANSWERED_QUESTION,
    payload: answer
  }
}

export const userAnswerResult = () => {
  const {questions, answers} = store.getState();

  const result = questions.reduce((acc, question) => question.correctAnswer === answers[question.id] ? acc + 1 : acc, 0);

  const correctPercent = result / questions.length * 100;

  let resultStatus = '';

  if (correctPercent <= 25) {
    resultStatus = 'HOMELESS';
  } else if (correctPercent > 25 && correctPercent <= 50) {
    resultStatus = 'KIRKOROV';
  } else if (correctPercent > 50 && correctPercent <= 75) {
    resultStatus = 'SHITGUY';
  } else if (correctPercent > 75 && correctPercent <= 90) {
    resultStatus = 'GOODGUY';
  } else if (correctPercent > 90 && correctPercent <= 100) {
    resultStatus = 'GODGUY';
  }

  console.log(correctPercent, 'correctPercent')
  console.log(resultStatus, 'resultStatus')

  const statusHashMap = {
    homeless: {
      background: './images/status1.jpg',
      text: 'Разочарование... Что сказать? Вы просто бомж :('
    },
    kirkorov: {
      background: './images/status2.jpg',
      text: 'Вы Филипп Киркоров'
    },
    shitguy: {
      background: './images/status3.jpg',
      text: 'Вы немножко в теме. Совсем немножко...'
    },
    goodguy: {
      background: './images/status4.jpg',
      text: 'Неплохо разбираетесь в теме. Джеймс и Ларс это признают!'
    },
    godguy: {
      background: './images/status5.jpg',
      text: 'Вы настоящий HEAVY METAL GOD!'
    }
  }
  
  let finalBackgroundRender = 0;
  let finalTextRender = 0;
  
  if(resultStatus === 'HOMELESS') {
    finalBackgroundRender = statusHashMap.homeless.background;
    finalTextRender = statusHashMap.homeless.text;
  }

  if(resultStatus === 'KIRKOROV') {
    finalBackgroundRender = statusHashMap.kirkorov.background;
    finalTextRender = statusHashMap.kirkorov.text;
  }

  if(resultStatus === 'SHITGUY') {
    finalBackgroundRender = statusHashMap.shitguy.background;
    finalTextRender = statusHashMap.shitguy.text;
  }

  if(resultStatus === 'GOODGUY') {
    finalBackgroundRender = statusHashMap.goodguy.background;
    finalTextRender = statusHashMap.goodguy.text;
  }

  if(resultStatus === 'GODGUY') {
    finalBackgroundRender = statusHashMap.godguy.background;
    finalTextRender = statusHashMap.godguy.text;
  }

  return {
    type: COUNT_USER_RESULT,
    payload: {
      result,
      resultStatus,
      finalBackgroundRender,
      finalTextRender
    }
  }
}