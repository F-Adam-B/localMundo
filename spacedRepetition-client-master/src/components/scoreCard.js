import React, { Component } from 'react';
import requiresLogin from './requires-login';
import { connect } from 'react-redux';

export class ScoreCard extends Component {
	render() {
		let response;
		if (this.props.answerResponse === true) {
			response = <div className="answerCorrect">Correcto! + 1</div>;
		} else if (this.props.answerResponse === false) {
			response = <div className="answerIncorrect">Incorrecto! - 1 </div>;
		}
		return (
			<div className="scoreCardWrapper">
				<div className="dashboard-username">{this.props.username}</div>
				<div className="userScore">Score: {this.props.runningScore}</div>
				<div className="responseFeedback">{response}</div>
				{/* <div className="correctAnswer">{correctAnswer}</div> */}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	username: state.auth.currentUser.username,
	runningScore: state.answers.score,
	answerResponse: state.answers.toggleFeedback,
	correctAnswer: state.next.data.answer,
});
export default requiresLogin()(connect(mapStateToProps)(ScoreCard));
