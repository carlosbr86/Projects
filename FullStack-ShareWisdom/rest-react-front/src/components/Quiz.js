import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// import Question from '../components/Question';
// import QuestionCount from '../components/QuestionCount';
// import AnswerOption from '../components/AnswerOption';

function AnswerOption(props) {

  return (
    <li className="answerOption">
      <input
        type="radio"
        className="radioCustomButton"
        name="radioGroup"
        checked={props.answerType === props.answer}
        id={props.answerType}
        value={props.answerType}
        disabled={props.answer}
        onChange={props.onAnswerSelected}
      />
      <label className="radioCustomLabel" htmlFor={props.answerType}>
        {props.answerContent}
      </label>
    </li>
  );

}

AnswerOption.propTypes = {
  answerType: React.PropTypes.string.isRequired,
  answerContent: React.PropTypes.string.isRequired,
  answer: React.PropTypes.string.isRequired,
  onAnswerSelected: React.PropTypes.func.isRequired
};


function QuestionCount(props) {

  return (
    <div className="questionCount">
      Question <span>{props.counter}</span> of <span>{props.total}</span>
    </div>
  );

}

function Question(props) {

  return (
    <h2 className="question">{props.content}</h2>
  );

}

Question.propTypes = {
  content: React.PropTypes.string.isRequired
};

QuestionCount.propTypes = {
  counter: React.PropTypes.number.isRequired,
  total: React.PropTypes.number.isRequired
};
function Quiz(props) {

  function renderAnswerOptions(key) {
    return (
      <AnswerOption key={key.content} answerContent={key.content} answerType={key.type} answer={props.answer}
        questionId={props.questionId} onAnswerSelected={props.onAnswerSelected} />
    );
  }

  return (
    <ReactCSSTransitionGroup className="container" component="div" transitionName="fade" transitionEnterTimeout={800}
      transitionLeaveTimeout={500} transitionAppear transitionAppearTimeout={500}>
      <div key={props.questionId}>
        <QuestionCount counter={props.questionId} total={props.questionTotal}/>
        <Question content={props.question} />
        <ul className="answerOptions"> {props.answerOptions.map(renderAnswerOptions)} </ul>
      </div>
    </ReactCSSTransitionGroup>
  );
}

Quiz.propTypes = {
  answer: React.PropTypes.string.isRequired,
  answerOptions: React.PropTypes.array.isRequired,
  question: React.PropTypes.string.isRequired,
  questionId: React.PropTypes.number.isRequired,
  questionTotal: React.PropTypes.number.isRequired,
  onAnswerSelected: React.PropTypes.func.isRequired
};

export default Quiz;