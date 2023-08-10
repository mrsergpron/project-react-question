import "./Button.css";

const Button = (props) => {
  return (
    <div className="button" onClick={() => props.onRetry()}>
      ПОВТОРИТЬ
    </div>
  );
};

export default Button;
