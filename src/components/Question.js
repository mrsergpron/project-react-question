import React from "react";
import ListAnswers from "./ListAnswers";
import classes from "./Question.module.scss";

//вопрос
const Question = ({ question, quality, onAnswerClick }) => {
  return (
    <div className={classes.question}>
      <div className={classes.title}>
        <p>
          <small>{question.id}.</small> {question.question}
        </p>
        <p>
          {question.id} из {quality}
        </p>
      </div>
      <div className={classes.answers}>
        <ListAnswers question={question} onAnswerClick={onAnswerClick} />
      </div>
    </div>
  );
};
export default Question;
