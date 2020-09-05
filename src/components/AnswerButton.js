import React from 'react';

export const AnswerButton = (props) => {
  return (
    <button onClick={props.onClick}>{props.answerText}</button>
  )
}