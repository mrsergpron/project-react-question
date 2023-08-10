import React from "react";
import Question from "./Question";
import classes from "./ListQuestions.module.scss";

//лист с вопросами
const ListQuestions = ({ question, quality, onAnswerClick }) => {
  return (
    <div className={classes.list}>
      <Question
        question={question}
        quality={quality}
        onAnswerClick={onAnswerClick}
     
      />
    </div>
  );
};
export default ListQuestions;
