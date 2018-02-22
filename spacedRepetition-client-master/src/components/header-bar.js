import React from 'react';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';

export class HeaderBar extends React.Component {
	logOut() {
		this.props.dispatch(clearAuth());
		clearAuthToken();
	}

	render() {
		// Only render the log out button if we are logged in
		let logOutButton;
		if (this.props.loggedIn) {
			logOutButton = (
				<button onClick={() => this.logOut()} className="btn btn-primary btn-sm">
					Log out
				</button>
			);
		}

		return (
			<div className="container col-md-10">
				<div className="header-bar">
					<h1>Hola Mundo!</h1>
					{logOutButton}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null,
	user: state.auth.currentUser,
});

export default connect(mapStateToProps)(HeaderBar);
