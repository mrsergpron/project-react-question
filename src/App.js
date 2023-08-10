import React, { Component } from "react";
import ListQuestions from "./components/ListQuestions";
import Finished from "./components/Finished";

import classes from "./App.module.scss";

class App extends Component {
  state = {
    numberQuestion: 0,
    isFinished: false,
    yourRightAnswers: 0,
    id: null,
    quiz: [
      {
        id: 1,
        question: "Начало производства автомобилей BMW?",
        rightAnswer: "1917",
        result: false,
        answers: [
          { text: "1917" },
          { text: "1918" },
          { text: "1919" },
          { text: "1920" },
        ],
      },
      {
        id: 2,
        question: "Начало производства автомобилей Toyota Land Cruiser 100?",
        rightAnswer: "1998",
        result: false,
        answers: [
          { text: "1996" },
          { text: "1997" },
          { text: "1998" },
          { text: "1999" },
        ],
      },
    ],
  };

  //перезапуск опроса
  onRetry = () => {
    this.setState({ numberQuestion: 0 });
    this.setState({ yourRightAnswers: 0 });
    this.setState({ isFinished: false });
  };

  //клик по варианту ответа
  onAnswerClickHandler = (answer, event) => {
    const quiz = this.state.quiz;

    //если ответ верен перейти на следующий вопрос
    if (quiz[this.state.numberQuestion].rightAnswer === answer) {
      //маркер правильного ответа
      const newQuiz = this.state.quiz.slice();
      newQuiz[this.state.numberQuestion].result = true;
      this.setState({ quiz: newQuiz });

      //добавляем ответу зеленый цвет
      event.target.classList.add("success");

      //добавить в состояние элемент по которому был сделан клик
      this.setState({ id: event.target });

      //количество правильных ответов
      this.setState({ yourRightAnswers: this.state.yourRightAnswers + 1 });

      const pause = setTimeout(() => {
        if (this.state.quiz.length > this.state.numberQuestion + 1) {
          this.setState({ numberQuestion: this.state.numberQuestion + 1 });
          this.state.id.classList.remove("success");
          //отчищаем память
          clearTimeout(pause);
          //иначе выводим компнент с количеством правильных ответов
        } else {
          console.log("Вопросов больше нет!");

          //выводим окно с результатами
          this.setState({ isFinished: true });
          //отчищаем память
          clearTimeout(pause);
        }
      }, 1000);
    }
    // если ответ не верен
    else {
      console.log("Ваш ответ не верен!");

      //маркер правильного ответа
      const newQuiz = this.state.quiz.slice();
      newQuiz[this.state.numberQuestion].result = false;
      this.setState({ quiz: newQuiz });

      //добавляем ответу красный цвет
      event.target.classList.add("error");

      //добавить в состояние элемент по которому был сделан клик
      this.setState({ id: event.target });

      const pause = setTimeout(() => {
        if (this.state.quiz.length > this.state.numberQuestion + 1) {
          this.setState({ numberQuestion: this.state.numberQuestion + 1 });
          this.state.id.classList.remove("error");

          clearTimeout(pause);
          //иначе выводим компнент с количеством правильных ответов
        } else {
          console.log("Вопросов больше нет!");

          this.setState({ isFinished: true });

          clearTimeout(pause);
        }
      }, 1000);
    }
  };
  render() {
    return (
      <div className={classes.app}>
        {this.state.isFinished ? null : <h1>Выберите правильный ответ:</h1>}
        {this.state.isFinished ? (
          <Finished
            answers={this.state.quiz}
            quality={this.state.quiz.length}
            onRetry={this.onRetry}
            yourRightAnswers={this.state.yourRightAnswers}
          />
        ) : (
          <ListQuestions
            question={this.state.quiz[this.state.numberQuestion]}
            quality={this.state.quiz.length}
            onAnswerClick={this.onAnswerClickHandler}
          />
        )}
      </div>
    );
  }
}
export default App;
