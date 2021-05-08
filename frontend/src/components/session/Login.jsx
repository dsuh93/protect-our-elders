import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        let user = {
            username: this.state.username,
            password: this.state.password,
        }
        //  
        this.props.login(user);
    }

    guestLoginUpdate(key, value){
        this.setState({
            [key]: value
        })
    }

     componentWillUnmount(){
        const resetErrors = {};
        this.props.refreshErrors(resetErrors);
    }

    render() {
        const displayUsernameError = this.props.errors ? (<p className="login-form-error">{this.props.errors.username}</p>) : null;
        const displayPasswordError = this.props.errors ? (<p className="login-form-error">{this.props.errors.password}</p>) : null;
        return (
            <div className="login-page">
                <div className="login-form-container">
                    <h2>Admin Login:</h2>
                    <br/>
                    <form onSubmit={this.handleSubmit}>
                        <div className="login-form">
                            <div className="input-container">
                                <label className="input-label">Username:</label>
                                <input
                                    className="form-input"
                                    type="text"
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                    placeholder="Username"
                                />
                                {displayUsernameError}
                            </div>
                            <div className="input-container">
                                <label className="input-label">Password:</label>
                                <input
                                    className="form-input"
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    placeholder="Password"
                                />
                                {displayPasswordError}
                            </div>
                            <br/>
                            <button className="form-submit-btn">Log in</button>
                        </div>
                    </form>
                </div>
                <span class="login-disclaimer">
                    *If you are an admin and do not
                    <br/>
                    have access please contact:
                    <br/>
                    protect.our.elders.contact@gmail.com
                </span>
            </div>
        );
    }
}

export default withRouter(LoginForm);