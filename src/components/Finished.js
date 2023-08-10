import Button from "./Button";
import "./Finished.css";

const Finished = (props) => {
  return (
    <div className="finished">
      <h1>ВАШИ РЕЗУЛЬТАТЫ:</h1>
      {props.answers.map((i, index) => {
        return (
          <div key={index}>
            <small>{i.id}.</small> {i.question}
            {i.result ? (
              <i className="fa fa-check finishedSuccess"></i>
            ) : (
              <i className="fa fa-times finishedError"></i>
            )}
          </div>
        );
      })}

      <div className="rightAnswers">
        Правильно {props.yourRightAnswers} из {props.quality}
      </div>
      <Button onRetry={props.onRetry} />
    </div>
  );
};

export default Finished;
