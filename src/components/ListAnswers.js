import Answer from "./Answer";

//лист с ответами
const ListAnswers = ({ question, onAnswerClick }) => {
  return (
    <>
      {question.answers.map((answer, index) => (
        <Answer answer={answer} key={index} onAnswerClick={onAnswerClick} />
      ))}
    </>
  );
};
export default ListAnswers;
