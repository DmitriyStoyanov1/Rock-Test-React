import {questionsData} from '../data/questions';

const initialState = {
  screen: 'START_SCREEN',
  questions: [],
  questionIndex: 0,
  answers: {},
  result: '',
  resultStatus: ''
  //BATMAN_SCREEN, GAME_SCREEN_, FINAL_SCREEN
}

export default function rootReducer (state = initialState, action) {
  console.log(action, 'action')

  if(action.type === 'BATMAN_SCREEN') {
    return {
      ...state,
      screen: 'BATMAN_SCREEN'
    }
  }

  if(action.type === 'GET_INITIAL_QUESTIONS') {
    return {
      ...state,
      questions: action.payload
    }
  }

  if(action.type === 'GAME_SCREEN') {
    return {
      ...state,
      screen: 'GAME_SCREEN',
    }
  }

  if(action.type === 'USER_ANSWERED_QUESTION') {
    return {
      ...state,
      answers: {
        ...state.answers,
        ...action.payload
      },
      questionIndex: state.questionIndex + 1
    }
  }

  if(action.type === 'COUNT_USER_RESULT') {
    return {
      ...state,
      result: action.payload.result,
      resultStatus: action.payload.resultStatus,
      finalBackgroundRender: action.payload.finalBackgroundRender,
      finalTextRender: action.payload.finalTextRender
    }
  }

  if(action.type === 'FINAL_SCREEN') {
    return {
      ...state,
      screen: 'FINAL_SCREEN',
    }
  }

  if(action.type === 'START_SCREEN') {
    return {
      ...initialState
    }
  }


  return state;
}