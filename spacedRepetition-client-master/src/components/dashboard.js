import React from 'react';
import requiresLogin from './requires-login';
import { connect } from 'react-redux';
import NextQuestion from './next-question';
import Answer from './answers';
import ScoreCard from './scoreCard';
import { fetchQuestion } from '../actions/questions';
import { fetchNext, fetchAnswer } from '../actions/answers';
import './dashboard.css';

export class Dashboard extends React.Component {
	componentWillMount() {
		this.props.dispatch(fetchQuestion());
		this.props.dispatch(fetchAnswer());
		this.props.dispatch(fetchNext());
	}

	render() {
		return (
			<div className="container col-md-10 center-block text-center dashboard">
				<div className="scoreCardWrapper">
					<ScoreCard />
				</div>
				<div className="selectionFieldWrapper">
					<NextQuestion />
					<Answer />
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	username: state.auth.currentUser.username,
	questions: state.questions.data.question,
	answers: state.answers.data.answer,
	next: state.next.data,
	loading: state.questions.loading,
	runningScore: state.answers.score,
});
export default requiresLogin()(connect(mapStateToProps)(Dashboard));
