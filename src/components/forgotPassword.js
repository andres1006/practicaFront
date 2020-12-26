import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';


class ForgotPassword extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      messageFromServer: '',
      showNullError: false,
    };
  }

  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  sendEmail = async (e) => {
    e.preventDefault();
    const { email } = this.state;
    if (email === '') {
      this.setState({
        messageFromServer: '',
        showNullError: true,
      });
    } else {
      try {
        const response = await axios.post(
          'http://xxxxxxx/forgotPassword',
          {
            email,
          },
        );
        console.log(response.data);
        if (response.data === 'recovery email sent') {
          this.setState({
            messageFromServer: 'recovery email sent',
            showNullError: false,
          });
        }
      } catch (error) {
        console.error(error.response.data);
        if (error.response.data === 'email not in db') {
          this.setState({
            messageFromServer: '',
            showNullError: false,
          });
        }
      }
    }
  };

  render() {
    const { email, messageFromServer, showNullError } = this.state;

    return (
      <div className="forgot-pass">
        <div className="logo">
          <img src="https://externalstorageaccount.blob.core.windows.net/recursos/img/auralogo.png" alt="logo" />
        </div>
        <h1 className="forgot-pass-title">Restaurar Contraseña</h1>
        <form className="form-forgot-pass" onSubmit={this.sendEmail}>
          <input
            className="login-input"
            onChange={this.handleChange('email')}
            value={email}
            id="email"
            label="email"
            placeholder="Ingrese su email"
            required
          />
          <br/>
          <button className="btn-login" type="submit">Restaurar Contraseña</button>
        </form>
        {showNullError && (
          <div>
            <p>The email address cannot be null.</p>
          </div>
        )}
        {messageFromServer === 'recovery email sent' && (
          <div>
            <h3>Password Reset Email Successfully Sent!</h3>
          </div>
        )}
        <div className="btn-inicio">
          <NavLink to='/'>Inicio</NavLink>
        </div>
      </div>
    );
  }
}

export default ForgotPassword;
