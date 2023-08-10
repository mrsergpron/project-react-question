import "./Answer.css";
//ответ
const Answer = ({ answer, onAnswerClick }) => {
  return (
    <p
      className="answer"
      onClick={(event) => onAnswerClick(answer.text, event)}
    >
      {answer.text}
    </p>
  );
};
export default Answer;
