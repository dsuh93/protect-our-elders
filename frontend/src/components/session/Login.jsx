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

    guestLoginUpdate(key, vaule){
        this.setState({
            [key]: vaule
        })
    }

     componentWillUnmount(){
        const resetErrors = {};
        this.props.refreshErrors(resetErrors);
    }

    render() {
        debugger
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit}>
                    <div className="login-form">
                        <div className="input-container">
                        <p className="input-label">Username</p>
                        <input  className="form-input" type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                            placeholder="Username"
                        />
                        {
                            this.props.errors? (
                                <p className="error">{this.props.errors.username}</p>
                            ): (null)
                        }
                        </div>
                        <div className="input-container">
                            <p className="input-label">Password</p>
                            <input className="form-input" type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                            />
                            
                        {
                            this.props.errors? (
                                <p className="error">{this.props.errors.password}</p>
                            ): (null)
                        }
                        </div>
                        <button className="form-submit">Log in</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(LoginForm);