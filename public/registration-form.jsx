import Validation from 'react-validation';
import React, {Component, PropTypes} from 'react';

export default class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {firstName: '', lastName: '', gender: '', email: '', password: '',};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({[event.target.attributes.name.value]: event.target.value});
    }

    render() {
        return <Validation.components.Form onSubmit={this.handleSubmit}>
            <h3>Registration</h3>
            <div>
                <label>
                    Firstname*
                    <Validation.components.Input errorClassName='is-invalid-input' value='' maxLength="15"
                                                 name='firstName' validations={['required', 'alpha']}
                                                 onChange={this.handleChange}/>
                </label>
            </div>
            <div>
                <label>
                    Lastname*
                    <Validation.components.Input errorClassName='is-invalid-input' value='' maxLength="15"
                                                 name='lastName' validations={['required', 'alpha']}
                                                 onChange={this.handleChange}/>
                </label>
            </div>
            <div>
                <label>
                    Gender*
                    <Validation.components.Select errorClassName='is-invalid-input' name='gender' value=''
                                                  validations={['required']} onChange={this.handleChange}>
                        <option value=''>Choose gender</option>
                        <option value='male'>Male</option>
                        <option value='female'>Female</option>
                    </Validation.components.Select>
                </label>
            </div>
            <div>
                <label>
                    Email*
                    <Validation.components.Input errorClassName='is-invalid-input' value='' name='email'
                                                 validations={['required', 'email']} onChange={this.handleChange}/>
                </label>
            </div>
            <div>
                <label>
                    Password*
                    <Validation.components.Input errorClassName='is-invalid-input' type='password' value=''
                                                 minLength="6" maxLength="15" name='password'
                                                 validations={['required', 'password']}
                                                 onChange={this.handleChange}/>
                </label>
            </div>
            <div>
                <label>
                    Confirm Password*
                    <Validation.components.Input errorClassName='is-invalid-input' type='password' value=''
                                                 minLength="6" maxLength="15" name='passwordConfirm'
                                                 validations={['required', 'password']}/>
                </label>
            </div>
            <div>
                <Validation.components.Button >Submit</Validation.components.Button>
            </div>
        </Validation.components.Form>;
    }
}