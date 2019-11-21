import React from "react";
import "../assets/styles/QA.css";
class QA extends React.Component {
  state = {
    showAnswer: false
  };
  render() {
    return (
      <div className="QA">
        <div className="question">
          <span>{this.props.question}</span>
          <i
            className={`${
              this.state.showAnswer ? "fa fa-times" : "fa fa-plus"
            } right`}
            onClick={() => {
              if (this.state.showAnswer) {
                this.setState({
                  showAnswer: false
                });
              } else {
                this.setState({
                  showAnswer: true
                });
              }
            }}
          ></i>
        </div>
        <div
          className={`answer ${
            this.state.showAnswer ? "show-answer" : "hide-answer"
          }`}
        >
          {this.props.answer}
        </div>
      </div>
    );
  }
}

export default QA;
