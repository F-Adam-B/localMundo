import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import './registration-page.css';
import RegistrationForm from './registration-form';

export function RegistrationPage(props) {
	// If we are logged in (which happens automatically when registration
	// is successful) redirect to the user's dashboard
	if (props.loggedIn) {
		return <Redirect to="/dashboard" />;
	}
	return (
		<div className="registrationPageWrapper">
			<div className="registrationPageImageContainer">
				<img
					className="sideImageRegistration"
					src="https://www.letslearnspanish.co.uk/wp-content/uploads/2011/06/vamos-logo.png"
					alt="Invocation to learn Spanish"
				/>
			</div>
			<div className="registerFormWrapper">
				<RegistrationForm />
				<div className="loginLink">
					<Link to="/">Login</Link>
				</div>
			</div>
		</div>
	);
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null,
});

export default connect(mapStateToProps)(RegistrationPage);
