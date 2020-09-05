import React, { Component } from "react";
import { connect } from "react-redux";
import "./global.css";
import { BATMAN_SCREEN, GAME_SCREEN, FINAL_SCREEN, START_SCREEN } from './store/screenActions';
import { getInitialQuestions, userAnsweredQuestion, userAnswerResult } from './store/questionActions'  
import { AnswerButton } from './components/AnswerButton';

class App extends React.Component {

  handleStartButtonClick = () => {
    this.props.dispatch({ type: BATMAN_SCREEN }) 
  }

  handleNewGameClick = () => {
    this.props.dispatch({ type: START_SCREEN })
  }

  
  handleBatmanButtonClick = () => {
    // this.props.dispatch({ type: BATMAN_SCREEN }) 
    let questionsCount = prompt('Выберите количество вопросов от 5 до 74', 15);

    if(isNaN(parseInt(questionsCount)) || questionsCount < 5 || questionsCount > 74) {
      questionsCount = 17;
    }
    this.props.dispatch(getInitialQuestions(questionsCount));
    this.props.dispatch({ type: GAME_SCREEN });
  }

  handleAnswerButtonClick = (answer) => {
    this.props.dispatch(userAnsweredQuestion({ [this.props.question.id]: answer }));

    if(this.props.currentQuestion + 1 === this.props.questionsLength) {
      this.props.dispatch({ type: FINAL_SCREEN });
      this.props.dispatch(userAnswerResult());

    }
  }

  render() {
    console.log(this.props)

    return (
      <div className="game">
        <div className="questions_part">
          <div className="screen">
            {this.props.screen === 'START_SCREEN' && (
              <div className='start'>
                <button onClick={this.handleStartButtonClick}>Hey! Ho! Let's Go!</button>
              </div>
            )}

            {this.props.screen === 'BATMAN_SCREEN' && (
              <div className='batman'>
                <p>Хотите узнать как хорошо вы разбираетесь
                   в мире рок музыки? Если да, тогда поехали!</p>
                <button onClick={this.handleBatmanButtonClick}>GO! GO! GO!</button>
              </div>
            )}

            {this.props.screen === 'GAME_SCREEN' && (
              <div className="render_questions">
                <div className="screen question" style={{backgroundImage: `url(${this.props.question.background})`}}>
                  <div className="counter">{`${this.props.currentQuestion + 1}/${this.props.questionsLength}`}</div>
                </div>
                <p>{this.props.question.question}</p>
                <audio controls={true} src={this.props.question.song}></audio>
              </div>
            )}
            {this.props.screen === 'FINAL_SCREEN' && (
              <div className="final_tab"> 
              <div className="screen question" style={{backgroundImage: `url(${this.props.finalBackgroundRender})`}}>
              </div>
              <p>{`${this.props.finalTextRender}`}</p>
              <p className="final_count">{`Ответы:${this.props.result}/${this.props.questionsLength}`}</p>
              </div>
            )}
         </div>
        </div>
        <div className="asks_part">
          {this.props.screen === 'GAME_SCREEN' && (
            <React.Fragment>
              <AnswerButton onClick={() => this.handleAnswerButtonClick('a')} answerText={this.props.question.answers.a}/>
              <AnswerButton onClick={() => this.handleAnswerButtonClick('b')} answerText={this.props.question.answers.b}/>
              <AnswerButton onClick={() => this.handleAnswerButtonClick('c')} answerText={this.props.question.answers.c}/>
              <AnswerButton onClick={() => this.handleAnswerButtonClick('d')} answerText={this.props.question.answers.d}/>
            </React.Fragment>
          )}
          {this.props.screen === 'FINAL_SCREEN' && (
          <React.Fragment>
            <button id="playAgain" onClick={this.handleNewGameClick}> Играть заново!</button>
          </React.Fragment>
          )}

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    screen: state.screen,
    question: state.questions[state.questionIndex] || {},
    questionsLength: state.questions.length,
    currentQuestion: state.questionIndex,
    result: state.result,
    resultStatus: state.resultStatus,
    finalBackgroundRender: state.finalBackgroundRender,
    finalTextRender: state.finalTextRender
  }
};

export default connect(mapStateToProps)(App);
