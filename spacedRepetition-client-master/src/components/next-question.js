import React, { Component } from 'react';
import requiresLogin from './requires-login';
import { connect } from 'react-redux';

export class NextQuestion extends Component {
	render() {
		//console.log('NEXT-QUESTION-COMPONENT', props.next)
		return (
			<div>
				<h3 className="spanishWord">Spanish word is:</h3>
				<h2 className="spanish_question">{this.props.next.question}</h2>
			</div>
		);
	}
}
const mapStateToProps = state => ({
	username: state.auth.currentUser.username,
	next: state.next.data,
});

export default requiresLogin()(connect(mapStateToProps)(NextQuestion));
