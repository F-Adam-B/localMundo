import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { registerUser } from '../actions/users';
import { login } from '../actions/auth';
import Input from './input';
import LoaderButton from './LoaderButton';
import { required, nonEmpty, matches, length, isTrimmed } from '../validators';
import './registration-form.css';
export class RegistrationForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: false,
		};
	}

	onSubmit(values) {
		const { username, password, firstName, lastName } = values;
		const user = { username, password, firstName, lastName };
		return this.props.dispatch(registerUser(user)).then(() => this.props.dispatch(login(username, password)));
	}

	render() {
		return (
			<form className="register-form" onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
				<h2>Get Started!</h2>
				<label htmlFor="firstName">First name</label>
				<Field component={Input} type="text" name="firstName" placeholder="first name" />
				<label htmlFor="lastName">Last name</label>
				<Field component={Input} type="text" name="lastName" />
				<label htmlFor="username">Username</label>
				<Field component={Input} type="text" name="username" validate={[required, nonEmpty, isTrimmed]} />
				<label htmlFor="password">Password</label>
				<Field
					component={Input}
					type="password"
					name="password"
					validate={[required, length({ min: 10, max: 72 }), isTrimmed]}
				/>
				<label htmlFor="passwordConfirm">Confirm password</label>
				<Field
					component={Input}
					type="password"
					name="passwordConfirm"
					validate={[required, nonEmpty, matches('password')]}
				/>
				<button
					type="submit"
					className="btn btn-primary"
					disabled={this.props.pristine || this.props.submitting}
				>
					Register
				</button>
			</form>
		);
	}
}

export default reduxForm({
	form: 'registration',
	onSubmitFail: (errors, dispatch) => dispatch(focus('registration', Object.keys(errors)[0])),
})(RegistrationForm);
