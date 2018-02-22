import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import LoginForm from './login-form';

export function LandingPage(props) {
	// If we are logged in redirect straight to the user's dashboard
	if (props.loggedIn) {
		return <Redirect to="/dashboard" />;
	}

	return (
		<div className="container col-md-10 center-block text-center" className="landingPageWrapper">
			<div className="backgroundImg">
				<div className="landingPageImageContainer">
					<img
						className="sideImage"
						src="https://www.letslearnspanish.co.uk/wp-content/uploads/2011/06/vamos-logo.png"
						alt="Spanish sea harbor"
					/>
				</div>
				<div className="loginFormWrapper">
					<LoginForm />
					<Link to="/register">Signup Here</Link>
				</div>
			</div>
		</div>
	);
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null,
});

export default connect(mapStateToProps)(LandingPage);
